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
- [ ] **Env vars in Vercel (needs owner).** Nothing below is set yet:
  - `RESEND_API_KEY` — from the Resend dashboard (Domain must be verified there
    before `RESEND_FROM` can send from it)
  - `RESEND_FROM` — verified sender address
  - `RESEND_TO` — one or more comma-separated recipient addresses
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — Places API key; without it the booking
    form's city-autocomplete field has no suggestions (`src/components/PlacesAutocomplete.tsx`)

  Resend is the sole active lead channel (see `src/app/api/leads/route.ts`) — without
  its three vars, leads submit successfully in the visitor's eyes but nothing is sent
  or recorded anywhere.
- [x] **Merge PR #5** — Florida expansion + CI + tests. Merged (squash) via PR #8.
- [x] **PR #4 — security headers.** Merged. `next.config.ts` sends X-Frame-Options,
      X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy, and a
      CSP scoped to allow Google Maps.

### GoHighLevel — dormant, deferred

CRM sync (`sendToGHL` in `src/app/api/leads/route.ts`) is intentionally **not**
part of the launch path. It's a no-op unless `GHL_API_KEY` is set — nothing to
configure, nothing breaks by leaving it unset. Revisit only when CRM sync
becomes a priority.

### Lead audit trail

No separate leads database exists (or is planned) — the audit trail is the
**Resend dashboard → Emails log** (resend.com/emails). Every submission sends
a formatted email containing all lead fields (name, phone, city, service,
details, timestamp), so the log is a searchable, timestamped record of every
lead once `RESEND_API_KEY` is set — no extra setup required.

For a persistent/filterable archive outside Resend (e.g. a dedicated mailbox
you can label and search in Gmail), add a second address to `RESEND_TO`
(comma-separated) — e.g. `alex@getmarketingbull.com, leads-archive@getmarketingbull.com`.

## Nice-to-have before launch

- [x] **`SITE_URL` now points at the real custom domain**, `https://junkremovalserviceusa.com`
      (was the `.vercel.app` default). This also fixes canonical URLs, the sitemap,
      and the OG/Twitter image `metadataBase`. The Vercel project already has both
      `junkremovalserviceusa.com` and `www.junkremovalserviceusa.com` attached — worth
      confirming in **Vercel → Domains** which one is set as the redirect target (i.e.
      that the other one 301s to it) so there's a single canonical URL.

## Automated coverage already in place

- **CI** (`.github/workflows/ci.yml`): lint → tests → build → typecheck on every PR.
- **Tests** (Vitest, 28): data integrity, `/api/leads` route (including
  multi-recipient `RESEND_TO`), and the `LeadForm` + `BookingWizard` lead funnels.
- **Nightly maintenance Routine** (daily 08:00 UTC): runs the check chain,
  `/code-review` on recent commits, and opens a draft PR with any safe fixes.
- **CodeRabbit** + **Vercel preview** on every PR.

## Growth (post-launch, from EXPANSION-PLAN.md)

- [ ] National expansion — requires the Phase 0 refactor first: `/[state]/[city]`
      routing, data-driven city model, sitemap sharding, 301s.
- [ ] Optionally promote large Miami sub-cities (Hialeah, Doral, …) to their own pages.
