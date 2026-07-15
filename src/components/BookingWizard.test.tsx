// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { render, screen, cleanup, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { services } from "@/data/services"

// Replace the Google Maps-backed city autocomplete with a plain controlled
// input so the wizard can be tested without the Maps loader.
vi.mock("@/components/PlacesAutocomplete", () => ({
  default: ({
    value,
    onChange,
    placeholder,
  }: {
    value: string
    onChange: (v: string) => void
    placeholder?: string
  }) => (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}))

import BookingWizard from "./BookingWizard"

describe("<BookingWizard />", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) }))
  })

  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
  })

  async function completeStep1(user: ReturnType<typeof userEvent.setup>) {
    // Pick the first service tile.
    await user.click(screen.getByRole("button", { name: new RegExp(services[0].shortName, "i") }))
    // City input comes from the mocked PlacesAutocomplete (dynamic import).
    const city = await screen.findByPlaceholderText("Miami, FL")
    await user.type(city, "Miami, FL")
    await user.click(screen.getByRole("button", { name: /next →/i }))
  }

  it("gates step 1: Next is disabled until a service and city are chosen", async () => {
    const user = userEvent.setup()
    render(<BookingWizard />)
    expect(screen.getByRole("button", { name: /next →/i })).toBeDisabled()

    await user.click(screen.getByRole("button", { name: new RegExp(services[0].shortName, "i") }))
    // service picked but city still empty → still disabled
    expect(screen.getByRole("button", { name: /next →/i })).toBeDisabled()

    await user.type(await screen.findByPlaceholderText("Miami, FL"), "Miami, FL")
    expect(screen.getByRole("button", { name: /next →/i })).toBeEnabled()
  })

  it("walks the full funnel and posts a composed lead to /api/leads", async () => {
    const user = userEvent.setup()
    render(<BookingWizard />)

    await completeStep1(user)

    // Step 2: schedule
    await user.click(screen.getByRole("button", { name: /today/i }))
    await user.click(screen.getByRole("button", { name: /morning/i }))
    await user.click(screen.getByRole("button", { name: /next →/i }))

    // Step 3: contact
    await user.type(screen.getByPlaceholderText("John Smith"), "Jane Doe")
    await user.type(screen.getByPlaceholderText("(305) 555-0100"), "3055550100")
    await user.click(screen.getByRole("button", { name: /free quote/i }))

    expect(await screen.findByText(/on the list/i)).toBeInTheDocument()

    expect(fetch).toHaveBeenCalledTimes(1)
    const [url, init] = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(url).toBe("/api/leads")
    const payload = JSON.parse(init.body)
    expect(payload).toMatchObject({
      name: "Jane Doe",
      phone: "3055550100",
      city: "Miami, FL",
      service: services[0].slug,
    })
    // The description folds in the schedule choices.
    expect(payload.description).toContain("Date: today")
    expect(payload.description).toContain("Time: morning")
  })

  it("shows an error and stays on step 3 when the request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }))
    const user = userEvent.setup()
    render(<BookingWizard />)

    await completeStep1(user)
    await user.click(screen.getByRole("button", { name: /today/i }))
    await user.click(screen.getByRole("button", { name: /morning/i }))
    await user.click(screen.getByRole("button", { name: /next →/i }))
    await user.type(screen.getByPlaceholderText("John Smith"), "Jane Doe")
    await user.type(screen.getByPlaceholderText("(305) 555-0100"), "3055550100")
    await user.click(screen.getByRole("button", { name: /free quote/i }))

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText(/on the list/i)).not.toBeInTheDocument(),
    )
  })
})
