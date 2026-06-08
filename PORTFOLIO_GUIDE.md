# Portfolio Guide
Everything you need to edit, customize, and understand how the site works.

---

## File Map

```
app/
  layout.tsx        ← Google Fonts are loaded here
  globals.css       ← Color palette, font classes, dark/light mode
  page.tsx          ← Root page — just assembles the sections

components/
  hero/
    Hero.tsx        ← The full-screen opening section (main text, eyebrow, Three.js)
    HeroCanvas.tsx  ← Three.js particle network (WebGL background)
  nav/
    Nav.tsx         ← Fixed top navigation bar
  work/
    WorkSection.tsx ← "Things I've Built" heading and project list
    ProjectCard.tsx ← Each expandable project row
  about/
    AboutSection.tsx ← Bio + tech stack section
  contact/
    ContactSection.tsx ← "Let's Talk." + links
  cursor/
    CustomCursor.tsx ← Custom crosshair cursor
  theme/
    ThemeToggle.tsx  ← Light/dark mode button in nav

lib/
  projects.ts       ← All project data lives here (names, descriptions, links)

public/
  resume.pdf        ← Your resume file (replace to update it)
```

---

## Changing the Main Hero Text

File: `components/hero/Hero.tsx`

The three lines are rendered separately so they animate in one by one. Find this block (around line 70):

```tsx
{/* Line 1 — "A" */}
<motion.div ... className="serif" ...>
  A
</motion.div>

{/* Line 2 — "collexion" (italic + accent) */}
<motion.div ... style={{ fontStyle: "italic", color: "var(--accent)" }}>
  collexion
</motion.div>

{/* Line 3 — "of creative works." */}
<motion.div ... className="serif" ...>
  of creative works.
</motion.div>
```

- To change the text, just swap the words inside each `<motion.div>`.
- To change which line is italic/colored, move the `fontStyle: "italic"` and `color: "var(--accent)"` style props to the line you want.
- To change the eyebrow label ("Creative Developer"), find this a few lines above:

```tsx
Creative Developer
```

---

## Changing Fonts

Fonts are wired in two places: **loaded** in `app/layout.tsx` and **applied** in `app/globals.css`.

### Step 1 — Load a new font (`app/layout.tsx`)

```tsx
// Current setup
import { Bodoni_Moda, Space_Grotesk, DM_Mono } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",   // ← CSS variable name
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"], // ← include "italic" if you need italic
});
```

To swap the display font (e.g., to Playfair Display):
1. Replace `Bodoni_Moda` with `Playfair_Display` in the import
2. Replace the `Bodoni_Moda({...})` call with `Playfair_Display({...})`
3. Keep `variable: "--font-bodoni"` the same (or rename it everywhere)

All Google Font names available at: https://fonts.google.com
The import name uses underscores: "DM Sans" → `DM_Sans`, "Space Grotesk" → `Space_Grotesk`.

### Step 2 — Apply it (`app/globals.css`)

Three font classes/selectors control the whole site:

```css
/* DISPLAY font — used for big headings, project names, section titles */
.serif {
  font-family: var(--font-bodoni), Georgia, serif;
}

/* BODY font — used for paragraphs, small labels, general text */
body {
  font-family: var(--font-space-grotesk), system-ui, sans-serif;
}

/* MONO font — used for ALL-CAPS labels, tags, metadata */
.mono {
  font-family: var(--font-dm-mono), monospace;
}
```

Change the `var(--font-...)` to match whatever variable name you set in `layout.tsx`.

### Which elements use which class?

| Class | Used for |
|---|---|
| `.serif` | Hero headline, "Things I've Built", project names, "Let's Talk.", About headline |
| `.mono` | Nav links, section numbers ("01 —"), tech tags, year labels, footer |
| `body` (no class) | Paragraph text, project descriptions, bio |

---

## Changing Colors / Theme

File: `app/globals.css`

The entire color palette is defined as CSS variables at the top:

```css
/* Light mode */
:root {
  --bg:        #F4EFE6;   /* page background */
  --bg-alt:    #EDE5D4;   /* card hover background */
  --surface:   #E8DEC8;   /* unused, reserved */
  --border:    #C2B49A;   /* subtle dividers */
  --text:      #180F06;   /* primary text */
  --text-2:    #7A6248;   /* secondary/muted text */
  --accent:    #C41230;   /* red — links, highlights, "collexion" */
  --accent-h:  #9E0F26;   /* accent hover state */
  --rule:      #180F06;   /* thick rules/borders */
  --rule-thin: #C2B49A;   /* thin separator lines */
}

/* Dark mode — overrides the above */
[data-theme="dark"] {
  /* ... same variables with dark values */
}
```

To change the accent color (currently red `#C41230`), update `--accent` in both `:root` and `[data-theme="dark"]`.

---

## Changing Projects

File: `lib/projects.ts`

Each project is an object in the `projects` array:

```ts
{
  id: "sopraspec",           // unique slug, used as HTML key
  num: "01",                 // display number shown on the left
  name: "SopraSpec",         // project title
  tagline: "AI-powered specification platform",  // italic quote shown expanded
  description: "...",        // paragraph shown when expanded
  tech: ["React", "Node.js", "Docker"],          // tech tag list
  github: "https://github.com/...",              // optional GitHub link
  live: "https://...",                           // optional live site link (omit or use "#" if none)
  type: "Full-Stack Web App",                    // shown on the right of the row
  year: "2024",                                  // shown on the right
}
```

To add a project, copy one of the existing objects, paste it at the end of the array, and update all the fields.
To reorder projects, just move the objects — the `num` field controls what number is displayed.

---

## How the Three.js Canvas Works

File: `components/hero/HeroCanvas.tsx`

This is a WebGL canvas rendered behind the hero text using vanilla Three.js. It runs in a `useEffect` (client-side only).

**Key numbers you can tune:**

```ts
const COUNT = 160;        // number of floating dots
const LINK_DIST = 135;    // max distance (px) between two dots before a line is drawn
```

In `PointsMaterial`:
```ts
size: 1.8,      // dot size in pixels
opacity: 0.42,  // dot transparency (0 = invisible, 1 = solid)
```

In `LineBasicMaterial`:
```ts
opacity: 0.08,  // line transparency — keep this low (< 0.15) or it dominates
```

Mouse parallax strength (in the `tick` function):
```ts
camera.position.x += (mx * 22 - camera.position.x) * 0.03;
//                         ↑ 22 = max horizontal shift in 3D units
camera.position.y += (my * 16 - camera.position.y) * 0.03;
//                         ↑ 16 = max vertical shift
// 0.03 = lerp speed — lower = more sluggish, higher = snappier
```

The canvas automatically re-colors itself when you switch dark/light mode via a `MutationObserver` watching the `data-theme` attribute on `<html>`.

---

## Adding Project Images

`lib/projects.ts` and `components/work/ProjectCard.tsx` are ready for images — you just need to:

1. Add an `image?: string` field to the `Project` type in `lib/projects.ts`
2. Put a screenshot in `public/images/your-project.png`
3. In `ProjectCard.tsx`, inside the expanded detail section, add:
```tsx
{project.image && (
  <img
    src={project.image}
    alt={project.name}
    style={{ width: "100%", height: "200px", objectFit: "cover" }}
  />
)}
```
Then in `projects.ts`:
```ts
image: "/images/sopraspec.png",
```

---

## Dev Commands

```bash
npm run dev      # start local dev server at http://localhost:3000
npm run build    # production build (checks for errors)
npm run start    # serve the production build locally
```
