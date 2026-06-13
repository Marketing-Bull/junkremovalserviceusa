## Palm Beach County expansion — 12 new city pages

### What's added

12 new Palm Beach County cities, each with unique headline, description, neighborhoods, and zips:

- **North Palm Beach** (33408) — water-coast neighborhoods: Lost Tree, Old Port Cove, Frenchman's Harbor, Captains Key, Hidden Key
- **Juno Beach** (33408) — Ocean Trace, Beach Walk, Juno Isles
- **Palm Beach Gardens** (33410, 33412, 33418) — PGA National, BallenIsles, Evergrene, Avenir
- **Jupiter** (33458, 33469, 33477, 33478) — Inlet, Island, Admirals Cove, Abacoa, The Farms
- **Tequesta** (33469) — Country Club, Riverbend
- **West Palm Beach** (33401-33417) — CityPlace, Northwood, El Cid, SoSo, The Acreage
- **Palm Beach** (33480) — Worth Ave, Billionaires Row (white-glove / discreet copy)
- **Palm Beach Shores** (33404)
- **Riviera Beach** (33404) — Marina District
- **Singer Island** (33404) — oceanfront
- **Lake Park** (33403)
- **Mangonia Park** (33407)

### Other changes

- `CityPageTemplate` — "Other Cities" footer now pulls from `cities.ts` dynamically (was hardcoded 6-city list)
- `HomepageTemplate` — FAQ "What areas do you serve?" now auto-lists all cities
- `constants.ts` — `SITE_DESCRIPTION` updated to mention PBC

### Build

`npm run build` — 18 city routes (6 existing + 12 new) generated as static HTML. No type errors.

### Deploy

- Vercel will auto-deploy when this merges to `main`
- Domain: `junkremovalserviceusa.vercel.app`
