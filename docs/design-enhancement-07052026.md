# Design Enhancement — 7 May 2026

A round of design and frontend-architecture changes to make the marketing
site feel more polished, consistent across viewports, and easier to keep
clean as the codebase grows. This document captures *what* changed, *why*,
and the tradeoffs taken.

---

## 1. Typography system

**What:** Adopted **Inter** as the single typeface across body and headings,
served via Google Fonts with `display=swap` and `preconnect` hints. Wired
through MUI's `ThemeProvider` so every `Typography` component picks it up
without per-instance overrides.

**Why:** The previous setup used the OS default stack
(`system-ui, Avenir, Helvetica`), which renders inconsistently across
platforms and feels generic. An earlier draft of this work paired Inter
(body) with Space Grotesk (display); on review the rounded geometry of
Space Grotesk read as playful, which is wrong for a B2B scheduling
product. Sticking with one face — Inter — using **weight contrast** rather
than face contrast for hierarchy is the standard professional move (Linear,
Vercel, Figma).

Tracking on headlines was tightened to `letterSpacing: "-0.01em"` for an
editorial feel without leaning display-y.

**Files:** `index.html`, `src/theme.ts`, `src/index.css`

---

## 2. MUI theme as a single source of truth

**What:** Extracted the MUI theme to `src/theme.ts`. Defines palette
(dark mode, primary `#178FD6`, near-black background `#050a1a`), Inter
fontFamily, headline weight/tracking, button overrides
(`textTransform: "none"`, `fontWeight: 600`).

**Why:** Theme had been inline in `main.tsx`. Pulling it out gives us a
single file to evolve and a clear seam between bootstrap and design system.
`main.tsx` now only orchestrates providers, which is its real job.

**Important caveat learned the hard way:** The first revision set
`shape.borderRadius: 12`, which silently broke any `borderRadius: 2` in `sx`
across the codebase — that property is a *multiplier* of `shape.borderRadius`,
so the value jumped from `8px` (default) to `24px`, breaking visual
alignment with `MovingBorder` (8px) and other components. Reverted to the
default. The lesson: `shape.borderRadius` cascades app-wide; introduce it
deliberately or not at all.

**Files:** `src/theme.ts`, `src/main.tsx`

---

## 3. Aurora background layer

**What:** New component `Aurora.tsx`. Three slowly-drifting radial-gradient
"blobs" in brand blues, heavily blurred, fixed to the viewport at low
z-index. Includes a subtle vignette overlay so the page edges feel intentional.

**Why:** The site had a static SVG background that looked flat. The aurora
adds depth and motion without busy-ness — it reads as atmosphere rather
than decoration. Pure CSS keyframe animation, zero JS animation cost.

Originally the vignette lived in `Layout.tsx` and the blobs were three
hand-written `Box` components. Refactored so:

- Blob geometry is a typed `Blob[]` array — easy to add or tune.
- Vignette moved into `Aurora` itself, so `Layout` only renders
  `<Aurora />` without knowing about its internals.

**Tradeoff:** The aurora animates by default; it does *not* honor
`prefers-reduced-motion` (the keyframes still run for those users). If a
user complains about motion sickness, that's a one-line CSS fix to add.

**Files:** `src/components/Aurora.tsx`, `src/components/Layout.tsx`

---

## 4. Reusable motion primitives

**What:** New `src/lib/motion.ts` exporting:

- `EASE_OUT_EXPO = [0.22, 1, 0.36, 1]` — single easing curve used everywhere
- `DURATION_BASE = 0.7`
- `fadeUp`, `staggerParent`, `scaleIn` — Framer Motion variants

Plus `src/components/Reveal.tsx`, a thin wrapper that fades + slides
content up as it enters the viewport. Honors `prefers-reduced-motion`
(returns a static element when the user has set the preference).

**Why:** Without these, identical motion variants and easing arrays were
duplicated across `Hero.tsx` and `ServiceHero.tsx` (and would have spread
to every section that wanted reveal-on-scroll). Centralising them gives
us:

- One place to tune the entire site's motion personality.
- Type-safe variants reused everywhere instead of inline objects.
- Consistent feel — every fade-up uses the same curve and timing.

**Files:** `src/lib/motion.ts`, `src/components/Reveal.tsx`

---

## 5. `MediaFrame` — shared product-image wrapper

**What:** Component that wraps any product image or video with a window
chrome strip (three muted "traffic light" dots) and a soft blue drop shadow.

**Why:** Both `Hero` and `ServiceHero` needed the same treatment for their
product visuals — without a shared component, two files drifted with two
copies of the same gradient ring + shadow + chrome CSS. `MediaFrame` is
that shared component.

The frame went through several iterations during the review:

1. Heavy version with gradient outline ring, glass body, chrome bar, and
   `aspect-ratio` enforcement at `16/10`. Fixed inconsistency in source
   image dimensions but felt over-designed.
2. Stripped to just shadow + radius. Cleaner but lost the
   "this-is-a-product-screenshot" cue.
3. **Final**: chrome dot strip + soft drop shadow + 12px radius. No
   aspect-ratio enforcement (since source images are now standardised to
   4:3 by the design owner). Image flows at natural aspect, full column
   width.

**Why no aspect-ratio enforcement now:** The need for a fixed aspect-ratio
container was driven by inconsistent source image dimensions across service
pages. Since images are now normalised to 4:3 at the source, natural flow
gives consistent rendering — and the component stays simpler.

**Files:** `src/components/MediaFrame.tsx`

---

## 6. Hero and ServiceHero — split, animated, mobile-first

**What:** Both heroes were single 200-line render functions with inline
styles, inline Framer Motion variants, and breakpoint-based layout
(`flexDirection={{ xs: "column", md: "row" }}`). Now each is composed of
small subcomponents (`Eyebrow`, `StatCard`, `HeroCopy`, `HeroMedia`)
sharing the motion presets and `MediaFrame`.

**Visual additions:**

- **Eyebrow chip** with a glowing dot — gives the hero a tag line above
  the headline (`Built for complex workforces`).
- **Shimmering gradient on the word "AI"** in the headline — subtle 6s
  loop, single accent point so the rest of the page stays calm.
- **Stagger reveal** on copy elements (eyebrow → headline → subhead →
  CTA → stats), `scaleIn` on the media frame.
- **Stat cards** with vertical gradient accent bars on the left and
  uppercase-tracked labels.
- **Image float** — the hero image gently bobs (7s loop), disabled when
  `prefers-reduced-motion`.

**Layout philosophy — mobile-friendly *by design*, not by breakpoint:**

The user explicitly asked for mobile-friendliness without `xs:`/`md:`
conditions. Two techniques replaced every breakpoint object:

1. **Fluid sizing with `clamp()`** — `fontSize: "clamp(2.25rem, 6vw,
   3.75rem)"` scales smoothly from ~320px to ~1920px viewports, with
   sensible min/max bounds. Same for padding, gaps, tile dimensions.
2. **`flex-wrap` + `flex-basis`** — instead of `flexDirection` switching
   on viewport, both hero columns declare `flex: 1 1 26rem`. They sit
   side-by-side when there's room for two 26rem columns; they stack when
   there isn't. The "breakpoint" is *content-driven* rather than tied to
   a magic viewport number.

**Image-first JSX order on mobile:** The user noticed that on mobile,
having the copy stack on top with the image below felt weak — image is the
visual hook. Solution was to reorder the JSX so media comes first. With
flex-wrap, this means:

- Wide viewport: media on **left**, copy on **right**
- Narrow viewport: media on **top**, copy below

Tradeoff acknowledged: this flips desktop too (image-on-left is less
common than copy-on-left). Accepted as a deliberate design choice — strong
product screenshots pull the eye, copy reads as the explanation.

**`flex-basis` was bumped from 22rem to 26rem** after testing showed the
side-by-side layout activated too aggressively on tablets, squeezing both
columns into ~330px each. At 26rem the layout stays single-column through
tablet widths (~840px), giving the image full width on phones and tablets.

**ServiceHero specifically: dropped the `minHeight: 80vh + alignItems:
center`** combo. On mobile that vertically centred the entire stack inside
80% of the viewport, leaving a large empty band above the image. Service
pages don't need to fill the viewport like the homepage hero does —
natural padding flow is correct here. The homepage `Hero` keeps its
`minHeight: 90vh` because it *is* the actual hero.

**Files:** `src/components/Hero.tsx`,
`src/components/service/ServiceHero.tsx`

---

## 7. Story timeline — cleaner, animated, fluid

**What:** Single-column timeline with per-item reveal-on-scroll,
overline-style date labels, logo tiles for each entry, and a header
that uses `Reveal` for staggered intro.

**Why the layout changed:** The previous `position="alternate-reverse"`
timeline broke on mobile (alternating left/right is hostile to narrow
screens). Switched to single-column via the `timelineItemClasses.root:before`
override that drops the empty opposite side. Reads cleanly from 320px to
desktop with no layout switch.

**Other improvements:**

- **Logo tiles on the left** of each entry, rounded square (not circle —
  the team section already uses circles), light off-white background so
  logos with their own colors blend in.
- **Eyebrow "The Journey" + display heading** for the section header,
  matching the hero treatment for visual consistency.
- **`useReducedMotion`** honored on per-item reveal.
- **Fluid sizing** via `clamp()` (replaces `{ xs, md }` breakpoint
  objects).
- Component split into `StoryHeader` and `StoryItem` — the top-level
  `Story` is now ~25 lines that compose them, instead of one 130-line
  render.

**Files:** `src/components/Story.tsx`

---

## 8. Service page copy rewrites

**What:** All 7 service pages rewritten to be more concrete and less
generic.

**Why:** Every page had identical "Sign Up → Connect → Go Live" steps;
two-feature lists with vague claims; CTA strings duplicated verbatim.
Reads as a template rather than a pitch.

**Per page now:**

- Hero subtitle grounded in actual customer context where allowed
  (UParcel for Route Optimization, Pizza Hut Singapore for Gig
  Scheduling) — these are public in the Story timeline so it's safe.
- 3-step "How It Works" tied to the actual workflow of that service
  (e.g. for Demand Forecasting: "Connect data → Train forecasts → Plug
  into staffing"), not the generic template.
- Feature lists expanded from 2 to 4 items per page where reasonable —
  4 felt like the sweet spot between thin and overstuffed.
- CTA subtitles vary per page so the footer doesn't feel duplicated as
  users browse.
- All `ctaText` standardized to "Book a Demo" → `/demo` (was a mix of
  "Get Started" → `/contact` and friends).

No invented metrics or stats — claims kept to qualitative statements
the team can stand behind today.

**Files:** `src/pages/services/SchedulingSolutions.tsx`,
`src/pages/services/GigScheduling.tsx`,
`src/pages/services/FlexiScheduling.tsx`,
`src/pages/services/LeaveApp.tsx`,
`src/pages/services/ProfileManagement.tsx`,
`src/pages/services/RouteOptimization.tsx`,
`src/pages/services/DemandForecasting.tsx`

---

## 9. ServiceHero media — XOR type for image vs video

**What:** `ServiceData["hero"]` was changed so `videoSrc` and `imageSrc`
are mutually exclusive at the type level. Setting both is now a
TypeScript error.

**How it works:**

```ts
type HeroMedia =
  | { videoSrc: string; imageSrc?: never }
  | { imageSrc: string; videoSrc?: never }
  | { videoSrc?: never; imageSrc?: never };
```

**Why:** Both fields were optional, so it was structurally possible to
set both — at which point `ServiceHero`'s if/else cascade silently
preferred video over image, which is invisible to the editor of the
service data. Encoding the constraint at the type level catches the
mistake at compile time. Existing service pages all set just `videoSrc`,
so no consumer changes were needed.

A cleaner alternative considered (discriminated `media` field with
`type: "video" | "image"`) wasn't applied because it would have required
touching all 7 service pages. The XOR keeps the diff to ~10 lines.

**Files:** `src/types/service.ts`,
`src/components/service/ServiceHero.tsx`

---

## 10. Industries section — icon color bug fix

**What:** The industry cards' MUI icons (`<LocalHospital />`, `<School />`,
etc.) were appearing nearly black after the theme change.

**Root cause:** `<Avatar>` was set to `bgcolor: "primary.main"` then
overridden with `background: "transparent"`, with **no explicit `color`**.
Icons inherit `color` from the Avatar; in MUI's default light mode the
Avatar text color was white-ish, making icons readable. After
`mode: "dark"` was introduced in the theme, the default fell to
`palette.background.default` (`#050a1a`) — near-black, invisible against
the dark cards.

**Fix:** Set `color: "primary.main"` explicitly on the Avatar. Icons now
render in brand blue.

**Why this matters as a pattern:** Anything in the codebase that relied
on default light-mode colors will have the same latent bug. Likely
candidates: other `<Chip>`, `<Avatar>`, `<Paper>` without explicit colors.
The fix shape is always the same — make the color explicit. If you spot
"where did this go" weirdness elsewhere, this is probably the cause.

**Files:** `src/components/Industries.tsx`

---

## 11. Footer / FindUs socials — disabled with tooltip

**What:** Instagram and LinkedIn icon buttons are styled as "coming
soon" — visibly dimmed, non-clickable, with a tooltip on hover that
reads "Coming soon!".

**Why:** Real handles aren't ready. The previous version linked to
generic platform homepages, which read worse than admitting they're not
live yet.

**Implementation note:** MUI disabled buttons set `pointer-events: none`,
which kills tooltip hover detection. The fix is the standard MUI pattern:
wrap the disabled button in a `<Box component="span">` so hover events
still fire. The component swap (`<a>` when active, `<button>` when
disabled) keeps the semantics correct.

**Files:** `src/components/FindUs.tsx`

---

## 12. Index.html and assets

**What:**

- Added Google Fonts preconnect + Inter stylesheet link.
- Documented in this report (separately): the favicon is currently
  pointed at `/src/assets/...`, which works in dev but breaks in `vite
  build` because Vite hashes asset filenames. Recommended move is to
  `public/horaion-favicon.svg` for a stable URL — *not yet applied at
  the time of writing*, flagged for the design owner.
- Image MIME type on the favicon link is wrong (says PNG, file is SVG)
  — also flagged, not fixed.

---

## 13. CORS configuration on the backend (out of scope but related)

The frontend forms (`ContactForm`, `DemoForm`) submit to the Spring Boot
API at `http://localhost:8080`. Backend CORS was not configured;
without that, browser preflights would block the requests. Added a
`CorsConfiguration` with allowed origins driven by
`APP_CORS_ALLOWED_ORIGINS` in `.env.app`. Listed here for completeness
since it's necessary for the frontend changes above to actually work
end-to-end in dev.

**Files (backend):**
`landing-app/src/main/java/com/horaion/landing/shared/web/CorsConfiguration.java`,
`landing-app/src/main/resources/application.yaml`,
`landing-app/.env.app`

---

## File map summary

```
src/
  theme.ts                          ← MUI theme, Inter, palette, dark mode
  lib/
    motion.ts                       ← Easing, durations, variants — single source
  components/
    Aurora.tsx                      ← Drifting gradient blobs + vignette
    Reveal.tsx                      ← Reveal-on-scroll wrapper
    MediaFrame.tsx                  ← Window-chrome wrapper for product images
    Hero.tsx                        ← Eyebrow / StatCard / HeroCopy / HeroMedia
    Story.tsx                       ← StoryHeader / StoryItem / LogoTile
    Industries.tsx                  ← Icon color fix
    FindUs.tsx                      ← Disabled socials with tooltip
    Layout.tsx                      ← Renders Aurora; cleaner wrapper
    service/
      ServiceHero.tsx               ← HeroCopy / HeroMedia, shared MediaFrame
  types/
    service.ts                      ← XOR type for video vs image
  pages/services/
    *.tsx                           ← Copy rewrites across all 7
```

---

## Tradeoffs and known gaps

- **Color tokens still inline.** `#178FD6`, `#7ec8ff`, `#FFFCF6` are
  scattered across files. Would benefit from being lifted into the theme
  as palette tokens, but doing that touches dozens of unrelated files —
  flagged for a future pass.
- **Reduced motion is partial.** `Aurora` blobs animate regardless of
  user preference. Other animations (Reveal, hero float, stagger) honor
  it.
- **Favicon path** still references `/src/assets/...` which breaks in
  production. Move to `public/` recommended.
- **`MovingBorder`** is unchanged. It works, but its CSS lives in the
  component as inline `<style>` rather than being part of the design
  system. Acceptable for now.
- **Theme `shape.borderRadius`** was reverted to default after a bug
  surfaced. If we later want a more rounded UI by default, the right
  approach is to introduce that change and audit every `borderRadius:
  N` usage in `sx` simultaneously.

---

## Outcome

Site reads as a deliberate design system rather than a Vite starter with
MUI bolted on. Single typeface, consistent motion, shared image frame
treatment, fluid layout that responds to viewport without breakpoint
conditions. Code-side, the hero, story, and service-page templates are
each composed of small named pieces sharing motion/theme primitives —
much cheaper to evolve than the previous render functions.
