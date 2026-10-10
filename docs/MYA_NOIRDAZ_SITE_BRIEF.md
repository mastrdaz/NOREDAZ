# Mya handoff — Noirdaz.com

## Mission

Build the first professional public website for **Noirdaz Industries** at **noirdaz.com**.

Noirdaz is the public-facing company for practical software, digital services, hosting, managed business tools, and future products. **Neon Gorilla Labs (NGL)** remains the separate experimental/R&D playground.

The site should feel like a legitimate small technology company: polished, restrained, credible, modern, and easy for a prospective customer or partner to understand.

Do not deploy or spend money without Daz's explicit approval. Do not buy domains, subscriptions, credits, ads, or services.

## Existing repo

Work in this repository and preserve useful existing planning material:

- repo: `mastrdaz/NOREDAZ`
- current repo name/spelling is legacy; all public-facing copy must use **Noirdaz**
- primary domain: **noirdaz.com**
- product domain: **synccoverage.com**

If renaming the GitHub repository would materially simplify the project, propose the rename to Daz before doing it.

## Brand direction

Working name: **Noirdaz Industries**

Visual direction:
- black / charcoal foundation
- deep purple accent
- silver / soft white
- premium, sleek, slightly mysterious, but still friendly and trustworthy
- avoid generic neon-cyberpunk overload
- avoid looking like a one-person hobby portfolio
- avoid fake enterprise claims, fake testimonials, fake client logos, fake certifications, fake team members, or invented company history

The site should look appropriate for a company that may sell software, managed services, hosting, operational tools, and future products.

## Core positioning

Noirdaz builds practical technology for real operational problems.

Previous direction worth preserving:
- hero idea: **"Real possibilities for what's next."**
- value themes:
  - People Focused
  - Innovation Driven
  - Built for Progress
  - Trusted Partner

Treat those as working copy, not sacred wording. Improve them if the result is stronger and still matches the brand.

## Initial information architecture

Create a professional site with reusable components and clean navigation.

Required routes:
- `/` — Home
- `/products` — Products
- `/services` — Services
- `/about` — About Noirdaz
- `/contact` — Contact / business inquiries

Optional only if there is enough real content:
- `/careers`

Do not create empty filler pages just to make the nav look larger.

## Homepage

The homepage should explain in seconds:
1. what Noirdaz is,
2. what it builds/offers,
3. why a business should care,
4. where to learn more.

Recommended sections:
- hero
- short company positioning
- featured product(s)
- services / capabilities
- values / operating principles
- a restrained business inquiry CTA
- professional footer

## Products

### Sync Coverage

Feature **Sync Coverage** prominently as Noirdaz's first serious software product.

Product domain:
- `https://synccoverage.com`

Position it as a workforce scheduling and staffing/coverage platform for organizations with complex scheduling requirements.

The Noirdaz site should provide a concise product summary and link to the dedicated Sync Coverage site. Do not duplicate the entire Sync marketing site.

Do not publish pricing. Use a sales/demo/contact path instead.

Future products may be added later, so build the product layout/config so additional products can be added without redesigning the site.

## Services

Initial service categories can include only areas Noirdaz is actually prepared to discuss:
- custom/internal software
- business workflow and automation tools
- websites and managed digital presence
- hosting / managed technical services
- operational tooling and integrations

Avoid overpromising capability or scale.

## About

Explain the company in a grounded way.

Noirdaz is the public-facing home for practical products and services that are ready to be operated, supported, and presented professionally. NGL is the separate R&D/prototyping environment.

Do not invent employee counts, office locations, years in business, customer counts, awards, partnerships, or certifications.

## Contact / sales

No public pricing table.

Include clear paths for:
- general business inquiries
- product / Sync Coverage inquiries
- sales / demonstrations
- support (only if a real support channel exists)

Use centralized config/placeholders for email addresses until Daz confirms the actual inboxes/forwarders. Do not publish fake or nonfunctional contact addresses as if they are active.

A contact form can be built visually, but do not introduce a paid form/email provider without approval.

## Technical direction

Preferred stack:
- Next.js
- TypeScript
- Tailwind CSS

Static-first is preferred. Avoid introducing a backend unless there is a real requirement.

Requirements:
- responsive
- accessible
- semantic HTML
- fast
- SEO-ready metadata
- good Open Graph/social metadata
- reusable components
- site copy/data separated from components where practical
- central theme/design tokens
- no secrets in source
- no unnecessary dependencies

Before choosing a different framework, inspect the repo and document why the alternative is materially better.

## Cloudflare target

Plan for Cloudflare hosting. A static marketing site is sufficient for v1.

Do not create broad Cloudflare credentials. Expect a least-privilege token supplied through environment secrets.

Likely required capabilities:
- deploy/manage the Noirdaz site
- read the Noirdaz zone
- edit Noirdaz DNS records if needed

Do not touch unrelated Cloudflare zones or NGL infrastructure.

## Porkbun / registrar

`noirdaz.com` is registered at Porkbun.

Porkbun access, if supplied, is registrar bootstrap access only:
- restrict to `noirdaz.com`
- no purchases
- no registrations
- no renewals/transfers unless Daz explicitly approves
- use it only for necessary nameserver/domain configuration

Once Cloudflare is authoritative, DNS work should happen in Cloudflare rather than duplicating records at Porkbun.

Never commit Porkbun keys, Cloudflare tokens, or other credentials.

## Workflow

1. Inspect the entire current repository and existing docs.
2. Normalize public-facing spelling to **Noirdaz**.
3. Create a short implementation plan in the repo.
4. Build the site structure and theme.
5. Add real, restrained copy based on this brief and existing repo docs.
6. Add Sync Coverage as the featured product.
7. Run lint, typecheck, and production build.
8. Fix errors/warnings that are within scope.
9. Document local development and deployment steps.
10. Leave the repo in a clean, reviewable state.

## Guardrails

- no spending
- no domain purchases
- no subscriptions
- no financial transactions
- no ad purchases
- no broad API keys
- no invented business claims
- no invented customer logos/testimonials
- no deployment to production until Daz approves the first site review
- do not modify Sync Coverage application code from this repo task
- do not mix Neon Gorilla Labs branding into the Noirdaz public identity except where explaining the R&D relationship

## Definition of done for the first pass

A first-pass review should include:
- working Home, Products, Services, About, Contact routes
- polished Noirdaz visual system
- professional responsive header/footer
- credible homepage copy
- Sync Coverage featured product card/section
- no broken links
- no obvious placeholder lorem ipsum
- lint/typecheck/build passing
- README updated with run/build instructions
- a short `docs/SITE_STATUS.md` explaining what is complete, what is placeholder, and what Daz should review next

Stop after the first coherent reviewable build and report what was changed, what decisions were made, and what still needs Daz's input.
