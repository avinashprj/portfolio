---
name: Avinash Portfolio Design System
description: Ultra-precise typographic minimalism inspired by Vercel and developer terminals.
colors:
  primary: "#010101"
  neutral-bg-dark: "#18181b"
  neutral-bg-light: "#ffffff"
  neutral-ink-dark: "#e4e4e7"
  neutral-ink-light: "#1f2937"
  accent-purple: "#c084fc"
  accent-pink: "#db2777"
typography:
  display:
    fontFamily: "Jost, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "Sen, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Sen, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Sen, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Jost, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  sm: "4px"
  md: "6px"
  lg: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  nav-link:
    rounded: "{rounded.md}"
    padding: "6px 16px"
    typography: "{typography.body}"
  project-card:
    rounded: "{rounded.lg}"
    padding: "12px"
---

# Design System: Avinash Portfolio

## 1. Overview

**Creative North Star: "The Developer's Terminal"**

A dark, ultra-precise typographic layout inspired by developer interfaces, Vercel, and Linear. Structure is defined by clean grid spacing, subtle rule lines, and high typographic contrast, rather than decorative card wrappers or colored backgrounds.

This system rejects visual slop and SaaS clichés (ambient blur, ghost cards, gradient text, and side-stripe card borders). The page functions as a clean, high-craft canvas for presenting engineering experience.

**Key Characteristics:**
* **Monochrome-first aesthetics**: Colors are reserved strictly for content images and state highlights.
* **Typographic Center**: Distinct roles for Jost (structure/numbers/headers) and Sen (body copy).
* **Flat Architecture**: Reliance on vertical margins and thin border rules rather than elevation/shadows to group content.

## 2. Colors

The color palette is built around high-contrast neutrals to mimic technical terminal interfaces, keeping color presence restrained to content assets.

### Primary
* **Charcoal Black** (#010101): Primary branding neutral.

### Neutral
* **Dark Zinc** (#18181b): Base background color for dark mode.
* **Light White** (#ffffff): Base background color for light mode.
* **Stark Gray** (#e4e4e7): Main ink color in dark mode (provides excellent readable contrast).
* **Deep Charcoal** (#1f2937): Main ink color in light mode.

### Accent (Restrained)
* **Accent Purple** (#c084fc): Used inside project card hover states.
* **Accent Pink** (#db2777): Used inside project card hover states.

### Named Rules
**The Monochrome Rule.** Palette colors must be kept strictly neutral (deep zinc/charcoal and stark white). Accent colors are restricted to interactive hover states or media content, ensuring that color remains a rare highlight.

## 3. Typography

The design pairs **Jost** (a geometric sans-serif with sharp structural forms) for displays and navigation with **Sen** (a clean, highly readable humanist sans-serif) for body text and details.

**Display Font:** Jost (with sans-serif fallback)
**Body Font:** Sen (with sans-serif fallback)

### Hierarchy
* **Display** (Bold (700), 2.25rem (36px), 1.2): Primary headers (e.g. name logo).
* **Headline** (Bold (700), 1.875rem (30px), 1.2): Section titles (e.g. "Experience", "Skills & Technologies").
* **Title** (Bold (700), 1.25rem (20px), 1.3): Job titles and card headings.
* **Body** (Regular (400), 1.125rem (18px), 1.5): Standard paragraphs, descriptions, and list items.
* **Label** (Medium (500), 0.875rem (14px)): Auxiliary metadata and tags.

### Named Rules
**The Grotesque Display Rule.** Display elements and navigation links use Jost to establish structure and geometry. Body text and paragraphs must use Sen to ensure comfortable reading contrast and flow.

## 4. Elevation

The system is flat by default, communicating boundaries and hierarchy through spacing, background fills, and 1px border lines rather than diffuse drop shadows.

### Named Rules
**The Flat-By-Default Rule.** Surfaces remain level with the background canvas. Shadows are not used for decoration; container borders use solid 1px borders, and separation is driven by layout margins.

## 5. Components

### Buttons & Links
* **Shape:** Rounded corners (6px radius).
* **Navigation Link:** Padded (6px 16px) with dynamic hover transitions. Underneath transitions use background shifts (`bg-zinc-800`) and hover states rather than underline highlights.

### Cards / Containers
* **Corner Style:** Large rounded corners (12px radius).
* **Project Card:** Padded container utilizing a white background (`bg-white`) and clean layout. On hover, the image and metadata blur slightly to reveal clean, text-based interactive links.

## 6. Do's and Don'ts

### Do:
* **Do** align experience timeline dots to `top-8` to ensure alignment with job headers as detail lists grow.
* **Do** use Jost for displays and navigation to establish a crisp, geometric structure.
* **Do** use Sen for all body descriptions and paragraphs to maintain high readability.
* **Do** maintain a strict WCAG AA contrast ratio of at least 4.5:1 for body copy.

### Don't:
* **Don't** use SaaS template slop: side-stripe borders (greater than 1px) on cards or list items.
* **Don't** use gradient text or `background-clip: text` combined with multi-color gradients.
* **Don't** use glassmorphism, blurs, or soft wide drop shadows (greater than 8px blur) as default container styles.
* **Don't** stack identical, repeating card grids that dilute typographic rhythm.
* **Don't** repeat tiny uppercase tracked eyebrow kickers above every section header.
