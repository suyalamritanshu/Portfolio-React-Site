# CLAUDE.md — Portfolio site reference

Working reference for the codebase at `amritanshusuyal.netlify.app`. Concrete, file-path-driven — not a report.

## Stack and tooling

- **Framework**: Create React App (`react-scripts` 5.0.1), React 17.0.2, `react-dom` 17.0.2. Not React 18 — still using `ReactDOM.render` (`src/index.js:8`), not `createRoot`.
- **Routing**: `react-router-dom` v6, client-side only, no SSR/SSG. `BrowserRouter` wraps `<App />` in `src/index.js`. Single `public/index.html` — one static `<title>`/meta set for every route (see SEO section).
- **Styling**: primarily `styled-components` v5 (every component defines a `styled.x` block inline in the same file). `src/styles/GlobalStyle.js` holds CSS custom properties (design tokens) and global element resets, injected via `createGlobalStyle` in `src/index.js`.
- **UI libraries — duplicated**: both `@material-ui/core`/`@material-ui/icons` (MUI v4) and `@mui/material`/`@mui/icons-material` (MUI v5) are installed and both are actually imported (`src/App.js` uses `@material-ui/icons/Brightness4`, `@material-ui/icons/Menu`, `@material-ui/core` `Switch`/`IconButton`; `src/Components/Menu.js` uses `@mui/icons-material/Preview`; `src/Components/Menu.js` also pulls `GitHub`/`Pinterest` from `@material-ui/icons`). Two versions of the same library are being shipped.
- **Unused but installed deps** (present in `package.json`, zero imports anywhere in `src/`): `antd`, `bootstrap`, `@reach/combobox`, `@react-google-maps/api`, `react-geocode`, `react-google-autocomplete`, `react-google-recaptcha`, `use-places-autocomplete`, `emailjs` (the non-browser package; the actually-used one is `@emailjs/browser`), `emailjs-com`. `src/Data/mapStyles.js` (Google Maps style config) is also dead — nothing imports it.
- **Forms/email**: `@emailjs/browser` sends the contact form directly from the client (`src/Pages/Contact.js:27`) with a hardcoded service ID, template ID, and public key inline in the source.
- **Build/deploy**: Netlify (per the URL), but there is no `netlify.toml` in the repo — build settings must live in the Netlify dashboard, not version-controlled. `.nvmrc` pins Node 18. No CI config found (no `.github/workflows`).
- **No CMS/data layer** — everything is static, bundled at build time.
- **No tests** despite `@testing-library/*` being installed — no `*.test.js` files exist.

## Routing and page structure

Defined in `src/App.js:92-98`:

| Path | Component | File |
|---|---|---|
| `/` | Home | `src/Pages/Home.js` |
| `/about` | About | `src/Pages/About.js` |
| `/projects` | Projects | `src/Pages/Projects.js` |
| `/resume` | ResumePage | `src/Pages/ResumePage.js` |
| `/contact` | Contact | `src/Pages/Contact.js` |

`src/Pages/ActiveProjects.js` exists (renders a "blog"-style grid from `src/Data/blogs.js`) but **is not routed anywhere** — dead page, unreachable in the app.

Persistent chrome: `src/Components/Sidebar.js` (fixed left nav, contains `src/Components/Navigation.js` with avatar, 5 nav links, and a copyright footer) renders on every route via `src/App.js:65`. A hamburger menu (`src/App.js:84-88`) toggles the sidebar on narrow viewports.

## Component inventory

**Layout/chrome**
- `Sidebar.js` — fixed nav container, toggled via `navToggle` prop from `App.js`.
- `Navigation.js` — avatar image, 5 `NavLink`s, copyright footer with `new Date().getFullYear()`.
- `Layouts.js` (`src/styles/Layouts.js`) — exports `MainLayout` (page padding) and `InnerLayout` (section padding), used by every page.
- `GlobalStyle.js` — CSS variables (colors, typography scale, spacing not tokenized — see Design system).

**Content/section components**
- `Title.js` — big section heading, used at top of About/Projects/Resume/Contact/Skills.
- `SmallTitle.js` — icon + smaller heading, used inside `Resume.js` for "Working Experience" / "Educational Qualifications" subheadings.
- `ImageSection.js` — About page bio block: profile photo, name, bio paragraph, "View Resume" button linking to an external Google Drive direct-download URL (`ImageSection.js:16`), `target="_blank" rel="noreferrer"` (resume PDF is **not** in the repo). Same URL is also used by the hero's "Download Resume" link in `Home.js:36`.
- `Skills.js` — renders a hardcoded, arbitrary-percentage skill bar list (see Content data flow — this data lives inline in the component, not in `Data/`).
- `ProgressBar.js` — single skill bar (title + % width + % label), used by `Skills.js`.
- `Resume.js` — work experience + education timeline, calls `ResumeItem.js` per entry. **Content is hardcoded directly in this component** (not in `Data/`).
- `ResumeItem.js` — one timeline entry (year/title/subtitle/text).
- `Menu.js` — projects grid, maps over `portfolios` data, GitHub icon (MUI v4) + Preview icon (MUI v5) overlay per card.
- `Button.js` — project category filter pills, used by `Projects.js`.
- `ContactItem.js` — one contact method card (icon/title/value), used 3x in `Contact.js` for phone/email/address.
- `InputField.js` / `TextareaField.js` — bare form controls for the contact form. Styled with **Tailwind utility classes** (`border-b-2`, `bg-gray-100`, etc.) even though Tailwind is not a dependency in `package.json` and no Tailwind build step exists — these classes almost certainly do nothing in production.
- `PrimaryButton.js` — generic CTA link/button, used for "View Resume".

**Dead / unreachable components** (not imported by any live route):
- `ServicesSection.js` + `ServiceCard.js` — commented out in `About.js:15`. Contains real category cards ("React Js Development", "Node Js Development") mixed with literal `Lorem ipsum dolor sit amet...` placeholder copy that was never replaced.
- `ReviewsSection.js` + `ReviewItem.js` — commented out in `About.js:16`. Also literal `Lorem ipsum` placeholder text, no real testimonials ever added.
- `Mail.js` — completely empty file, unused.
- `ActiveProjects.js` (page) — unrouted, renders `Data/blogs.js`, which contains fake/placeholder blog titles ("How To Work from Home", two duplicate "How To Tse SEO Efficiently" entries with the same image).

## Content data flow

Content lives in three different places depending on the page — **inconsistent, worth knowing before editing anything**:

1. **`src/Data/portfolios.js`** — the only page whose content is properly externalized. Array of 11 project objects (`category`, `image`, `link1` (GitHub), `link2` (demo/preview), `title`, `text`). Drives `Projects.js` via `Menu.js`. These are old learning projects (Netflix clone, weather app, jokes app, etc.) — **none of the ground-truth projects (DeskDoc, FinovaAI) exist here.**
2. **`src/Data/blogs.js`** — same pattern, but only feeds the unrouted `ActiveProjects.js` page. Effectively dead data.
3. **Hardcoded directly in JSX** — everything else:
   - Hero headline/typewriter strings: `src/Pages/Home.js:36-55` (7 role titles cycled by `typewriter-effect`, none mention AI/agents).
   - Bio paragraph, "About Me" fact table, age: `src/Components/ImageSection.js:14-31`.
   - Work experience + education bullets: `src/Components/Resume.js:20-66`, written as JSX props to `ResumeItem`.
   - Skills + proficiency percentages: `src/Components/Skills.js:13-24`.
   - Contact details (phone, two email addresses, home address/city): `src/Pages/Contact.js:97-115`.
   - Social links (Instagram, GitHub, LinkedIn): `src/Pages/Home.js:62-82`, duplicated as icons in `Navigation.js`/elsewhere — **no single source of truth for these URLs**, they're re-typed per usage site.

**Important**: `Resume.js` already contains an updated Darwinbox entry (title "Software Engineer", dates "Jun '24 - Present") with specific metrics — "29%" UI performance improvement, "42%" bug reduction, "31%" engagement increase, "40%" adoption increase, "$100K first-month revenue", "40%" duplicate-effort reduction from Stencil components. **None of these numbers appear in the ground-truth positioning block** provided for the rewrite. They are either from an earlier, different resume draft or fabricated — flag for the user rather than assuming them to be true or carrying them forward.

## Design system

- **Tokens**: CSS custom properties in `src/styles/GlobalStyle.js:5-31`, scoped to `:root`. Covers color (primary/secondary/backgrounds/borders/text), a font-size scale (`--font-size-h1` through `--font-size-small`), but **no spacing scale** — margins/paddings are ad hoc `rem` values sprinkled through every component's `styled` block (no shared spacing tokens).
- **Dark/light mode**: `.light-theme` and `.dark-theme` classes duplicate the full token set (`GlobalStyle.js:33-69`) — the two blocks are near-identical (light mode barely differs from dark, e.g. `--primary-color` is unchanged). The toggle UI itself (`src/App.js:33-41`, `67-82`) is **commented out** — theme switching is dead in the UI, only `dark-theme` is ever applied (`App.js:26`, default state, never changed). Per commit `a3024a9 removing light mode`, this was already an intentional direction — the leftover light-theme CSS and toggle code is stale cleanup, not active functionality.
- **Typography**: Poppins, loaded via Google Fonts `<link>` in `public/index.html:15-16` (weights 200/300/400/600 only — no 500/700, so any `font-weight: 500` or `700` usage silently falls back). Scale is tokenized (see above) but headings also hardcode sizes in places, e.g. `Title.js:16` (`font-size: 3.1rem`) doesn't use a token at all.
- **Breakpoints**: no shared breakpoint tokens — every component hardcodes its own `@media screen and (max-width: Npx)`, and the pixel values vary component to component for what's conceptually the same "mobile" cutoff (e.g. 1200px in `Sidebar.js`/`App.js`, 978px in `Contact.js`, 920px/670px in `Menu.js`, 700px in `Skills.js`).
- **Animation patterns**: `transition: all .4s ease-in-out` repeated verbatim across nearly every styled component (not a token, just copy-pasted).
- **Icons**: mixed MUI v4/v5 icon sets (see Stack section).

## Assets

All under `src/img/` (imported as JS modules, bundled by webpack) — **53MB total**, most of it dead weight:

- `avatar.jpeg` (92KB) — **used** (`Navigation.js`, `ImageSection.js`).
- `avatar.jpg` (416KB) — **unused**, duplicate of the above at a different crop/size.
- `resume.jpg` (608KB) — **unused**, nothing imports it.
- `video1.mp4` (12MB) — **used**, autoplaying/looping/muted full-bleed background video on the Home hero (`Home.js:12-26`), no poster image, no compression pass evident, no `preload="none"`/lazy strategy. This downloads in full for every visitor landing on `/`.
- `video.mp4` (8.7MB), `video2.mp4` (6.3MB), `video3.mp4` (6.5MB), `video4.mp4` (14MB) — **all unused**, ~35MB of dead video assets sitting in the bundle-adjacent source tree.
- `logo.svg` — **unused**.
- `design.svg`, `intelligence.svg`, `game-dev.svg` — only referenced by the dead `ServicesSection.js`.
- `blogs/blog1-5.svg` — only referenced by the dead/unrouted `ActiveProjects.js`.
- `portImages/*` (3.6MB, 14 files) — used by `Data/portfolios.js` project cards.
- **Favicon**: `public/favicon.ico` exists and is wired up (`public/index.html:5`).
- **Resume PDF**: not in the repo at all — linked externally via a Google Drive direct-download URL (`https://drive.google.com/uc?export=download&id=...`, used in both `ImageSection.js:16` and `Home.js:36`), not the `/view` share form, so it downloads immediately rather than opening Drive's preview page. Fragile (revocable/movable outside repo control, no versioning with the site) — sharing settings verified in a fresh, unauthenticated browser context to confirm no sign-in/access-request prompt.
- **OG image**: none exists, none referenced.
- **`public/manifest.json`** references `logo192.png` and `logo512.png` (`manifest.json:11,16`) — **neither file exists in `public/`**. Broken manifest icon references (still using the default CRA template values, never customized).

## SEO and meta

- `public/index.html:9-11` — meta description is the unmodified CRA placeholder: `"Web site created using create-react-app"`.
- `public/index.html:35` — single static `<title>Amritanshu Suyal - Developer</title>` for the entire SPA; every route (`/`, `/about`, `/projects`, `/resume`, `/contact`) shares this exact title/description, since there's no `react-helmet` or per-route head management anywhere in `package.json` or `src/`.
- No Open Graph tags (`og:title`, `og:description`, `og:image`) anywhere.
- No Twitter Card tags.
- No structured data / JSON-LD (e.g. `Person` schema).
- No canonical `<link>`.
- No `sitemap.xml` in `public/`.
- `public/robots.txt` is the CRA default — allows all crawling, but that's the only thing it does.
- `public/manifest.json` is unmodified CRA boilerplate (`"short_name": "React App"`, `"name": "Create React App Sample"`, black/white theme colors) — never customized for this site.

## Accessibility and performance

- **Alt text**: `ImageSection.js:10` (profile photo) and every project image in `Menu.js:15` and blog image in `ActiveProjects.js:17` render `alt=""` — profile/content images with empty alt text (should be empty only for genuinely decorative images; these are not decorative).
- **Form label association is broken**: `Contact.js` renders `<label htmlFor="fullname">`/`htmlFor="email"` etc. (`Contact.js:75,79,83,87`), but `InputField.js` and `TextareaField.js` never set a matching `id` on the actual `<input>`/`<textarea>` — the `htmlFor` never resolves to anything, so screen readers won't associate the label with the field.
- **Dead Tailwind classes**: `InputField.js`/`TextareaField.js` use Tailwind utility classes with no Tailwind in the build — these render as unstyled/default browser inputs in production, which likely also hurts perceived contrast/affordance (worth visually confirming).
- **Heading order**: mostly reasonable per-page (`Title` → `h2`), but `ImageSection.js:13` jumps straight to `h4` ("I am Amritanshu") with no `h3` in between, and `Resume.js` goes `h2` (Title) → `h3` (SmallTitle) → `h5`/`h6` (ResumeItem), skipping `h4`.
- **No image dimensions**: none of the `<img>` tags across the codebase set explicit `width`/`height`, so every image load is a layout-shift risk (CLS).
- **Hero video weight**: the 12MB autoplay hero video on `/` (see Assets) is the single biggest performance liability on the site — it's the first thing a visitor's browser fetches.
- **No code splitting**: `react-router-dom` v6 routes are all imported eagerly at the top of `App.js` (no `React.lazy`/`Suspense`), so the whole app — including the dead `ActiveProjects`/`ServicesSection`/`ReviewsSection` code, both MUI versions, and every unused library still tree-shaken out at bundle time — ships as one bundle.
- **`react-app-polyfill`/browserslist**: nothing unusual, standard CRA defaults.

## Known issues (dead code, TODOs, commented-out blocks)

- `src/App.js:18-25` — commented-out loading-spinner state (`ClimbingBoxLoader` import at line 2 is unused as a result).
- `src/App.js:43-64` — commented-out background `<video>` block in the app shell (separate from the one actually used in `Home.js`).
- `src/App.js:67-82` — commented-out light/dark theme toggle UI; `Brightness4Icon`/`Switch`/`checked` state are only referenced here, i.e. dead code paths kept "alive" by nothing except this comment block.
- `src/Components/About.js:7,15,16` — commented-out `ReviewsSection`/`ServicesSection` imports and usage.
- `src/Components/Skills.js:18,21` — commented-out Python/C++ progress bars.
- `src/Pages/ActiveProjects.js` — entire page unrouted (see Routing).
- `src/Components/Mail.js` — empty file.
- Duplicate/unused image assets and unused npm packages — see Assets and Stack sections.
- `public/manifest.json` — unmodified CRA boilerplate, broken icon references.
- No `netlify.toml` — deploy config isn't in version control.
- No tests despite testing libraries being installed.
- EmailJS credentials (service ID, template ID, public key) hardcoded in `Contact.js:27` — public keys are meant to be client-exposed by design for EmailJS, but worth confirming this is still the intended account before any relaunch.
- Personal phone number and home address (city/neighborhood level) are hardcoded and publicly rendered on `/contact` (`Contact.js:100,112-113`) — not a code bug, but worth a conscious decision before this goes back out to recruiters.

## Working agreement

Standing context for this project — not a one-off instruction. Established because a run of decisions (SDE-I/SDE-II merge reasoning, education-vs-achievement distinction, refusing a redundant global-uninstall cycle, the height/width distortion catch, the SPA-fallback false positive, the mono-guardrail callout in the hero spec) all landed correctly without needing sign-off first.

### The brief (outranks any skill doc)

A recruiter or hiring manager has 60 seconds. In that time they must get: what I do, where I work, what I've built, and my resume. If a design or code decision makes any of those slower to reach, it's the wrong decision however good it looks.

Where a skill doc conflicts with this — as `redesign-existing-projects` does with parallax, scroll reveals, and smooth-scroll inertia — the brief wins. Don't ask.

### Design direction: A (Systems Log) + C's accent rail

- IBM Plex Sans (headings, body), IBM Plex Mono (labels, eyebrow, stack chips)
- Dark palette per the direction doc, every pairing ≥4.5:1
- Type scale: 16px base, 1.25 ratio — 13 / 16 / 20 / 25 / 31 / 39 / 49
- Signature element: mono stack chips on project cards
- From C: amber accent rail tying the sidebar's active-nav logic to section headings — on titled sections, not the hero

**Guardrails:**
- Mono is confined to stack chips, eyebrow labels, metadata. Never body copy, headings, or nav.
- Amber appears on: primary CTA, active nav, section ticks, stack chips, links. Nothing else — no amber borders, glows, or background washes.
- No terminal motifs: no ASCII, blinking cursors, bracket decorations, scanlines.
- Motion only where it communicates hierarchy or state. Respect `prefers-reduced-motion`.

### Content rule

Every factual claim traces to the ground-truth positioning block (Darwinbox role/dates, the Darwinbox/BigOHealth bullets, DeskDoc/FinovaAI descriptions, the skills list). If something on the site says something not covered there, delete it rather than paraphrasing it into something safer. Biographical facts (university, degree, dates) are not achievement claims and stay.

### Decide on my own — don't ask

- All implementation within the chosen direction: spacing, sizing, component structure, layout, responsive behaviour, token naming
- Bugs found in passing — fix and mention in the report (precedent: NavLink v6 props, duplicate meta tags, stretched avatar)
- Removing provably unused dependencies, dead files, dead imports
- Refactors that don't change rendered output
- Verification methodology, including when a check needs a real browser rather than curl
- Rejecting an instruction that's based on a wrong premise — say so and explain, don't comply with something pointless (precedent: the global-uninstall refusal)
- Sequencing and batching within an approved scope

### Escalate — these only

1. Any factual claim not in the ground-truth block
2. Adding, removing, or reordering a page/route
3. Changing the design direction itself, or breaking a guardrail above
4. Anything that would regress Lighthouse below the current baseline (94+/98+ Perf, 100/100 A11y, 100 BP, 100 SEO — mobile/desktop)
5. Installing anything third-party
6. Destructive git operations — history rewrite, force push, branch deletion
7. Anything needing account or dashboard access the user holds (Netlify, EmailJS, domain)

Everything else: decide, do it, report.

### Reporting

Report at checkpoints, not per step. A checkpoint is a coherent chunk of work — "hero built", "all pages migrated to new tokens", "audit pass complete." Each report covers:

- What changed and which files
- Decisions made under this authority, one line each
- Anything that would have been escalated under the old mode but was decided instead, so the boundary can be corrected if it's wrong
- Verification: what actually ran, against a production build, not the dev server
- What's still open

No "say go" at the end unless an escalation trigger was hit.

### Standing verification bar

- Production build, not dev server, for anything visual or performance-related
- Real browser for anything a headless check can false-positive on
- `web-design-guidelines` pass after each page or component group is migrated, not once at the end
- Lighthouse at the end of the redesign, reported before fixing whatever it surfaces
