# Launch Checklist

Tracks the work that must happen before this site goes live. Items marked
**(needs owner)** require decisions or secrets only the site owner can provide —
automated jobs cannot complete them.

## Blockers

- [x] **Real phone number.** The site-wide number `PHONE` in
      `src/lib/constants.ts` — `(855) 885-5865` — is real and is now used on
      every page, including city pages (previously they rendered fake per-city
      `555` numbers). The unused `phone` field still on each `City` in
      `src/data/cities.ts` is now dead data; only replace with per-market
      tracking numbers if/when local numbers are desired.
- [ ] **Lead integration env vars in Vercel (needs owner).** Set so the booking
      form actually emails + creates CRM contacts (see `src/app/api/leads/route.ts`):
  - `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`
  - `GHL_API_KEY`, and `GHL_LOCATION_ID` (v2) — omit the location ID to use the v1 agency API
- [ ] **Merge PR #5** — Florida expansion (50 cities) + CI + tests. Review then merge.
- [ ] **Decide on PR #4** — security headers (open draft).

## Nice-to-have before launch

- [ ] `SITE_URL` in `src/lib/constants.ts` points to the `.vercel.app` domain —
      update to the production custom domain once assigned (also fixes canonical
      URLs and OG image `metadataBase`).
- [ ] Confirm Google Maps Places API key/billing for the booking form autocomplete.

## Automated coverage already in place

- **CI** (`.github/workflows/ci.yml`): lint → tests → build → typecheck on every PR.
- **Tests** (Vitest, 26): data integrity, `/api/leads` route, and the `LeadForm`
  + `BookingWizard` lead funnels.
- **Nightly maintenance Routine** (daily 08:00 UTC): runs the check chain,
  `/code-review` on recent commits, and opens a draft PR with any safe fixes.
- **CodeRabbit** + **Vercel preview** on every PR.

## Growth (post-launch, from EXPANSION-PLAN.md)

- [ ] National expansion — requires the Phase 0 refactor first: `/[state]/[city]`
      routing, data-driven city model, sitemap sharding, 301s.
- [ ] Optionally promote large Miami sub-cities (Hialeah, Doral, …) to their own pages.
