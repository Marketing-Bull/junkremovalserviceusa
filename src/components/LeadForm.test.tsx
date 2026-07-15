// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import LeadForm from "./LeadForm"

describe("<LeadForm />", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) }))
  })

  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
  })

  it("posts the filled fields to /api/leads and shows the success state", async () => {
    const user = userEvent.setup()
    render(<LeadForm />)

    await user.type(screen.getByLabelText(/full name/i), "Jane Doe")
    await user.type(screen.getByLabelText(/phone number/i), "3055550100")
    await user.type(screen.getByLabelText(/city \/ zip/i), "Miami, FL")
    await user.click(screen.getByRole("button", { name: /free quote/i }))

    // Success confirmation replaces the form.
    expect(await screen.findByText(/we received your request/i)).toBeInTheDocument()

    expect(fetch).toHaveBeenCalledTimes(1)
    const [url, init] = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(url).toBe("/api/leads")
    expect(init.method).toBe("POST")
    const payload = JSON.parse(init.body)
    expect(payload).toMatchObject({ name: "Jane Doe", phone: "3055550100", city: "Miami, FL" })
  })

  it("shows an error message when the request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }))
    const user = userEvent.setup()
    render(<LeadForm />)

    await user.type(screen.getByLabelText(/full name/i), "Jane Doe")
    await user.type(screen.getByLabelText(/phone number/i), "3055550100")
    await user.type(screen.getByLabelText(/city \/ zip/i), "Miami, FL")
    await user.click(screen.getByRole("button", { name: /free quote/i }))

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
    // Form is still present (not the success screen).
    expect(screen.queryByText(/we received your request/i)).not.toBeInTheDocument()
  })

  it("prefills city and service from props", () => {
    render(<LeadForm defaultCity="Orlando" defaultService="furniture-removal" />)
    expect(screen.getByLabelText(/city \/ zip/i)).toHaveValue("Orlando")
    expect(screen.getByLabelText(/service needed/i)).toHaveValue("furniture-removal")
  })
})
