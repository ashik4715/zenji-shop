# ZENJI Shop — Next.js TypeScript Clone

## Overview
A pixel-accurate frontend clone of [zenji.shop](https://zenji.shop) — an Australian anime-inspired streetwear e-commerce site. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and local JSON demo data.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | App Router, SSR/SSG |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Jest | Unit testing |
| Husky | Pre-commit hooks |
| lint-staged | Run lint+test on staged files |
| Google Fonts | Inter (body), custom display font |

---

## Design Tokens (from screenshots)

- **Background:** `#0a0a0a` (near-black)
- **Text:** `#ffffff` (white)
- **Accent/Red:** `#c8102e` (ZENJI red — buttons, sale prices, badges, borders)
- **Muted text:** `#888888` (gray — subtitles, labels)
- **Card bg:** `#1a1a1a` (dark cards)
- **Border:** `#333333` (subtle borders)
- **Display font:** Bold condensed (headings like "WEAR YOUR STORY", "FAQ")
- **Body font:** Monospace-like / `font-mono` (body text, prices, labels)
- **Sale badge:** Red corner ribbon with "SALE 15% OFF"

---

## Pages to Build

### 1. Splash Screen (full-screen overlay)
- Dark background with large `力` kanji and "ZENJI" text
- Bottom left: `力 — AWAKENING`
- Bottom right: `SYSTEM // ZENJI`
- Fades out after 2-3 seconds, or on click
- Stored in localStorage so it only shows once per session

### 2. Popup Modal (first-visit overlay)
- Appears after splash screen on first visit
- "FREE SHIPPING ON FIRST ORDER" heading
- "CHOOSE YOUR FIGHTER" subtitle
- 6 buttons: JUJUTSU KAISEN, DEMON SLAYER, ONE PIECE, NARUTO, DRAGON BALL, OTHER
- X close button
- Stored in localStorage so it only shows once

### 3. Home Page (`/`)
- **Hero:** Dark background image, red label "力 THE_ORIGIN_DROP // LOADING", large bold "WEAR YOUR STORY", red CTA "SHOP THE DROP →"
- **Collection Section:** "COLLECTION // THE_ORIGIN_DROP", "SALE" heading, "VIEW_ALL" button, 4 large stacked product hero images (Demon Blood, Blue Flame, Will of the Sun, Warrior Spirit)
- **Latest Drops:** Horizontal scrollable product cards with sale badges, prices, "QUICK VIEW →"
- **Manifesto:** "MANIFESTO_001", large bold "THE ZENJI ETHOS", brand description paragraph

### 4. Drop Page (`/drop`)
- **Hero:** Dark background with "AWAKENING IS LIVE" heading, countdown timer (DAYS : HOURS : MINUTES : SECONDS), "THE DROP IS COMING", date text, red CTA
- **Waitlist:** "JOIN THE WAITIST" email input + "JOIN THE WAITLIST →" button (client-side localStorage)
- **While You Wait:** 4 sale product cards
- **Footer CTA:** "VIEW FULL COLLECTION →"

### 5. Collection Page (`/collection`)
- **Header:** "THE_ORIGIN_DROP // COMPLETE ARCHIVE", "ANIME GRAPHIC TEES — THE FULL COLLECTION", stats line
- **Filters:** Tab buttons (ALL, SALE, NEW_ARRIVAL, LIMITED, ZANGETSU), search input, item count
- **Product Grid:** 4-column responsive grid, each card: image, name, price (original strikethrough + sale price in red), "♡ WISHLIST" button, "ADD TO CART →" button, sale badge
- **Newsletter:** "MORE DROPS COMING" email signup (localStorage)

### 6. Product Detail (`/drop/[id]`)
- Product images (front/back), name, price, description
- Size selector (S, M, L, XL, XXL)
- "ADD TO CART →" button
- Related products

### 7. Lookbook (`/lookbook`)
- Header: "THE_ORIGIN_DROP // EDITORIAL", "ANIME STREETWEAR — LOOKBOOK"
- Filter tabs: ALL, FRONT, BACK, ON MODEL
- Masonry-style 3-column photo grid using product images
- "SHOP THE COLLECTION" CTA

### 8. Our Story (`/our-story`)
- "ABOUT // ZENJI" label
- Large heading: "ANIME STREETWEAR AUSTRALIA — BORN FROM THE WARRIOR SPIRIT."
- Brand story paragraphs
- Quote with red left border
- "ABOUT ZENJI" key-value section (WHAT ZENJI IS, FOUNDED, WHAT WE MAKE, SHIPPING, etc.)

### 9. FAQ (`/faq`)
- "FAQ" heading, "EVERYTHING YOU NEED TO KNOW"
- Categories with red left border: ORDERS & SHIPPING, STOCK & DROPS, PRODUCTS, RETURNS & REFUNDS, BRAND
- Expandable accordion items
- "STILL HAVE QUESTIONS?" email CTA

### 10. Reviews (`/review`)
- "REVIEWS" heading, "WHAT THE COMMUNITY SAYS"
- Rating summary (0/5, bar chart, stats)
- Filter tabs: ALL, 5★, 4★, 3★, VERIFIED
- "LEAVE YOUR VERDICT" form (name, email, product, order #, star rating, title, review, tags, submit)

### 11. Privacy Policy (`/privacy-policy`)
- Numbered sections with red left border
- Content from the screenshot

### 12. Terms & Conditions (`/terms`)
- Numbered sections with red left border
- Content from the screenshot

### 13. Return Policy (`/return-policy`)
- Sections with red left border
- Content from the screenshot

### 14. Contact (`/contact`)
- Two-column layout: Left = info cards (Support, Collabs & Press, Follow the Lore), Right = contact form
- "BEFORE YOU EMAIL →" quick links (FAQ, RETURN POLICY, SIZE GUIDE, TRACK ORDER)

### 15. Login (`/login`)
- Centered card: "ZENJI" logo, "BEGIN YOUR JOURNEY"
- Buttons: Continue with Apple, Continue with Google, Continue with Email
- "Browse as Guest" link

### 16. Wishlist (`/wishlist`)
- "SAVED // THIS DEVICE", "WISHLIST"
- "NO SAVED PIECES YET" empty state with "BROWSE THE COLLECTION →"

---

## Shared Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Logo (ZENJI text), nav links (DROP, COLLECTION, LOOKBOOK, OUR STORY, MORE), right icons (search, wishlist heart, cart, account) |
| `Footer` | ZJ logo mark, brand text, social buttons (TikTok, Instagram, Facebook), 4-column links (DROPS, EXPLORE, COMMUNITY, CONTACT), copyright bar |
| `MarqueeBanner` | Red scrolling ticker at top of every page |
| `ProductCard` | Image, name, price, sale badge, wishlist + add to cart buttons |
| `HeroSection` | Full-width hero with background image and text overlay |
| `SplashScreen` | Full-screen 力 kanji intro overlay |
| `PopupModal` | "Choose Your Fighter" modal overlay |
| `AccordionItem` | Expandable FAQ item |
| `CountdownTimer` | Days/Hours/Minutes/Seconds countdown |

---

## Local JSON Data

**File:** `src/data/products.json`

10 products with fields:
- `id` (slug), `name`, `price`, `salePrice`, `onSale`, `collection`
- `description`, `images[]` (front/back Cloudinary URLs), `heroImage`
- `tags[]` (for lookbook filtering)
- Real Cloudinary URLs from zenji.shop

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar, MarqueeBanner, Footer)
│   ├── page.tsx                # Home
│   ├── globals.css             # Tailwind + custom animations
│   ├── drop/
│   │   ├── page.tsx            # Drop listing + countdown
│   │   └── [id]/page.tsx       # Product detail
│   ├── collection/page.tsx
│   ├── lookbook/page.tsx
│   ├── our-story/page.tsx
│   ├── faq/page.tsx
│   ├── review/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── return-policy/page.tsx
│   ├── contact/page.tsx
│   ├── login/page.tsx
│   └── wishlist/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── MarqueeBanner.tsx
│   ├── ProductCard.tsx
│   ├── HeroSection.tsx
│   ├── SplashScreen.tsx
│   ├── PopupModal.tsx
│   ├── AccordionItem.tsx
│   └── CountdownTimer.tsx
├── data/
│   └── products.json
└── lib/
    └── types.ts                # TypeScript interfaces
```

---

## Animations & Interactions

- **Marquee:** CSS `@keyframes` infinite horizontal scroll
- **Splash screen:** Fade-in `力` kanji, fade-out on click or after 3s
- **Popup modal:** Fade-in overlay with scale transition
- **Product cards:** Hover to show second image (front → back)
- **Accordion:** Smooth max-height transition for FAQ expand/collapse
- **Countdown timer:** Live JS countdown updating every second
- **Sale badges:** Red corner ribbon (CSS rotate transform)

---

## Testing (Jest)

- Unit tests for product data validation (JSON structure, required fields)
- Component tests for ProductCard rendering
- `npm run test` must pass

---

## Pre-commit Hook (Husky)

```bash
# .husky/pre-commit
npm run lint && npm run test
```

- lint-staged runs ESLint on `.ts/.tsx` files
- Jest tests validate data and components

---

## Build & Deploy

```bash
npm install          # Install dependencies
npm run dev          # Development server
npm run build        # Production build (must pass)
npm run lint         # ESLint (must pass)
npm run test         # Jest tests (must pass)
git add . && git commit  # Husky runs lint+test before commit
git push origin main
```

---

## Commit Message

Under 10 words, e.g.: `ZENJI shop clone: Next.js TypeScript with all pages`
