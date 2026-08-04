# Mariquina Travel — Design Specification

Car & Van Rental Landing Page · Lead-Gen (Messenger / Call / Email) · No Booking System

---

## 1. Overall Layout & Container Structure

- **Canvas / Page Width:** 1440px (standard desktop layout, full-bleed backgrounds).
- **Main Content Container:** 1200px width, centered horizontally (`margin: 0 auto`).
- **Page Grid System:** 12-column grid (~78px columns, 24px gutters).

**Vertical Page Structure (top to bottom):** section backgrounds rotate `white` → `#F8FAFC` → `#EFF6FF` down the page so no two adjacent sections share a background; dark navy `#0B192E` is reserved for emphasis bands (hero, message band, footer).

1. Top Navigation Bar (sticky, transparent over hero; hamburger menu below `xl`)
2. Hero Banner Section
3. Our Vehicles Section (4-column card grid)
4. How It Works Section (3-step)
5. "Why Rent With Mariquina Travel?" (2-column split: text left, image right)
6. Testimonials Carousel Section
7. Message Band (statement, text-only on navy)
8. Long-Term Rental / Promo Call-out Banner
9. Travel Photos Section (photo gallery — auto-listed from `public/images/journal/`)
10. FAQ Section (accordion)
11. Quick Contact / CTA Bar + Inquiry Form
12. Main Footer
13. Copyright Sub-Footer

---

## 2. Color Palette & Styles

| Role | Color | Hex |
|---|---|---|
| Primary Blue (brand main) | Buttons, active tabs, highlights | `#0E52D2` |
| Dark Navy (footer bg) | Footer, dark bands | `#0B192E` |
| Hover Blue | Card/section hover | `#0345BA` |
| Text Dark / Main Body | Slate 800 | `#1E293B` |
| Text Muted / Subtitle | Slate 500 | `#64748B` |
| Background Light Gray | Slate 50 | `#F8FAFC` |
| Border Gray | Slate 200 | `#E2E8F0` |
| White | Surfaces | `#FFFFFF` |
| Accent Amber / Stars | Rating stars | `#F59E0B` |
| Light Blue Tint / Icon BG | Icon circles, section tint | `#EFF6FF` |
| Sub-footer BG | Darker navy strip | `#071120` |

---

## 3. Detailed Component Specifications

### A. Navigation Bar
- Container: height 72px, full-width, bottom border `1px solid #E2E8F0`, white background.
- **Scroll states:** at top (hero visible) the bar is fully transparent (no background, no border) with white/amber text so it reads over the navy hero scrim; it stays transparent for as long as the hero section intersects the viewport (IntersectionObserver on `#home`), then transitions to the solid white + border style once the hero scrolls out of view. Smooth `transition-colors`. **While the mobile menu is open the bar is always solid white + border** (dark ink text/icons) regardless of scroll state — the panel below it is white too, so the bar and panel read as one solid block and the hamburger→X icon stays visible over light content.
- Transparent-state colors: "Mariquina" white, "Travel" amber `#F59E0B` (constant — "Travel" stays amber in both scroll states); logo icon container `rgba(255,255,255,0.10)` bg with white icon; nav links `white/85` (hover pure white); active link amber `#F59E0B` with amber underline in both scroll states; phone `white/85`. "Message Us" button unchanged (solid blue).
- Logo (left): 28×28 PNG logo mark (`/images/logo/logo.png` — 1218×1291px source, transparent background, `object-contain` to preserve aspect; full-res source is served as-is and Next/Image generates 1×/2×/3× srcsets so it stays crisp on retina). Brand text: **Mariquina** (`#1E293B`, Bold 700) **Travel** (`#0E52D2`, Bold 700), 20px. Below the brand: small tagline "VAN AND CAR RENTAL" — 10px Medium, uppercase, letter-spacing 0.18em, `#64748B` (white/70 over the hero).
- Nav links (center-right): Home, Vehicles, Destinations, Why Us, Contact — 14px Semi-bold 600, `#1E293B` (white/85 over the hero). Active link follows scroll position (scroll-spy): the nav item of the section currently in view (IntersectionObserver band just below the sticky bar, `rootMargin -20% 0px -55% 0px`) is highlighted amber `#F59E0B` with a 2px amber underline bar — in both scroll states. 32px gap between links.
- Actions (right): phone number (14px, Medium, `#1E293B`), "Message Us" button: `#0E52D2` bg, white text, 14px Semi-bold, height 40px, padding 0 20px, radius 8px.
- **Mobile menu (below `xl`):** hamburger button (44×44, rounded 8px, ink/white per scroll state — dark ink whenever the panel is open, `aria-expanded`) toggles a white panel below the bar (`border-t #E2E8F0`, explicit dark `#1E293B` text on the panel itself so links can never inherit a light color): stacked links (44px rows, 14px Semi-bold, active = amber, follows scroll-spy), divider, phone link, full-width "Message Us" button. Panel closes on link click, outside click, and Escape. Outside taps are **swallowed** (one-time capture-phase `click` with `preventDefault`/`stopPropagation`) so the dismissing tap never activates content underneath; **body scroll is locked** (`overflow: hidden`, restored on close) while the panel is open. Link taps close the panel first, then smooth-scroll to the target (deferred ~60ms so the panel height is removed first — prevents landing off-target). Phone/Message Us panel links close the panel too. Desktop nav hides below `xl`.
- **Anchor behavior:** `html { scroll-behavior: smooth; scroll-padding-top: 73px }` — all in-page links (nav, footer, CTAs) land below the sticky bar; the hero `#home` clamps to page top 0.

### B. Hero Banner Section
- Height: 100vh (min), vertically centered content. The section uses `-mt-[73px]` (negative top margin equal to the header's full height: 72px bar + 1px bottom border) so the image extends up behind the sticky transparent navbar without leaving a white gap; the navbar (z-50) renders on top of the image's top 73px.
- Background: full-bleed vehicle photo (`/images/vehicles/van.jpg` — first van photo) with a dark navy gradient scrim overlay (`#0B192E` at 95% → 75% → 40% opacity, left to right) for readability.
- Content column: centered both ways (container `justify-center`, column `flex flex-col items-center text-center`, max-width 640px), all text centered:
  - Headline: "Van & Car Rental in **Cavite** — Manila, Baguio & Tagaytay" — 50px (44px on tablet, 36px mobile), Bold 800, line-height 1.15, White; the route city "Cavite" Amber `#F59E0B`. Wraps naturally (no `whitespace-nowrap`) across two–three short lines, keeping the lead keyword "Van & Car Rental in Cavite" intact for search relevance (matches the site title tag).
  - Body: 15px Regular 400, line-height 1.6, White 80%.
  - CTA row: Button 1 "Browse Vehicles" — solid blue `#0E52D2`, height 44px, padding 0 24px, radius 8px, 14px Bold white. Button 2 "Message Us" — translucent white `rgba(255,255,255,0.10)` with `1px solid rgba(255,255,255,0.40)` border, white text, height 44px, padding 0 24px, radius 8px. Row centered.
  - Scroll hint: bottom-center circular badge (44×44, `1px solid rgba(255,255,255,0.30)` border, `rgba(255,255,255,0.10)` bg, white ChevronDown icon) at `bottom-24px`, animating `scroll-hint` (translateY 0→9px + opacity fade, 1.8s infinite), linking to `#vehicles`.

### D. Our Vehicles Section
- Section: content-height (determined by content), padding `py-16 sm:py-20`, light bg `#F8FAFC`.
- Header bar: left title "Our Vehicles" 24px Bold `#1E293B`.
- Grid: 3 columns (6 cards; rows of 3), `sm:grid-cols-2 md:grid-cols-3`. Card: radius 12px, border `1px solid #E2E8F0`, white bg.
- Card structure: image top (`aspect-[5/6]` subtle portrait, rounded top corners `12px 12px 0 0`, object-fit cover, subtle hover zoom); title (e.g. "Van #1") 18px Bold `#1E293B`; seats row (users icon + "12–19 seats") 14px Regular `#64748B`; price ("₱5,000–₱7,000/day") 20px Bold `#1E293B`; two buttons side by side (`grid-cols-2 gap-3`, height 40px, radius 8px, 14px Semi-bold): **Book Now** solid blue `#0E52D2` (hover `#0345BA`) linking to the contact inquiry form `#inquiry-form`; **View Photos** outline (`1px solid #0E52D2`, blue text, hover light-blue tint bg `#EFF6FF`) linking to the gallery page `/vehicles/{slug}`. Cards are not whole-card links (two buttons live inside).
- The six vehicles: **Van #1–#4** (12–19 seats, ₱5,000–₱7,000/day), **Sedan** (4 seats, ₱2,500/day), **7-Seater** (7 seats, ₱3,500/day). Each numbered van is a separate entry in `app/lib/vehicles.ts` with its own image folder `public/images/vehicles/van-N/` (`1.jpg` = card cover); new vans are added by copying an entry and bumping the number.

### E. How It Works Section (3-step)
- Section: `id="how-it-works"`, content-height (determined by content), padding `py-16 sm:py-20`, white bg.
- Title "How It Works" 24px Bold centered + muted subtitle (max-width 576px, 14px).
- 3-step grid (`sm:grid-cols-3`, gap 32px): 48px `#EFF6FF` circle with `#0E52D2` icon; "STEP 01/02/03" label 11px Bold tracking-widest `#0E52D2`; title 14px Bold `#1E293B`; body 12px Regular `#64748B` max-width 260px. Icons: Messenger → Calendar → Key.
- Bottom-center CTA: "Message Us to Book" solid blue button (44px, radius 8px, 14px Bold white) → Messenger.

### F. Why Rent With Mariquina Travel?
- Section: `id="why-us"`, content-height (determined by content), padding `py-16 sm:py-20`, light blue tint bg `#EFF6FF`.
- Layout: 2 columns on `lg` (`grid-cols-2`, gap 64px, vertically centered) — text left, image right; stacks on mobile (image below text, gap 40px).
- Title: 24px Bold, left-aligned. Subtitle: 14px `#64748B`, max-width 36rem, left-aligned.
- Items (stacked list, `space-y-6`, left-aligned rows): Verified & Well-Maintained Vehicles · Best Price Guarantee · Secure & Easy Booking (Messenger) · Flexible Daily & Monthly Rates · 24/7 Support.
- Item structure: icon container — **white** circle 48×48 (stands out on the tint band) with `#0E52D2` line icon (shrinks, no wrap); sub-headline 14px Bold `#1E293B`; body 12px Regular `#64748B`, line-height 1.4.
- Image: right column, local file `public/images/why-us-handover.jpg` (rental key handover photo), rounded 12px, `aspect-[4/3]`, `object-cover`, fills column width.

### G. Message Band (statement)
- Section: content-height (determined by content), padding `py-16 sm:py-20`, full-bleed dark navy `#0B192E` background. Text only — no image, no icons, no logo.
- Main line: "Every journey deserves a smooth ride." — 28px (24px mobile), Bold, White, centered, max-width 40rem; accent word "smooth ride" Amber `#F59E0B`.
- Sub-line: "From quick city errands to long provincial trips, our vehicles are ready when you are — safe, clean, and affordable." — 14px Regular, `rgba(255,255,255,0.70)`, line-height 1.6, centered, max-width 36rem.

### H. FAQ Section (accordion)
- Section: `id="faq"`, content-height (determined by content), padding `py-16 sm:py-20`, light bg `#F8FAFC`.
- Title "Frequently Asked Questions" 24px Bold centered + muted subtitle.
- Accordion capped at 760px, `space-y-3`. Item: white, border `1px solid #E2E8F0`, radius 12px, overflow hidden. Question row: button full-width, padding 16px 20px, 14px Semi-bold `#1E293B`, ChevronDownIcon (16px `#64748B`) rotating 180° when open, `aria-expanded`.
- Answer: collapsible via grid-rows transition (`grid-rows-[0fr]` ↔ `[1fr]`, 300ms), 13px Regular line-height 1.5 `#64748B`, padding 0 20px 16px. First item open by default.
- 6 questions: booking process, with/without driver, deposits & payment, out-of-town trips, requirements (license/ID), cancellation/reschedule. Placeholder policies marked "(Edit this with your actual policy)".

### I. Testimonials Section
- Section: content-height (determined by content), padding `py-16 sm:py-20`.
- Headline "What Our Customers Say" 24px Bold, centered. 3 cards in a row, carousel arrow buttons on outer edges.
- Card: `#FFFFFF`, border `1px solid #E2E8F0`, radius 12px, padding 24px. Star rating 5 gold stars `#F59E0B`; quote 13px Regular, line-height 1.5, `#1E293B`; author block (no avatar): name 13px Bold `#1E293B`, trip/location 11px Regular `#64748B`.

### J. Long-Term Rental / Promo Banner
- Section: content-height (determined by content), padding `py-16 sm:py-20`, white bg.
- Banner container: height 240px, radius 16px, overflow hidden, 2-column flex split.
- Left (gradient blue `#0E52D2` → `#0B43A8`): tagline caps "LONG-TERM RENTALS & PROMOS" 11px Bold, white 80%; headline "Get the Best Rates for Monthly Rentals" 26px Bold white; body 13px Light white; CTA white bg, text `#0E52D2`, 13px Bold, radius 8px, height 40px (`py-3`).
- Right: photo background (van on the road).

### K. Quick Contact / CTA Bar
- Section: content-height (determined by content), padding `py-16 sm:py-20`, white bg.
- Container: navy CTA band — radius 16px, gradient `#0B192E` → `#071120`, centered, padding 48px vertical (64px on sm+).
- Content: heading "Ready to Get Started?" 24px → 28px Bold white; sub copy 14px `rgba(255,255,255,0.70)` max-width 36rem.
- Button row (centered, wraps): "Chat on Messenger" solid `#0E52D2` white text; "WhatsApp" white outline (`1px solid rgba(255,255,255,0.40)`, `rgba(255,255,255,0.10)` bg, hover `rgba(255,255,255,0.15)`), both 14px Semi-bold, height 44px, radius 8px.
- Contact chips row (centered, wraps, gap 24px x 12px): 13px `rgba(255,255,255,0.85)` (hover white), icon 16px + "Label · **value**" inline links — **Call Ms. Angie** (`tel:+639926723651`), **WhatsApp** (`https://wa.me/639628408580`), **Tour Pilot** (`tel:+639917484076`), **Email Us** (`mailto:mariquinatravelaandtours@gmail.com`), **GCash — Percival Mariquina** 0962 840 8580 (`tel:+639628408580`), **GCash — Angelica Tongol** 0992 672 3651 (`tel:+639926723651`) — GCash chips use the wallet icon.
- Below the band: "Book Your Vehicle" **Formspree form** (full name, contact number + email address — 2-col row, vehicle needed, pick-up date + return date — 2-col row, pick-up complete address, complete address of destination, optional message) in a white card matching the same border/radius language. Submit posts via `fetch` to `https://formspree.io/f/mzeppbpy` (hidden `_subject` "New booking request — Mariquina Travel"); the visitor stays on the page — no email app involved. States: **sending** (button disabled, label "Sending…"), **error** (inline amber `#F59E0B` message + Messenger fallback link), **success** (opens a **modal** — same overlay language as the photo lightbox: fixed full-viewport `z-60`, backdrop `#0B192E` at 95%, centered white card `rounded-2xl` `max-w-md` padding 32→40px: `CheckIcon` in a 48px `#EFF6FF` circle with `#0E52D2` icon — same pattern as How It Works — "Booking Request Sent!" 18px Bold `#1E293B`, body 14px `#64748B` "We'll reply to confirm your booking via Messenger or email.", then two actions: **Done** solid primary 44px (closes modal, resets the form) and **Message Us on Messenger** outline primary + Messenger icon → `messenger.com/t/256559060865144` new tab). Modal behavior: `role="dialog"` + `aria-modal`, focus moves to "Done" on open, `Esc` and backdrop-click close (any close resets the form and returns to idle), body scroll locked while open. The form card itself never swaps — it stays in place under the overlay; native `required`/`type="email"` validation gates submission, so the modal only ever fires on a valid, successful POST. Inputs use `text-base` (16px) on mobile → `text-sm` (14px) on `sm+` to prevent iOS Safari auto-zoom on focus.

### L. Main Footer
- Background `#0B192E`, white/light gray text. 6-column grid:
  - Col 1 (Brand): logo, tagline, social icon row (Messenger, WhatsApp, Email).
  - Col 2 (Vehicles): Sedans, 7-Seaters, Vans (12–19 Seaters), Airport Transfers, Monthly Rentals.
  - Col 3 (Services): Self-Drive, With Driver, Group Tours, Corporate Bookings, Long-Term Rentals.
  - Col 4 (Destinations): the 6 destination pages (`/destinations/tagaytay` … `/destinations/vigan`) — auto-generated from `app/lib/destinations.ts`.
  - Col 5 (Help): How It Works, Frequently Asked Questions, Terms of Service, Privacy Policy.
  - Col 6 (Contact): Ms. Angie `0992 672 3651`, WhatsApp `0962 840 8580`, Tour Pilot `0991 748 4076`, email, GCash — Percival Mariquina `0962 840 8580`, GCash — Angelica Tongol `0992 672 3651`, operating hours.
- Typography: category headlines 14px Bold white; links 13px Regular `#94A3B8`, vertical spacing 10px.

### M. Copyright Sub-Footer
- Background `#071120`. Text: "© 2026 Mariquina Travel. All rights reserved." centered, 12px Regular `#64748B`.

### N. Floating Messenger Button
- Overlay widget (not part of the vertical flow): fixed to viewport bottom-right (`bottom 20px, right 20px`), `z-50`, visible on all screen sizes.
- 56×56 circle, `#0E52D2` bg (hover `#0345BA`), white Messenger icon 24px. Flat — no shadow (matches global no-shadow rule).
- Links to `https://www.messenger.com/t/256559060865144` (new tab), `aria-label="Chat on Messenger"`.

### O. Vehicle Gallery Page (`/vehicles/[slug]`)
- Standalone page (own layout — no home header/footer), served for `van-1`–`van-4`, `7-seater`, and `sedan` (prerendered via `generateStaticParams`; unknown slugs → 404). Generated from shared data in `app/lib/vehicles.ts` (slug, name, seats, rate, images, page flag). Shows every photo for the vehicle: Van #1 10 (`van.jpg`–`van10.jpg`), Van #2 3 (`van-2/1.jpg`–`3.jpg`), Van #3 4 (`van-3/1.jpg`–`4.jpg`), Van #4 4 (`van-4/1.jpg`–`4.jpg`), 7-Seater 5 (`7-seater.jpg`–`7-seater5.jpg`), Sedan 2 (`sedan.jpg`, `sedan2.jpg`).
- Top bar: sticky, 64px tall, white bg, `1px solid #E2E8F0` bottom border. Brand only (logo 28px + "Mariquina" ink / "Travel" amber, 20px Bold + tagline 10px uppercase `#64748B`) linking `/`.
- Body: light bg `#F8FAFC`, container `max-w-[1200px]`, padding `py-10 sm:py-14`. Above the title: "← Back to Vehicles" link (14px Semi-bold `#0E52D2`, hover `#0345BA`, chevron-left icon) → `/#vehicles`. Title: vehicle name 24px → 28px Bold `#1E293B` (photos only — no price/info).
- Photo grid: 1 → 2 (sm) → 3 (lg) columns, gap 20px. Each photo in a white card (radius 12px, border `1px solid #E2E8F0`, hover border `#0E52D2`), `aspect-[4/3]` `object-cover`, full column width. Each card is a button opening the **lightbox**.
- Lightbox (`PhotoGallery` shared client component): fixed full-viewport overlay `z-60`, `#0B192E` at 95% opacity. Photo centered `object-contain`, max 70vh tall, max-w-4xl. Controls: close (top-right), prev/next (left/right center) — 40–44px circles, `1px solid rgba(255,255,255,0.30)` border, `rgba(255,255,255,0.10)` bg, hover `0.20` (same language as the hero scroll-hint badge); photo counter bottom-center ("3 / 14", 14px Semi-bold white/80). Clicking the backdrop closes; keyboard Esc closes, ArrowLeft/ArrowRight navigate; body scroll locks while open.
- Home page cards: each card has a **Book Now** button (solid primary → `#inquiry-form`) and a **View Photos** button (outline → `/vehicles/{slug}`); the card itself is not a link.

### D2. Destinations Section (home)
- Section: `id="destinations"` (was `tours`), content-height, padding `py-16 sm:py-20`, light bg `#F8FAFC` (sits between the promo banner and FAQ).
- Header: "Destinations We Cover" 24px Bold centered + subtitle 14px muted centered, max-width 36rem: "Joiners and group-exclusive tours to the country's most loved destinations — pick a route to see rates and trip info."
- Grid: 6 destination cards (`sm:grid-cols-2 lg:grid-cols-3`, gap 20px), same card language as vehicles: white, radius 12px, border `1px solid #E2E8F0`, hover border primary.
- Card structure: photo top (`aspect-[4/3]`, object-fit cover, subtle hover zoom); destination name 18px Bold `#1E293B`; tagline 14px Regular `#64748B`. **Whole card is a link** to `/destinations/{slug}`. Cards are auto-generated from `app/lib/destinations.ts` — add a destination there and it appears here, on the footer, and in the sitemap.
- Destinations (from `app/lib/destinations.ts`): **Tagaytay**, **Baguio**, **La Union**, **Batangas**, **Zambales**, **Vigan** — each with tagline, cover photo in `public/images/destinations/`, travel time, recommended vehicle, intro copy, and 3 destination FAQs.
- Bottom-center CTA: "Message Us to Book" solid blue button (44px, radius 8px, 14px Bold white, Messenger icon) → Messenger (same as How It Works).

### Q. Travel Photos Section
- Section: `id="travel-photos"`, content-height, padding `py-16 sm:py-20`, **white bg** (sits between the Tours band `#F8FAFC` and FAQ band `#F8FAFC` — restores the background-rotation rule so no two adjacent sections share a background).
- Header: "Travel Photos" 24px Bold centered + subtitle 14px muted centered: "Snapshots from our trips across the Philippines."
- Content: photo-only gallery grid (thumbs `aspect-[4/3]` object-cover, `sm:grid-cols-2 lg:grid-cols-3`, gap 20px, rounded-xl, border `1px solid #E2E8F0`, hover border-primary) → click opens the shared `PhotoGallery` lightbox (same spec as vehicle pages above, counter "1 / N").
- Photos: **auto-listed from `public/images/journal/` at build time** (server component `readdir`, allowed `.jpg .jpeg .png .webp .avif`, natural filename sort) — adding a photo to the folder and rebuilding makes it appear; no code change needed. Empty/missing folder → the section renders nothing.

### R. Destination Pages (`/destinations/[slug]`)
- Standalone SEO landing pages (same top-bar-only layout family as the vehicle gallery pages) — one per destination in `app/lib/destinations.ts` (**Tagaytay, Baguio, La Union, Batangas, Zambales, Vigan**), prerendered via `generateStaticParams`; unknown slugs → 404. Purpose: match "van rental {destination}" / "van to {destination} from Cavite" searches. Sitemap priority 0.7, `changeFrequency: weekly`.
- Top bar: identical to vehicle gallery page (sticky 64px white bar, brand linking `/`).
- Body: light bg `#F8FAFC`, container `max-w-[1200px]`, padding `py-10 sm:py-14`.
- Breadcrumb row (13px Medium `#64748B`, `/` separators): Home → Destinations (`/#destinations`) → `{name}` (current, `#1E293B`). Below it a "← Back to Destinations" link (14px Semi-bold primary) → `/#destinations`.
- H1: "Van & Car Rental to {name}" — 30px mobile → 36px `sm`, Bold, `#1E293B`, route name Amber `#F59E0B` (echoes the hero keyword formula). Below: tagline 16px Medium `#64748B`.
- Cover photo: `aspect-[16/9]`, full column width, `rounded-2xl`, `1px solid #E2E8F0` border, `object-cover`, `priority` (LCP).
- Facts row (`grid-cols-1 sm:grid-cols-2 gap-4`): two white chips (radius 12px, border, padding 20px) — each with a 48px `#EFF6FF` circle + primary icon (ClockIcon / RouteIcon, 24px) and a stacked label: 11px Bold uppercase tracking-widest primary + 14px Semi-bold value: **Travel Time** (`travelTime` from data) and **Pickup Area** (Cavite — metro & province-wide on request).
- Intro: 15px Regular `#64748B`, line-height relaxed, max-width 48rem (keyword-rich first sentence, editable in `destinations.ts`).
- Recommended vehicle card: white, radius 12px, border, padding 24px; `sm:flex-row` split. Left: 48px `#EFF6FF` circle + CarIcon, label "RECOMMENDED VEHICLE" (11px Bold caps primary), vehicle name 18px Bold, note 14px muted. Right: two buttons (44px, radius 8px): **View Photos & Rates** solid primary → `/vehicles/{slug}`; **Book This Trip** outline primary + Messenger icon → Messenger.
- FAQ block: max-width 48rem — h2 "{name} Rental — FAQs" 24px Bold + muted sub-line; shared accordion pattern (identical to home FAQ items: white, border, radius 12px, grid-rows transition, first item open) driven by `DestinationFaq` (client component accepting `questions` prop; home FAQ keeps the shared `faqs` array).
- "Other Routes We Cover": h2 24px Bold + grid of the other 5 destinations (`sm:grid-cols-2 lg:grid-cols-3` gap 20px) using the home destination-card language — whole-card links to `/destinations/{slug}` (internal linking + anchor text).
- CTA band: navy gradient `#0B192E → #071120` `rounded-2xl`, centered, padding 48px/64px: "Ready to head to {name}?" 24→28px Bold white + sub 14px white/70 + button row (Messenger solid primary, WhatsApp white outline) — same language as the home Quick Contact band.
- Metadata (`generateMetadata` per slug): title from `pageTitle` (e.g. "Van Rental to Tagaytay | Mariquina Travel"), description, canonical on `https://www.mariquinatravel.com/destinations/{slug}`, OG image = destination cover (absolute URL), Twitter summary_large_image.
- JSON-LD (single script, `@graph`): **BreadcrumbList** (Home → {name}) + **FAQPage** (the 3 destination FAQs). No fabricated `aggregateRating` — review markup is only to be added once real Google/Platform reviews exist (Search Console policy).
- Cover photos: `tagaytay.jpg`, `la-union.jpg`, `batangas.jpg`, `zambales.jpg` are free-license Wikimedia Commons photos (CC BY-SA 4.0 / CC BY 4.0; photographers: Ralff Nestor Nacor — Taal Lake from Tagaytay; San Juan Beach La Union — Ralff Nestor Nacor; Calayo Beach Nasugbu — "Ten Thousand Strangers"; Nagsasa Beach — Mariajerty), pre-compressed via the same image policy (≤2048px, mozjpeg q85). Replace with the client's own trip photos when available (rename file → update `destinations.ts`).

---

## 3.5 Responsive & Mobile Behavior

- **Breakpoints (Tailwind default):** `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px. Build mobile-first: base styles = phone, then layer up.
- **Nav:** desktop links + phone show at `xl`; hamburger panel below `xl` (link rows 44px tall). Phone number hidden below `md` (available in the mobile panel); "Message Us" button hidden below `sm`.
- **Hero:** `min-h-svh` (not `min-h-screen`) so the full-height section uses the small viewport height — no URL-bar jump on mobile browsers. Headline 36px mobile → 44px `sm` → 50px `lg`, wraps naturally. Scroll-hint badge sits `bottom-24px`; content padded `pt-28 pb-20`.
- **Grids:** vehicles `1 → 2 (sm) → 3 (md)`; how-it-works `1 → 3 (sm)`; why-us stacks to 1 col below `lg` (image below text); promo banner 1 col below `lg` (image hidden, gradient panel only); travel photos `1 → 2 (sm) → 3 (lg)`; destinations `1 → 2 (sm) → 3 (lg)`; footer `1 → 2 (sm) → 6 (lg)`.
- **Testimonials:** below `md`, arrows hide and cards are full-width with native snap scroll (`snap-x snap-mandatory`, swipeable).
- **Forms:** inputs `text-base` (16px) below `sm` — prevents iOS auto-zoom; date row stacks to 1 col below `sm`; submit button full-width.
- **Tap targets:** interactive elements ≥40px tall minimum (buttons `h-10`+; nav rows 44px; icon buttons 40×40).
- **Containers:** `max-w-[1200px]` with `px-4 sm:px-6`; `scroll-padding-top: 73px` on `html` so anchors clear the sticky bar.

---

## 4. Spacing & CSS Utility Reference

```css
:root {
  /* Colors */
  --primary-blue: #0E52D2;
  --primary-hover: #0345BA;
  --bg-dark-navy: #0B192E;
  --bg-dark-navy-deep: #071120;
  --text-dark: #1E293B;
  --text-muted: #64748B;
  --bg-light: #F8FAFC;
  --border-light: #E2E8F0;
  --accent-amber: #F59E0B;
  --bg-tint: #EFF6FF;

  /* Spacing System */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-xxl: 64px;

  /* Typography */
  --font-family-main: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-display: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

**Typography rules**
- Body text (all copy, buttons, nav, form fields): **Figtree** (variable 300–900), loaded self-hosted via `next/font` (`--font-figtree` → `--font-sans`).
- Display text (all `h1`, `h2`, `h3` — section headings, card titles, hero, CTA headings): **Bricolage Grotesque** (variable 200–800), `--font-bricolage` → `--font-display`. Applied globally via `h1, h2, h3 { font-family: var(--font-display) }`.
- Hero `h1` ("Van & Car Rental in Cavite — Manila, Baguio & Tagaytay") wraps naturally at all breakpoints (no `whitespace-nowrap`); "Cavite" is Amber `#F59E0B`, the rest White. Keywords echo the title tag "Van & Car Rental in Cavite | Mariquina Travel".
- **Tab/home-screen icons** (same logo mark, center-cropped to square from `public/images/logo/logo.png`): `app/icon.png` 512×512 (browser tab, auto-linked `rel="icon"`), `app/apple-icon.png` 180×180 (iOS/Android home screen), `app/favicon.ico` multi-size 16/32/48 (legacy browsers).

**Notes**
- Radius language: buttons 8px, cards 12px, widget/banners 16px, circular items 50%.
- Shadows: none — cards are flat and separated by borders only (`1px solid #E2E8F0`). No glow/colored shadows.
- **Performance & caching:** deploy target is **Vercel** (auto CDN edge, brotli, sharp image optimizer). `next.config.ts` sets `images.qualities: [80]` (Next 16 API — a `quality` prop is coerced to the closest allowed value) with `formats: ['image/avif', 'image/webp']` — served derivatives are AVIF (WebP fallback) at 1×/2×/3× srcsets, so images render retina-sharp (HD) while staying light; the full-resolution originals in `public/images/` are never served to visitors and remain the HD masters. Public assets (`/images/*`, `favicon.ico`, `icon.png`, `apple-icon.png`) are served with `Cache-Control: public, max-age=31536000, immutable`; HTML pages (`/`, `/vehicles/:slug`) get `public, s-maxage=86400, stale-while-revalidate=31536000` — content changes only on redeploy, so CDN caching is safe. Replace-content cache busting = rename the file (see below).
- **Image originals policy:** originals stay ≤2048px on the long edge and are pre-compressed before deploy via `scripts/compress-images.cjs` (mozjpeg q85, EXIF stripped, keep-original-if-larger; photos stored as JPG — PNG only for the logo, which is skipped by the script). Social-share image: `/images/og-image.jpg` (1200×630 crop of the hero, generated with sharp; referenced by the `openGraph`/`twitter` metadata in `app/layout.tsx`, `metadataBase: https://www.mariquinatravel.com/`).
- All mockup images live in `public/images/` (hero, vehicles/, avatars/). Vehicle images: `sedan.jpg`/`sedan2.jpg`, `7-seater.jpg`–`7-seater5.jpg`, `van.jpg`–`van10.jpg` (Van #1), plus per-van folders `van-2/`–`van-4/` — full lists live in `app/lib/vehicles.ts`. Rename the file when replacing content to defeat browser caching, then update the reference in `app/lib/vehicles.ts` / `promo-banner.tsx`.
