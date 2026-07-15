import { describe, it, expect } from "vitest"
import { services, getServiceBySlug } from "./services"

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

describe("services data", () => {
  it("has services defined", () => {
    expect(services.length).toBeGreaterThan(0)
  })

  it("has globally unique, URL-safe service slugs", () => {
    const slugs = services.map((s) => s.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const s of services) {
      expect(s.slug, s.slug).toMatch(slugPattern)
    }
  })
})

describe("getServiceBySlug", () => {
  it("returns undefined for an unknown slug", () => {
    expect(getServiceBySlug("does-not-exist")).toBeUndefined()
  })

  it("round-trips every known slug", () => {
    for (const s of services) {
      expect(getServiceBySlug(s.slug)?.slug).toBe(s.slug)
    }
  })
})
