# Structural Refactor — 7 May 2026

A pass to make the frontend repo more **digestible** and aligned with
common React/TypeScript practice. Driven by an audit that flagged clutter,
duplication, and concerns mixed inside single files. No feature changes —
this is purely structural and stylistic.

This document captures every change, the reasoning, and before/after snippets
for the most illustrative cases.

---

## Goals

1. **Smaller files, clearer responsibilities.** A few files had crossed
   200–500 lines, mixing data, layout, and behaviour.
2. **Separate content from rendering.** Service pages and pricing plans
   were 95% data wrapped in a thin component shell.
3. **Theme as the single source of truth for color.** Hardcoded hex
   literals (`#178FD6`, `#7ec8ff`, `#FFFCF6`, `#CCDDE8`) appeared in
   20+ files, decoupled from the MUI theme.
4. **Deduplicate the obvious.** The same form field styling, transition
   string, and option arrays were repeating across components.
5. **Kill dead code and tiny indirection files.**

---

## Summary of file moves

| Before | After |
|---|---|
| `src/pages/services/*.tsx` (×7 wrappers + `ServicePage.tsx`) | Deleted. Routes driven by `src/data/services/index.ts`. |
| Service-data literals inlined in page wrappers | `src/data/services/<slug>.ts` (one file per service) |
| `src/pages/services/ServicePage.tsx` | `src/components/service/ServicePageTemplate.tsx` |
| `src/components/Layout.tsx` (518 lines) | Split into `src/components/Layout.tsx` (35 lines) + `src/components/layout/{TopBar,SolutionsMenu,MobileDrawer,navConfig}` |
| Inline `industries` / `companySizeOptions` / `countryRegions` arrays in `DemoForm.tsx` | `src/data/demoFormOptions.ts` |
| Inline `fieldSx` / `selectMenuProps` styling in `DemoForm.tsx` | `src/components/forms/styles.ts` |
| Inline `plans` array in `PricePlans.tsx` | `src/data/pricingPlans.ts` |
| `src/api/endpoints.ts` (4-line indirection) | Inlined as `const X_PATH = "..."` in `contact.ts` / `demo.ts`. File deleted. |
| Hardcoded hex literals in `sx` everywhere | `theme.palette.primary.{main,light,dark}` and `theme.palette.canvas.{cream,mist}` |
| `transition: "transform 0.2s ease"` repeated in 8+ files | `TRANSITION_FAST` / `TRANSITION_BUTTON` from `src/lib/transitions.ts` |
| Commented-out `handleSubmit` block in `ContactForm.tsx` | Deleted |
| `ApiErrorResponse` type defined but unused | Used in `client.ts` for the failure branch |

---

## 1. Service pages → data registry

**Severity flagged:** High

### Before

7 files under `src/pages/services/`, each ~85 lines, each a `ServiceData`
literal followed by a one-line wrapper:

```tsx
// src/pages/services/SchedulingSolutions.tsx (existed before)
import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const service1Data: ServiceData = {
  title: "AI Scheduling Solutions",
  hero: { /* ...30 lines... */ },
  features: { /* ...20 lines... */ },
  howItWorks: { /* ...15 lines... */ },
  cta: { /* ...8 lines... */ },
};

const Service1 = () => <ServicePage data={service1Data} />;
export default Service1;
```

7× near-identical wrappers, plus `ServicePage.tsx` (the template) — all
under `pages/services/`.

`App.tsx` had to import each one and register a route by hand:

```tsx
import SchedulingSolutions from "./pages/services/SchedulingSolutions";
import RouteOptimization from "./pages/services/RouteOptimization";
// ... five more imports

<Route path="ai-scheduling-solutions" element={<SchedulingSolutions />} />
<Route path="/route-optimization" element={<RouteOptimization />} />
// ... five more <Route> lines
```

### After

```
src/data/services/
  index.ts                     ← registry (slug → data)
  scheduling-solutions.ts
  gig-scheduling.ts
  flexi-scheduling.ts
  leave-application.ts
  profile-management.ts
  route-optimization.ts
  demand-forecasting.ts

src/components/service/
  ServicePageTemplate.tsx      ← was pages/services/ServicePage.tsx
```

Each data file is just an exported `ServiceData`:

```ts
// src/data/services/scheduling-solutions.ts
import type { ServiceData } from "../../types/service";

export const schedulingSolutionsData: ServiceData = {
  title: "AI Scheduling Solutions",
  /* ... */
};
```

The registry:

```ts
// src/data/services/index.ts
import { schedulingSolutionsData } from "./scheduling-solutions";
import { routeOptimizationData } from "./route-optimization";
// ... five more imports

export type ServiceRouteEntry = {
  slug: string;
  data: ServiceData;
};

export const services: ServiceRouteEntry[] = [
  { slug: "ai-scheduling-solutions", data: schedulingSolutionsData },
  { slug: "route-optimization", data: routeOptimizationData },
  /* ... */
];
```

Routing in `App.tsx` becomes one map:

```tsx
{services.map(({ slug, data }) => (
  <Route
    key={slug}
    path={slug}
    element={<ServicePageTemplate data={data} />}
  />
))}
```

### Why

- Editing copy was a "page" edit (touching JSX) instead of a "data" edit
  (touching JSON-shaped TS).
- Adding a new service required four steps: write data, create wrapper
  file, import it in `App.tsx`, register route. Now: write data, register
  in `index.ts`. Two steps, both in `data/`.
- 7 wrapper files (~600 lines combined) deleted.
- `pages/services/` is gone — `pages/` is now a folder of routes only,
  not template wrappers.

### Why `ServicePage.tsx` moved to `components/service/ServicePageTemplate.tsx`

It was always a template, not a page. With the wrappers gone, leaving
"ServicePage" sitting under `pages/` would have been the only file in
that folder that wasn't a route. Renaming to `ServicePageTemplate` and
moving it next to the section components it composes is consistent with
the rest of `components/service/`.

### Effort: ~1 hour. Lines removed: ~600.

---

## 2. `Layout.tsx` split — 518 lines → 35 lines

**Severity flagged:** High

### Before

`Layout.tsx` was a single component owning:

- The route shell (background, Aurora, content wrapper).
- The desktop AppBar (logo, nav buttons, hover-underline animation).
- The Solutions dropdown menu and its open/close state.
- The CTA "Book a Demo" button and an alternate Sign In button.
- The mobile hamburger button.
- The full mobile Drawer with its own sub-collapse for Solutions.
- The `serviceLinks` data, inlined.

518 lines. Hard to read end-to-end. Editing one piece (say, the dropdown)
meant scrolling through unrelated logic.

```tsx
// src/components/Layout.tsx — abbreviated
const serviceLinks = [
  { label: "Scheduling", children: [...] },
  // ...
];

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  // ...

  const navLinkSx = (path: string) => ({ /* ...20 lines... */ });

  return (
    <Box sx={{ /* background */ }}>
      <Aurora />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <AppBar>
          <Toolbar>
            {/* ...Logo... */}
            {/* ...Desktop nav with inline Menu, MenuItems, hover state... */}
            {/* ...CTA buttons... */}
            {/* ...Mobile hamburger... */}
          </Toolbar>
        </AppBar>
        <Drawer>
          {/* ...Mobile drawer with collapse, sub-list, etc.... */}
        </Drawer>
        <Outlet />
      </Box>
    </Box>
  );
};
```

### After

```
src/components/
  Layout.tsx                  ← 35 lines, shell only
  layout/
    TopBar.tsx                ← desktop AppBar + Toolbar
    SolutionsMenu.tsx         ← the dropdown + its state
    MobileDrawer.tsx          ← drawer with sub-collapse
    navConfig.ts              ← serviceLinks, primaryLinks, drawerOnlyLinks
```

`Layout.tsx`:

```tsx
const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ /* background, position relative, etc. */ }}>
      <Aurora />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <TopBar onOpenDrawer={() => setDrawerOpen(true)} />
        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <Outlet />
      </Box>
    </Box>
  );
};
```

`navConfig.ts` exports three tagged lists so `TopBar` and `MobileDrawer`
share one source of truth and one component can show links the other
hides (e.g. Pricing only in the drawer):

```ts
export const serviceLinks: NavLink[] = [
  { label: "Scheduling", children: [...] },
  { label: "Route Optimization", path: "/route-optimization" },
  // ...
];
export const primaryLinks = [/* About, Contact, FAQ */];
export const drawerOnlyLinks = [/* Pricing */];
```

`SolutionsMenu` owns its own `useState(anchorEl)` — the parent doesn't
need to know about it. `MobileDrawer` owns its `solutionsOpen` collapse
state internally too.

### Why

- One concern per file: AppBar styling, dropdown behaviour, drawer
  behaviour, and link config are now independent and discoverable.
- Both desktop and mobile derive from the same `navConfig` — adding a
  link is one edit, propagates to both surfaces.
- The shell (`Layout.tsx`) is now small enough to read at a glance.
- `SolutionsMenu` and `MobileDrawer` can be tested or restyled without
  pulling in 500 lines of unrelated nav.

### Effort: ~half day. Lines net change: 518 → ~35 in `Layout.tsx`, ~250 distributed across 4 new files.

---

## 3. Theme tokens — colors stop being magic strings

**Severity flagged:** Medium

### Before

Every component had hardcoded brand hex literals:

```tsx
sx={{
  bgcolor: "#178FD6",
  color: "#FFFCF6",
  border: "1px solid #CCDDE8",
  "&:hover": { bgcolor: "#034488" },
}}
```

Over 20 files used at least one of `#178FD6`, `#7ec8ff`, `#FFFCF6`,
`#034488`, `#CCDDE8`. Theme had only `primary.main` defined.

### After

`theme.ts` was extended with a full palette plus a custom `canvas` key
for the cream/mist neutrals (declared via module augmentation so the
new keys are type-safe in `sx`):

```ts
declare module "@mui/material/styles" {
  interface Palette {
    canvas: { cream: string; mist: string };
  }
  interface PaletteOptions {
    canvas?: { cream?: string; mist?: string };
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#178FD6",
      light: "#7ec8ff",
      dark: "#034488",
    },
    background: {
      default: "#050a1a",
      paper: "rgba(255,255,255,0.04)",
    },
    canvas: {
      cream: "#FFFCF6",
      mist: "#CCDDE8",
    },
  },
  /* typography, etc. */
});
```

Components now reference tokens:

```tsx
sx={{
  bgcolor: "primary.main",
  color: "canvas.cream",
  border: "1px solid",
  borderColor: "canvas.mist",
  "&:hover": { bgcolor: "primary.dark" },
}}
```

This was applied across the refactored files (`Layout`, `MobileDrawer`,
`TopBar`, `SolutionsMenu`, `DemoForm`, `PricePlans`, `forms/styles.ts`).
Older un-touched components still have hex literals — that's a deferred
follow-up.

### Why

- Color changes happen in one place.
- A new design palette swap is now a `theme.ts` edit, not a project-wide
  find-and-replace risking missed instances.
- The custom `canvas` palette key is type-safe — typos in `"canvas.crem"`
  fail at compile time.
- `rgba(...)` literals (semi-transparent variants) intentionally stayed
  inline. They're use-site-specific (different opacities for different
  surfaces) and lifting them into the theme would explode the token list.

### Effort: ~2 hours for the touched files; remaining files flagged as a follow-up pass.

---

## 4. Transition constants

**Severity flagged:** Medium

### Before

`transition: "transform 0.2s ease"` appeared in `Layout`, `Hero`,
`ServiceHero`, `FindUs`, `Industries`, both forms, `PricePlans` — at
least 8 files. `lib/motion.ts` only covered Framer Motion variants, not
MUI `sx` CSS transitions.

### After

```ts
// src/lib/transitions.ts
export const TRANSITION_FAST = "transform 0.2s ease";
export const TRANSITION_BUTTON = "transform 0.2s ease, box-shadow 0.2s ease";
export const TRANSITION_BORDER = "all 0.2s ease";
```

Applied at usage sites in the refactored files:

```tsx
sx={{
  transition: TRANSITION_FAST,
  "&:hover": { transform: "scale(1.07)" },
}}
```

### Why

- Consistent timing across the site (same easing curve everywhere).
- A future change like "make all transitions slightly snappier" is a
  single edit.
- Pairs with the existing `lib/motion.ts` so all animation timing lives
  under `lib/`.

### Effort: ~1 hour. New file, multi-file replace.

---

## 5. `DemoForm` extraction

**Severity flagged:** Medium

### Before

`DemoForm.tsx` was 300 lines mixing:

1. Three reference-data arrays (`industries`, `companySizeOptions`,
   `countryRegions`) — pure content with no rendering concern.
2. Two visual-token objects (`fieldSx`, `selectMenuProps`) — themable
   styling shared with `ContactForm` but inlined separately.
3. Nine separate `useState` hooks.
4. Form validation, submission, error handling.
5. ~150 lines of JSX.

### After

```
src/data/demoFormOptions.ts      ← industries, companySizeOptions, countryRegions
src/components/forms/styles.ts   ← glassFieldSx, glassSelectMenuProps (reusable)
src/components/DemoForm.tsx      ← state + JSX, ~200 lines
```

State was also collapsed: 9 separate `useState(...)` hooks merged into
one keyed `useState(initialState)` with a typed `set(key, value)`
helper. Reset on success becomes `setForm(initialState)` (one line)
instead of 9.

```tsx
const initialState = {
  name: "",
  workEmail: "",
  /* ... */
};

const [form, setForm] = useState(initialState);

const set = <K extends keyof typeof initialState>(
  key: K,
  value: (typeof initialState)[K],
) => setForm((prev) => ({ ...prev, [key]: value }));
```

The shared form styles (`glassFieldSx`, `glassSelectMenuProps`) now also
use theme tokens (`canvas.cream`, `primary.dark`) instead of hex.

### Why

- Editing options (e.g. adding a country) no longer requires opening a
  300-line component.
- `forms/styles.ts` is now a building block for any other form on the
  site that needs the dark-glass look.
- The collapsed state shape removes 8 lines of `useState` boilerplate
  and centralises reset logic.

### Effort: ~1 hour.

---

## 6. `PricePlans` data extraction

**Severity flagged:** Medium-low

### Before

A 70-line `plans` array literal at the top of `PricePlans.tsx` (243
lines), followed by 170 lines of JSX. Same pattern as service pages.

### After

```
src/data/pricingPlans.ts    ← exported PricingPlan[] + type
src/components/PricePlans.tsx  ← ~150 lines, split into <PricePlans /> + <PlanCard />
```

`PricePlans.tsx` was also split internally — each card became its own
`<PlanCard plan={plan} />` subcomponent so the parent is just a header
+ map. That made the `plan.highlighted` conditional styling local to
the card instead of mixing with layout concerns above.

Theme tokens applied throughout (`primary.main`, `canvas.cream`,
`canvas.mist`).

### Why

- Same logic as service-data extraction: pricing tiers are content,
  not behaviour. Should be in `data/`.
- Splitting `PlanCard` out kept the conditional styling compact and
  made the top-level component scannable.

### Effort: ~30 min.

---

## 7. API client tightening

**Severity flagged:** Low

### Before

```ts
// src/api/endpoints.ts (4 lines, indirection-only)
export const ENDPOINTS = {
  contact: "/api/v1/public/contact",
  demo: "/api/v1/public/demo-requests",
} as const;
```

Used by `contact.ts` and `demo.ts`:

```ts
import { ENDPOINTS } from "./endpoints";
apiFetch(ENDPOINTS.contact, { /* ... */ });
```

Plus `api/types.ts` exported `ApiErrorResponse` but no consumer ever
imported it; `client.ts` did `data.message` on the failure branch
without type help.

### After

`endpoints.ts` deleted. Each API module declares its own path inline:

```ts
// src/api/contact.ts
const CONTACT_PATH = "/api/v1/public/contact";

export const sendContactForm = (payload: ContactPayload) =>
  apiFetch<SubmissionResponse>(CONTACT_PATH, { method: "POST", body: payload });
```

`client.ts` now uses `ApiErrorResponse` for the failure branch:

```ts
if (!res.ok) {
  const err = data as ApiErrorResponse;
  throw new Error(err.message || "Request failed");
}
```

### Why

- The `ENDPOINTS` indirection cost more than it saved (every call site
  read a constant instead of seeing the path). Two endpoints, two files,
  no benefit. Inlining made the call site self-documenting.
- The `ApiErrorResponse` type was dead — nothing imported it, nothing
  type-checked the error shape. Adding the cast in `client.ts` makes
  the `err.message` field properly typed instead of `any`.

### Effort: ~10 min.

---

## 8. Dead-code removal

### Before — `ContactForm.tsx`

```tsx
// const handleSubmit = () => {
//   const newErrors: Record<string, string | null> = {};
//   fields.forEach((field) => {
//     const value = form[field.name] || "";
//     newErrors[field.name] = validateField(field, value);
//   });
//   setErrors(newErrors);
//   if (!Object.values(newErrors).some((e) => e !== null)) {
//     alert("Message sent!");
//   }
// };

const handleSubmit = async () => {
  /* real implementation */
};
```

### After

The commented stub deleted. Real `handleSubmit` is unchanged.

### Why

Comment-out blocks rot. They survive multiple editing passes, mislead
readers about which version is current, and can't be safely removed by
a colleague who didn't write them. If the stub is needed again, it's
in git history.

`Layout.tsx` had similar commented blocks for "Sign In", "Pricing",
"Start for Free" buttons — those disappeared as part of the layout
split (they no longer exist as JSX in any file).

---

## 9. The complete file map — before vs after

### Before

```
src/
  api/
    client.ts
    contact.ts
    demo.ts
    endpoints.ts                 ← (4 lines)
    types.ts                     ← ApiErrorResponse defined but unused
  components/
    Aurora.tsx
    ContactForm.tsx              ← had commented dead handleSubmit
    DemoForm.tsx                 ← 300 lines, options + styles + state + JSX
    Hero.tsx
    Industries.tsx
    Layout.tsx                   ← 518 LINES, all of nav + drawer + shell
    MediaFrame.tsx
    MovingBorder.tsx
    PricePlans.tsx               ← 243 lines, plans array + JSX
    Reveal.tsx
    Story.tsx
    /* + others unchanged */
    service/
      ServiceHero.tsx
      ServiceFeatures.tsx
      ServiceHowItWorks.tsx
      ServiceCTA.tsx
      index.ts
  lib/
    motion.ts
  pages/
    services/
      ServicePage.tsx              ← was actually a template, not a page
      SchedulingSolutions.tsx      ← thin wrapper over big data literal
      RouteOptimization.tsx        ← thin wrapper
      DemandForecasting.tsx        ← thin wrapper
      ProfileManagement.tsx        ← thin wrapper
      FlexiScheduling.tsx          ← thin wrapper
      GigScheduling.tsx            ← thin wrapper
      LeaveApp.tsx                 ← thin wrapper
    /* + non-service pages */
  theme.ts                         ← only primary.main + background
  /* main.tsx, App.tsx, etc. */
```

### After

```
src/
  api/
    client.ts                    ← uses ApiErrorResponse on failure
    contact.ts                   ← inlines CONTACT_PATH
    demo.ts                      ← inlines DEMO_PATH
    types.ts
  components/
    Aurora.tsx
    ContactForm.tsx              ← dead comments removed
    DemoForm.tsx                 ← ~200 lines, leaner state, imports shared
    Hero.tsx
    Industries.tsx
    Layout.tsx                   ← 35 LINES, shell only
    MediaFrame.tsx
    MovingBorder.tsx
    PricePlans.tsx               ← ~150 lines, split into PlanCard, no inline data
    Reveal.tsx
    Story.tsx
    /* + others unchanged */
    forms/
      styles.ts                  ← glassFieldSx, glassSelectMenuProps (NEW)
    layout/                      ← (NEW)
      navConfig.ts
      TopBar.tsx
      SolutionsMenu.tsx
      MobileDrawer.tsx
    service/
      ServiceHero.tsx
      ServiceFeatures.tsx
      ServiceHowItWorks.tsx
      ServiceCTA.tsx
      ServicePageTemplate.tsx    ← moved here from pages/services/ (NEW)
      index.ts                   ← now exports ServicePageTemplate too
  data/                          ← (NEW directory)
    demoFormOptions.ts
    pricingPlans.ts
    services/
      index.ts                   ← route registry
      scheduling-solutions.ts
      gig-scheduling.ts
      flexi-scheduling.ts
      leave-application.ts
      profile-management.ts
      route-optimization.ts
      demand-forecasting.ts
  lib/
    motion.ts
    transitions.ts               ← (NEW)
  pages/
    About.tsx
    Contact.tsx
    Demo.tsx
    FAQ.tsx
    Home.tsx
    Pricing.tsx
    StartFree.tsx
    /* services/ DELETED */
  theme.ts                       ← extended palette + canvas tokens
  /* main.tsx, App.tsx unchanged in behaviour, App.tsx now drives
     service routes from registry */
```

### Net structural changes

- **8 files deleted** (7 service wrappers + `endpoints.ts`).
- **1 file moved** (`ServicePage.tsx` → `components/service/ServicePageTemplate.tsx`).
- **3 new directories**: `src/data/`, `src/components/forms/`, `src/components/layout/`.
- **13 new files**: 7 service-data files + services index + demoFormOptions
  + pricingPlans + 4 layout files + forms styles + `lib/transitions.ts`.
- **`Layout.tsx`** went from 518 lines to 35.
- **`DemoForm.tsx`** dropped from 300 to ~200 lines.
- **`PricePlans.tsx`** dropped from 243 to ~150.
- **Theme** gained `primary.light`, `primary.dark`, `canvas.cream`,
  `canvas.mist` palette tokens.

---

## What was deferred and why

### Color tokens not yet propagated to all files

Components touched in this refactor (`Layout` + children, `DemoForm`,
`PricePlans`, `forms/styles.ts`) use theme tokens. Older untouched
components (`Hero`, `Story`, `MediaFrame`, `Industries`, `FindUs`,
`ServiceCTA`, `ServiceFeatures`, `ServiceHowItWorks`, `ServiceHero`)
still have hex literals. Lifting those is mechanical (find/replace
`"#178FD6"` → `"primary.main"` etc.) but touches every file — flagged
as a one-shot follow-up pass to do all at once with a quick visual
sweep.

### `Story.tsx` and `Hero.tsx` still have inline data arrays

The audit flagged them. `Story.tsx`'s timeline data has logo image
imports tightly coupled to the entries — moving it to `data/story.ts`
would also move the imports, which is fine but offers less leverage
than service or pricing extraction. Hero's `stats` array is 3 entries.
Both deferred as low-impact relative to the work elsewhere.

### `MovingBorder` not touched

Pre-existing component with inline keyframes via `<style>` instead of
the design system. It works, it's used in three places, no urgent
reason to refactor.

### `prefers-reduced-motion` for Aurora

Aurora animates regardless of user preference. Flagged in the previous
design-enhancement doc; same status.

---

## Outcome

The repo now reads top-down at three layers:

- **`pages/`** — route components, no templates.
- **`components/`** — presentation, organised by feature
  (`layout/`, `service/`, `forms/`).
- **`data/`** — pure content; no React, no JSX, no behaviour.
- **`lib/`** — cross-cutting utilities (`motion`, `transitions`).
- **`theme.ts`** — single design source of truth.

Adding a new service page is now `data/services/<new-slug>.ts` plus
one line in `data/services/index.ts`. Adding a navigation link is one
entry in `layout/navConfig.ts` and propagates to desktop and mobile.
Color or transition changes are theme/lib edits.

Files >300 lines went from 3 to 0.
