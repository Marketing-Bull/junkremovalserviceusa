import { describe, it, expect } from "vitest"
import { cities, getCityBySlug } from "./cities"

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

describe("cities data", () => {
  it("has at least the launched Florida coverage", () => {
    expect(cities.length).toBeGreaterThanOrEqual(50)
  })

  it("has globally unique city slugs", () => {
    const slugs = cities.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("has valid, URL-safe city slugs", () => {
    for (const c of cities) {
      expect(c.slug, `city "${c.name}"`).toMatch(slugPattern)
    }
  })

  it("has all required fields populated for every city", () => {
    for (const c of cities) {
      expect(c.name, c.slug).toBeTruthy()
      expect(c.state, c.slug).toBeTruthy()
      expect(c.stateCode, c.slug).toMatch(/^[A-Z]{2}$/)
      expect(c.county, c.slug).toBeTruthy()
      expect(c.headline, c.slug).toBeTruthy()
      expect(c.description, c.slug).toBeTruthy()
      expect(c.phone, c.slug).toBeTruthy()
      expect(c.neighborhoods.length, `${c.slug} neighborhoods`).toBeGreaterThan(0)
      expect(c.zipCodes.length, `${c.slug} zipCodes`).toBeGreaterThan(0)
    }
  })

  it("has unique, URL-safe neighborhood slugs within each city", () => {
    for (const c of cities) {
      const nSlugs = c.neighborhoods.map((n) => n.slug)
      expect(new Set(nSlugs).size, `${c.slug} neighborhood slugs`).toBe(nSlugs.length)
      for (const n of c.neighborhoods) {
        expect(n.slug, `${c.slug} → ${n.name}`).toMatch(slugPattern)
      }
    }
  })

  it("uses 5-digit ZIP codes everywhere", () => {
    for (const c of cities) {
      for (const zip of c.zipCodes) {
        expect(zip, `${c.slug} zip`).toMatch(/^\d{5}$/)
      }
    }
  })
})

describe("getCityBySlug", () => {
  it("resolves a known slug to the right city", () => {
    expect(getCityBySlug("miami")?.name).toBe("Miami")
    expect(getCityBySlug("orlando")?.county).toBe("Orange County")
  })

  it("returns undefined for an unknown slug", () => {
    expect(getCityBySlug("nowhere-city")).toBeUndefined()
  })
})
