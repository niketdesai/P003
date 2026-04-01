# ENND.CO — Build Specification
## v1 · 01 Apr 2026 · Source: P003 (Practice OS)

---

## WHAT THIS IS

A single-page website at **ennd.co** for Niket Desai's consulting practice. It is the entity's public presence — the thing someone finds when they see "ENND I, LLC" on an invoice, SOW, or project footer and Google it. It needs to look exceptional, feel intentional, and sell without trying to sell.

This is NOT a portfolio site, a consulting firm website, or a landing page with a CTA. It's closer to a beautifully designed business card that happens to tell a story.

---

## WHO SEES THIS

- A prospective client doing diligence after receiving a SOW
- An investor or partner who encountered the entity name
- Someone who was forwarded the AI essay and wants to know who wrote it
- A conference organizer or journalist looking for a bio

They arrive curious. They should leave thinking: "this person is operating at a level I want to be part of."

---

## DESIGN DIRECTION

**Aesthetic:** Refined, dark, restrained. Not brutalist — warm. Not corporate — personal. Think: the confidence of someone who doesn't need to explain themselves but chooses to.

**Palette:**
- Background: near-black (#0a0a0a to #0e0e0e range)
- Accent: gold (#D4A853) — same as the NND project sites
- Text: warm whites and grays (#f0ede5 primary, #888 secondary, #444 tertiary)
- No bright colors. No gradients. No decorative elements.

**Typography:**
- Structure/headings: JetBrains Mono (monospace)
- Body text: DM Sans (sans-serif)
- Import via Google Fonts
- No system fonts. No Inter. No generic anything.

**Animation:** Subtle, purposeful. Staggered fade-in on load. No bouncing, no parallax, no scroll-jacking. The kind of motion that makes you think "someone cared" without being able to point at what moved.

**Mobile:** Must work beautifully at 375px. This is a phone-first site — most visitors will arrive via a link in an email or text.

---

## CONTENT BLOCKS (in order)

### Block 1: Identity
The /N mark, name, and positioning sentence.

```
/N

NIKET DESAI

I run a small advisory practice across technology, hospitality,
and finance — and I build and write about things I can't stop
thinking about.
```

The mark and name should feel like a letterhead. The sentence is the only paragraph on the entire page. It does all the work.

### Block 2: The Arc
A vertical timeline. No paragraphs. Just stops. The sequence IS the story — builder, operator, investor, builder again.

```
Berkeley · IEOR
Punchd · Co-Founder → Google
Google · Product (Maps, Commerce)
Motorola · Product (Moto X, Moto 360, Active Display)
Flipkart · Chief of Staff
UC Investments · CIO Fellow
Laurel · Co-Founder → Advisor
```

Design note: This should feel like a résumé distilled to its spine. Monospace. Vertically stacked. Maybe a thin line connecting the stops. Each stop animates in sequentially on first load.

### Block 3: Now
What he's doing today. Short lines, not paragraphs.

```
Advisory across technology, hospitality, and finance
Co-owner, Opavino — a San Francisco hospitality group
  Lillie Coit's · HITW Coffee · Pushback Wines
Investor in Laurel Baking Company and Place des Fêtes (NYC)
```

This block grounds the timeline in the present. The hospitality detail signals "this person builds real things in the real world, not just software."

### Block 4: Writing
Link to the essay. This is the proof of thinking.

```
On AI and Administration → niket.com/ai
```

One line. One link. If they click, they'll spend 20 minutes reading and come back impressed. If they don't, the title alone signals what he thinks about.

### Block 5: Contact
```
nnd@ennd.co
```

Just the email. Monospace. Small. At the bottom. No form. No "let's connect." No LinkedIn icon. If someone wants to reach him, they know how.

### Footer
```
ENND I, LLC · San Francisco
```

Smallest text on the page. The entity name confirms what this site represents.

---

## WHAT IS NOT ON THIS SITE

- Pricing, rates, or any reference to cost
- Client names or project codes
- The pricing matrix or any P003 internals
- The House Fund (never reference, anywhere, ever)
- Yomomma Ventures
- A "services" section or capabilities list
- Testimonials
- A contact form
- Social media icons (though @niket on X is fine as a subtle footer link if needed)
- Any mention of cancer (it's public elsewhere but does not lead here)

---

## TECHNICAL REQUIREMENTS

- Static site. HTML/CSS/JS or a lightweight framework (Astro, plain Vite, etc.)
- Host on GitHub Pages, Vercel, or Cloudflare Pages
- Custom domain: ennd.co
- SSL required
- OG tags for social sharing:
  - Title: "ENND I, LLC — Niket Desai"
  - Description: the positioning sentence
  - OG image: dark card with /N mark and name (generate or design)
- Favicon: /N mark
- apple-touch-icon
- Must render perfectly at 375px (mobile) and 1440px (desktop)
- Page load < 2 seconds
- No JavaScript frameworks unless genuinely needed — this is mostly CSS

---

## FUTURE ARCHITECTURE

ennd.co is the hub. As additional entities are created:
- ennd.co/1 → ENND I details (or just the current page)
- ennd.co/2 → ENND II (8300 Studio / IP projects) — when incorporated
- ennd.co/3 → ENND III — future

These subpages don't exist yet. The architecture just needs to not preclude them.

---

## REFERENCE SITES FOR TONE

Look at how premium solo practitioners, boutique funds, and family offices present themselves. The pattern: sparse, dark, confident, one page. The sparseness IS the signal. Examples of the energy (not the exact design):
- A solo GP's fund site with just a name, thesis, and email
- A luxury brand's "about" page that's 90% white space
- The NND project sites (niketdesai.github.io/P003, /P300) for the specific design language

---

## DEPENDENCIES BEFORE DEPLOY

1. nnd@ennd.co email must be live (A050)
2. DNS for ennd.co must be pointed to hosting
3. pad.co → ennd.co redirect configured (A052)
4. OG image designed or generated

---

## SOURCE OF TRUTH

All content in this spec is derived from P003 (Practice OS, v2.4.0).
Positioning sentence, career arc, verticals, and brand architecture
are finalized as of 01 Apr 2026.
