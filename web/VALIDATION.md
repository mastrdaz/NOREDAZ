# Validation record

Initial implementation checked October 6, 2026. This report distinguishes checks run here from browser checks that remain open.

## Implemented scope

- Next.js / TypeScript / Tailwind static-export skeleton, isolated in `web/`.
- Eight public routes plus 404; reusable header, footer, hero, section headings, cards, CTA, and SVG brand components.
- Responsive CSS breakpoints at 1100, 850, and 600 pixels; single-column mobile page layouts and a collapsible mobile menu.
- Semantic landmarks, one H1 per route, skip link, labeled form fields, visible keyboard focus, current navigation state, Escape dismissal, and reduced-motion support.
- Honest local contact preview, unlinked social placeholders, and draft legal pages.
- No deployment, main-branch merge, DNS changes, paid service, runtime external API, or analytics.

## Checks run

- Dependency installation and clean `npm ci`: passed. ESLint is pinned to 9.39.5 to match the peer ranges of the current Next.js lint plugins. npm reports an upstream deprecation warning for ESLint 9; review a coordinated lint-toolchain update before launch. No production package depends on ESLint.
- ESLint, zero warnings: passed.
- TypeScript, strict no-emit check: passed.
- Production static build: passed; all required and optional routes prerendered.
- Static export checks: 19 passed. Checks cover route output, H1/landmarks/metadata, every local link and fragment target, every linked JS/CSS/SVG asset, draft/privacy/contact labeling, 404 output, noindex behavior, and exclusion of the operating guide and historical branding from public output.
- Local HTTP preview: passed. The twentieth test verifies all eight routes, favicon, robots, HEAD, 404, and rejection of POST submissions.
- Production dependency audit: zero reported vulnerabilities at the time of this check; not a security guarantee.
- Existing planning files: unchanged from the base commit.

## Browser verification limit

Browser visual/interaction testing could not run in this execution environment. Installed headless Chromium aborted with `socket() failed: Operation not permitted`. The supported cloud browser rejected the localhost preview with `ERR_BLOCKED_BY_CLIENT`. Those restrictions were respected.

No screenshot, responsive visual pass, full accessibility audit, browser console pass, or interaction pass is claimed. Responsive behavior is implemented but still needs a real-browser check.

## Remaining browser checklist

Run `npm run dev` or `npm run build && npm run preview`, then:

- [ ] Inspect every route at 1440px desktop, 768px tablet, 390px phone, and 320px narrow-phone widths.
- [ ] Confirm no horizontal scroll, overlapping text, clipped controls, missing artwork, or layout jumps.
- [ ] Confirm the hero and four values stay readable at 200% zoom and with larger default text.
- [ ] Follow every header, footer, card, and CTA link; verify product/service anchor scroll positions.
- [ ] Open and close the mobile menu repeatedly; close with Escape and outside click; confirm Escape restores toggle focus.
- [ ] Navigate from the mobile menu, then use Back and Forward; confirm URL, active link, and menu state.
- [ ] Use keyboard-only navigation and the skip link. Verify focus is visible and follows a sensible order.
- [ ] On the contact page, check missing and malformed email validation, then valid sample details. The result must say no message was sent or saved.
- [ ] Repeat preview checks and edit fields afterward. Confirm no network submission, browser storage, or form data in the URL.
- [ ] Confirm legal pages remain explicitly marked draft and unconfigured social entries are not links.
- [ ] Inspect browser console and network for errors, missing resources, and unintended external requests.
- [ ] Run a browser accessibility scan and manually inspect contrast, focus, and screen-reader labels.
- [ ] Review 404 behavior on a candidate host later; no hosting target has been configured here.

## Review before publication

Approve final logo and company copy; confirm real contact/social channels, product/service availability, legal pages, and domain ownership. Choose hosting separately, recheck dependencies, and deliberately review the preview noindex/robots protections. No auto-deployment is configured.
