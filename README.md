# Swapnil Barua — Portfolio

Personal portfolio site. Built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

**Design:** Vogue editorial aesthetic — Cormorant Garamond serif, beige/red light mode, deep ink/amber dark mode. Light and dark mode toggle, animated accordion project index, crosshair cursor.

---

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

To build for production:

```bash
npm run build
npm start
```

---

## Links to Update

Search for `// ← update` in the codebase to jump to every placeholder at once.

### GitHub

**File: `lib/projects.ts`**
Each project has a `github` field. Replace the URL with your actual repo links:

```ts
github: "https://github.com/YOUR_USERNAME/repo-name",
```

**File: `components/contact/ContactSection.tsx`**
The GitHub entry in the Connect section — update both `href` and `value`:

```ts
{ label: "GitHub", value: "YourUsername", href: "https://github.com/YourUsername" }
```

### LinkedIn

**File: `components/contact/ContactSection.tsx`**

```ts
{ label: "LinkedIn", value: "your-slug", href: "https://linkedin.com/in/your-slug" }
```

### Photography site URL

**Files: `components/about/AboutSection.tsx` and `components/contact/ContactSection.tsx`**

Both currently link to `https://swaap.jpg`. Update if your photography URL is different.

### Live project URLs

**File: `lib/projects.ts`**

Add a `live` field to any project once it's deployed:

```ts
live: "https://your-project.vercel.app",
```

Omit `live` entirely for projects with no public URL — the Live button won't render.

### Resume

Drop your PDF at `public/resume.pdf`. The Résumé button in the nav links to `/resume.pdf` automatically.

---

## Editing Projects

All project data is in `lib/projects.ts`. Each entry looks like:

```ts
{
  id: "sopraspec",            // unique slug, no spaces
  num: "01",                  // number shown in the index
  name: "SopraSpec",          // display name
  tagline: "...",             // one-liner shown when the row expands
  description: "...",         // full paragraph shown when expanded
  tech: ["React", "..."],     // tech stack list
  github: "https://...",      // optional — omit if private/none
  live: "https://...",        // optional — omit if not deployed
  type: "Full-Stack Web App", // shown in the collapsed index row
  year: "2024",
}
```

- **Add a project:** copy any entry, update the fields, append to the array.
- **Reorder:** change `num` values and move objects in the array.
- **Remove:** delete the object from the array.

---

## Theme & Colors

### Light mode — Beige & Red

| Variable | Value | Used for |
|---|---|---|
| `--bg` | `#F4EFE6` | Page background (warm cream) |
| `--bg-alt` | `#EDE5D4` | Alternate surface, decorative numbers |
| `--text` | `#180F06` | Primary text (deep warm near-black) |
| `--text-2` | `#7A6248` | Secondary / muted text |
| `--accent` | `#C41230` | Crimson red — rules, highlights, cursor |
| `--border` | `#C2B49A` | Subtle lines |

### Dark mode — Deep Ink & Amber

| Variable | Value | Used for |
|---|---|---|
| `--bg` | `#0C0908` | Page background (ink black) |
| `--text` | `#F2E8D5` | Primary text (parchment) |
| `--text-2` | `#7A6A58` | Secondary / muted text |
| `--accent` | `#CF8A3A` | Warm amber/gold — rules, highlights, cursor |
| `--border` | `#2E2318` | Subtle lines |

All variables are in `app/globals.css`. Change a value there and it applies everywhere.

Theme is saved to `localStorage` and applied before React hydrates — no flash on reload.

### Changing the accent color

1. Open `app/globals.css`
2. Change `--accent` in `:root` (light mode) and `[data-theme="dark"]` (dark mode)
3. Save — the cursor, rules, labels, and hover states all update automatically

---

## Fonts

| Font | Used for | Where to change |
|---|---|---|
| Cormorant Garamond | All headings, hero name, project titles | `app/layout.tsx` |
| DM Sans | Body text, paragraphs | `app/layout.tsx` |
| DM Mono | Nav links, labels, numbers, tags | `app/layout.tsx` |

To swap a font: replace it in `app/layout.tsx` (it's loaded via `next/font/google`), update the CSS variable name in `globals.css`, and update the `var(--font-*)` references in components.

---

## File Structure

```
app/
  layout.tsx        fonts, metadata, theme anti-flash script, cursor
  page.tsx          section assembly
  globals.css       CSS variables, base styles, light/dark themes

components/
  cursor/           crosshair cursor (red in light, amber in dark)
  nav/              masthead nav — name left, links + toggle right
  hero/             full-viewport hero — name split by red/amber rule
  work/             accordion project index — click to expand each row
  about/            bio, "Developer. Photographer. Builder." + skill list
  contact/          links list + footer
  theme/            light/dark toggle pill button

lib/
  projects.ts       all project data — edit here to add/remove projects

public/
  resume.pdf        drop your resume PDF here
```

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → import repo
3. Framework: Next.js (auto-detected), no env vars needed
4. Deploy

Or via CLI:

```bash
npx vercel
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 16 | Framework, App Router, static export |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility styles + CSS variable theme |
| Framer Motion | Scroll animations, accordion open/close |
| Cormorant Garamond | Display serif (Google Fonts via next/font) |
| DM Sans + DM Mono | Body and mono text |
