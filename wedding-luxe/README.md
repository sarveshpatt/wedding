# Sarvesh ♡ Harshadha — Wedding E-Invite

A floating, glass-layered wedding invitation for the wedding of **Sarvesh & Harshadha**
(19 & 20 November 2026, Coimbatore).

Static site — plain HTML, CSS and JavaScript. No build step, no dependencies.

## Sections

| Section | Notes |
|---|---|
| Envelope intro | Tap the wax seal to open the invitation (the letter lifts out of the envelope) |
| Hero | Names, key dates, floating photo stack |
| Countdown | Live countdown to the Muhurtham, 20 Nov 2026, 04:30 IST |
| Our Story | Three milestones |
| Wedding Events | Full two-day schedule, with *Add to Calendar* on Reception + Muhurtham |
| Venue | Address, directions link and embedded map — OSBS Mahal |
| Gallery | Mosaic grid with a full-screen lightbox (arrow keys / Esc work) |
| RSVP | Formspree form |
| Contact | Phone + WhatsApp for both families |

## Features

- **Bilingual** — English / தமிழ் toggle, remembered in `localStorage`
- **Floating depth** — parallax layers, pointer-tracked 3D tilt, glass panels
- **Accessible** — keyboard operable, `aria` labels, honours `prefers-reduced-motion`
- **Responsive** — floating dock nav collapses to a menu on mobile

## Running locally

Any static server works:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deployment

This is the alternate design, served from the `wedding-luxe/` folder of the
[`wedding`](https://github.com/sarveshpatt/wedding) repo:

<https://sarveshpatt.github.io/wedding/wedding-luxe/>

The original invitation lives at the repo root:
<https://sarveshpatt.github.io/wedding/>

## Editing common things

| What | Where |
|---|---|
| Countdown target date | `script.js` → `updateCountdown`, search `2026-11-20T04:30:00+05:30` |
| Calendar event dates | `script.js` → the `CALENDAR` object |
| Event times and order | `index.html` → the `#events` section |
| Any text, both languages | `script.js` → the `translations` object (`en` and `ta`) |
| Colours, shadows, glass | `styles.css` → the `:root` block |
| Photos | `images/gallery/` (referenced by filename in `index.html`) |
| RSVP destination | `index.html` → `#rsvpForm` `action` attribute |
