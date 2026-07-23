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
- [ ] **Env vars in Vercel (needs owner).** All env vars for this project are
      prefixed `JUNK_` (agency convention — multiple client sites share the
      same Vercel team/Supabase org, the prefix keeps each project's vars
      unambiguous). Nothing below is set yet:
  - `JUNK_RESEND_API_KEY` — from the Resend dashboard (Domain must be verified
    there before `JUNK_RESEND_FROM` can send from it)
  - `JUNK_RESEND_FROM` — verified sender address
  - `JUNK_RESEND_TO` — one or more comma-separated recipient addresses
  - `NEXT_PUBLIC_JUNK_GOOGLE_MAPS_API_KEY` — Places API key; without it the
    booking form's city-autocomplete field has no suggestions
    (`src/components/PlacesAutocomplete.tsx`). Note `NEXT_PUBLIC_` must stay the
    literal prefix — Next.js requires that exact string to expose a var to the
    browser bundle, so `JUNK_` is inserted after it, not before.

  Resend is the sole active lead channel (see `src/app/api/leads/route.ts`) — without
  its three vars, leads submit successfully in the visitor's eyes but nothing is sent
  or recorded anywhere.
- [x] **Merge PR #5** — Florida expansion + CI + tests. Merged (squash) via PR #8.
- [x] **PR #4 — security headers.** Merged. `next.config.ts` sends X-Frame-Options,
      X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy, and a
      CSP scoped to allow Google Maps.

### GoHighLevel — dormant, deferred

CRM sync (`sendToGHL` in `src/app/api/leads/route.ts`) is intentionally **not**
part of the launch path. It's a no-op unless `JUNK_GHL_API_KEY` is set —
nothing to configure, nothing breaks by leaving it unset. Revisit only when
CRM sync becomes a priority.

### Lead storage / audit trail

**Known gap:** today, if Resend fails *after* being configured (bad domain
verification, outage, rate limit), the API route still returns success — the
visitor sees the confirmation screen and the lead is lost with no record
anywhere (only a `console.error` in Vercel's function logs, which nobody is
alerted to). `Promise.allSettled` in `POST` correctly stops one integration's
failure from breaking the response, but nothing currently guarantees the lead
data itself survives a failure.

**Planned fix (pending sign-off before touching shared infra):** persist every
lead to Postgres independent of Resend's outcome, using the agency's existing
shared Supabase project (`MarketingBull-Master-DB`) rather than provisioning
new infrastructure — add a `junk_leads` table and insert into it as a third,
always-run step in `POST` (not gated behind the other integrations' success).
This closes the data-loss gap and also gives a proper filterable/exportable
audit view (Supabase's Table Editor) beyond Resend's email log.

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
  multi-recipient `JUNK_RESEND_TO`), and the `LeadForm` + `BookingWizard` lead funnels.
- **Nightly maintenance Routine** (daily 08:00 UTC): runs the check chain,
  `/code-review` on recent commits, and opens a draft PR with any safe fixes.
- **CodeRabbit** + **Vercel preview** on every PR.

## Growth (post-launch, from EXPANSION-PLAN.md)

- [ ] National expansion — requires the Phase 0 refactor first: `/[state]/[city]`
      routing, data-driven city model, sitemap sharding, 301s.
- [ ] Optionally promote large Miami sub-cities (Hialeah, Doral, …) to their own pages.
