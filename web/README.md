# NOIRDAZ INDUSTRIES website

An initial public-facing website skeleton, built with Next.js App Router, TypeScript, and Tailwind CSS. It is designed for a static export and is **not deployed**.

The existing root README and `docs/SMALL_BUSINESS_GUIDE.md` remain unchanged. Their historical spelling and planning details are not published by this app.

## Run locally

Use Node.js 22 or newer and npm. The lockfile fixes the tested dependency graph. The lint toolchain uses ESLint 9 to remain within the current Next.js plugin peer ranges; npm may show its upstream deprecation notice. No environment variables, credentials, account, or external API are needed.

```sh
cd web
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For a production-equivalent local preview:

```sh
npm run build
npm run preview
```

`next build` creates `web/out/`; it does not upload anything. The preview server binds only to `127.0.0.1`. Set `PORT=3001 npm run preview` if port 3000 is in use. Use `npm run dev -- --port 3001` for a different development port. `next start` is not used with this static-export configuration.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
npm test
# Or all of the above, in order:
npm run verify
```

Tests require the static export from `npm run build`. They validate every page, internal links and fragment targets, assets, semantic shell, metadata, placeholder disclosures, and local HTTP responses. They do not replace browser-based visual or accessibility testing. See [VALIDATION.md](./VALIDATION.md) for the verification record and remaining checks.

## Project structure

```text
web/
  app/                 Route pages, shared layout, metadata, and 404
  components/          Header, Footer, Brand, Hero, cards, CTA, contact preview
  lib/site.ts          Company details, navigation, values, products, services
  public/brand/        Replaceable SVG favicon/mark
  styles/tokens.css    Central brand colors and system typography
  styles/globals.css   Responsive layouts and component treatments
  scripts/             Local-only preview and static export/HTTP tests
  next.config.ts       Static export; no hosting provider configuration
```

Routes: `/`, `/products/`, `/services/`, `/about/`, `/contact/`, `/careers/`, `/privacy/`, and `/terms/`, plus a custom not-found page. Product and service cards point to real overview sections, which can be replaced with dedicated pages later.

## Brand and content

- The exact public spelling is **NOIRDAZ INDUSTRIES**. The GitHub repository is still named `NOREDAZ`; this work does not rename it.
- `styles/tokens.css` uses the supplied board's initial charcoal `#111827`, purple `#7C3AED`, and light-neutral `#F4F6F9`, with supporting tones. They remain adjustable, not permanently approved brand values.
- `components/Brand.tsx` is a clean SVG interpretation of the supplied ND direction, not a final master logo. Replace it and `public/brand/nd-mark.svg` together once approved assets exist.
- The hero uses vector geometry, a restrained dimensional treatment, and no external or generated bitmap art. No stock photos, external fonts, icon library, or remote asset dependencies.
- Company identity, shared copy, navigation, and structured cards are in `lib/site.ts`. Longer route-specific editorial copy stays with its page.
- The parent-company tone, value statements, and high-level solution descriptions come from the brief. No customer counts, testimonials, certifications, addresses, employees, legal status, or operating history are implied.
- `www.noirdaz.com` is recorded only as intended brand direction in config. No ownership verification, canonical URL, live domain link, or DNS change is implied.

## Deliberate placeholders

1. Final vector logo, approved typography, and color refinements.
2. Verified business email and any approved phone/address. Their config values are `null`.
3. Social profile URLs. Until set, they render as non-interactive “Coming soon” text, not dead links.
4. Product availability, final feature descriptions, individual product pages, and pricing.
5. Managed service scope, availability, support arrangements, and pricing. No purchase or contract path exists.
6. Contact delivery provider and data handling. The preview form validates locally and explicitly says it does not send or save. There is no API request, browser storage, or success claim. Use sample input only.
7. Final privacy notice and website terms, both conspicuously labeled drafts. These pages are placeholders, not legal advice or approved agreements.
8. Careers content. No openings, employees, or hiring promises are invented.

## Before any future launch

- Approve the brand and public copy; resolve the placeholders above.
- Run the browser QA checklist in `VALIDATION.md`, including narrow screens, keyboard navigation, menu dismissal, history navigation, and repeated form interactions.
- Add a real contact method with reviewed privacy/retention handling and honest error states. Never make the preview pretend to send.
- Review final legal pages against actual operations and data handling.
- Verify the chosen domain and hosting target separately. Set canonical/social metadata only after those are confirmed.
- Deliberately remove the `noindex` metadata in `app/layout.tsx` and `Disallow: /` in `public/robots.txt` only when publication is authorized. Robots directives are not access control.
- Recheck dependency advisories and production build behavior.

No database, authentication, analytics, cookies integration, paid service, deployment workflow, GitHub Pages setup, Cloudflare configuration, or domain/DNS changes are included. Publishing or deployment requires a separate decision.

## Framework references

- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
