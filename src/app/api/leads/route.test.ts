import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"

// Mock the Resend SDK so no real email is sent.
const sendMock = vi.fn().mockResolvedValue({ id: "email_123" })
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({ emails: { send: sendMock } })),
}))

import { POST } from "./route"

// Build a minimal object that satisfies what the handler uses off NextRequest.
function req(body: unknown, { raw = false } = {}) {
  return {
    json: async () => {
      if (raw) throw new SyntaxError("invalid json")
      return body
    },
  } as unknown as import("next/server").NextRequest
}

const LEAD_ENV = ["RESEND_API_KEY", "RESEND_FROM", "RESEND_TO", "GHL_API_KEY", "GHL_LOCATION_ID"]

describe("POST /api/leads", () => {
  beforeEach(() => {
    sendMock.mockClear()
    for (const k of LEAD_ENV) delete process.env[k]
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) }))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("returns 400 on invalid JSON", async () => {
    const res = await POST(req(null, { raw: true }))
    expect(res.status).toBe(400)
  })

  it("returns 422 when required fields are missing", async () => {
    const res = await POST(req({ name: "Jane" })) // no phone/city
    expect(res.status).toBe(422)
    const json = await res.json()
    expect(json.error).toMatch(/required/i)
  })

  it("returns 200 for a valid lead even with no integrations configured", async () => {
    const res = await POST(req({ name: "Jane Doe", phone: "3055550100", city: "Miami" }))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ success: true })
    expect(sendMock).not.toHaveBeenCalled()
    expect(fetch).not.toHaveBeenCalled()
  })

  it("sends a Resend email when RESEND_API_KEY is set", async () => {
    process.env.RESEND_API_KEY = "re_test"
    const res = await POST(req({ name: "Jane Doe", phone: "3055550100", city: "Miami" }))
    expect(res.status).toBe(200)
    expect(sendMock).toHaveBeenCalledTimes(1)
    const arg = sendMock.mock.calls[0][0]
    expect(arg.subject).toContain("Jane Doe")
    expect(arg.subject).toContain("Miami")
  })

  it("uses the GHL v2 endpoint + Version header when a location ID is set", async () => {
    process.env.GHL_API_KEY = "ghl_test"
    process.env.GHL_LOCATION_ID = "loc_1"
    await POST(req({ name: "Jane Doe", phone: "3055550100", city: "Miami" }))
    expect(fetch).toHaveBeenCalledTimes(1)
    const [url, init] = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(url).toContain("leadconnectorhq.com")
    expect((init.headers as Record<string, string>).Version).toBe("2021-07-28")
    expect(JSON.parse(init.body).locationId).toBe("loc_1")
  })

  it("falls back to the GHL v1 endpoint when no location ID is set", async () => {
    process.env.GHL_API_KEY = "ghl_test"
    await POST(req({ name: "Jane Doe", phone: "3055550100", city: "Miami" }))
    const [url] = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(url).toContain("rest.gohighlevel.com/v1/contacts")
  })

  it("still returns 200 when an integration throws (Promise.allSettled)", async () => {
    process.env.GHL_API_KEY = "ghl_test"
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network down")))
    const res = await POST(req({ name: "Jane Doe", phone: "3055550100", city: "Miami" }))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ success: true })
  })

  it("splits the name into GHL first/last correctly", async () => {
    process.env.GHL_API_KEY = "ghl_test"
    await POST(req({ name: "Mary Jane Watson", phone: "3055550100", city: "Miami" }))
    const [, init] = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0]
    const contact = JSON.parse(init.body)
    expect(contact.firstName).toBe("Mary")
    expect(contact.lastName).toBe("Jane Watson")
  })
})
