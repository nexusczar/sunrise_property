# Master Backlog & Architecture Outline

## Project Overview
Sunrise Property & Interior luxury portal. Redesigning and elevating user experience to a 20+ YOE senior architectural UI/UX standard with obsidian glass, warm champagne accents, refined typography, and cohesive component architecture.

---

## Architecture & Design Directives
- **Palette & Materiality**: Obsidian dark glass (`#0c0d0e`, `#111317`), warm gold / champagne metallic accents (`#c5a059`, `#d4b068`), soft white matte overlays (`bg-white/[0.04]`), and radial ambient glows.
- **Form Architecture**: Elimination of "box-in-a-box" layouts. Single cohesive architectural panel with clear 2-column visual balance.
- **Typography & Details**: Strict adherence to Playfair Display / Cinzel for luxury headings, Plus Jakarta Sans for high-legibility UI microcopy, custom dropdown chevrons, and subtle focus halos.
- **Action Hierarchy**: High-contrast primary gold CTA paired with an understated VIP WhatsApp Concierge advisory touchpoint (no clashing neon pill buttons).

---

## Sprints Roadmap

| Sprint | Title | Status | Summary |
| :--- | :--- | :---: | :--- |
| **Sprint 1** | Senior UI/UX Redesign of Property Enquiry Form | ✅ | Redesign Section 5.4 in `src/app/page.tsx` & `src/app/real-estate/page.tsx` |
| **Sprint 2** | Responsive Verification, Micro-interactions & Build Audit | ✅ | Full multi-device audit, form states, and zero-error build verification |

---

## Detailed Task Backlog

### Sprint 1: Senior UI/UX Redesign of Property Enquiry Form
- [x] **SP1-001**: Architectural Glass & Ambient Lighting Container (Replace flat `#0c0d0e` box with obsidian glass container, subtle radial glow, and hairline gold border).
- [x] **SP1-002**: Left Column Elevation (Add luxury status badge, bold serif headline, refined trust features with architectural icons).
- [x] **SP1-003**: VIP WhatsApp Concierge Link (Replace clashing green pill button with an integrated luxury concierge glass card).
- [x] **SP1-004**: Form Inputs & Custom Chevron (Single-surface form styling, high-contrast labels, custom SVG select chevron, subtle focus rings).
- [x] **SP1-005**: High-Impact Gold CTA & Trust Micro-copy (Champagne gradient button with interactive hover arrow and confidential advisory assurances).
- [x] **SP1-006**: Synchronization across routes (`src/app/page.tsx` and `src/app/real-estate/page.tsx`).

### Sprint 2: Responsive Verification & Build Audit
- [x] **SP2-001**: Mobile and tablet breakpoint verification.
- [x] **SP2-002**: State feedback verification (submission confirmation card and reset flow).
- [x] **SP2-003**: Next.js production build (`npm run build`) verification with 0 errors.
