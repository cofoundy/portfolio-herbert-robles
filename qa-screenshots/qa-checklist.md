# QA Report: Dr. Herbert Cristian Robles

**Date:** 2026-05-05
**URL:** https://herbert-robles.cofoundy.dev
**Tier:** Premium (S/.280)
**Status:** PASS_WITH_NOTES — content all correct, but Cloudflare edge cache is still serving the OLD profile photo

---

## Critical Finding — Photo NOT yet visible to public

The new portrait (suit + sky-blue tie, 604x800, md5 `47cd252c...`) **IS** on the `gh-pages` branch and `public/profile.png` locally. But the live CDN (`https://herbert-robles.cofoundy.dev/profile.png`) is still returning the OLD photo (white coat + scrubs, 447x800 effective render, 386572 bytes, md5 `17e06ba1...`).

**Evidence:**
- `gh-pages` branch `profile.png` → md5 `47cd252c86035dda635feb09356bbd1b` (new, 602258 bytes)
- `curl https://herbert-robles.cofoundy.dev/profile.png` → md5 `17e06ba10b7a6ab98c594e49da8e2bd6` (OLD, 386572 bytes)
- `cf-cache-status: HIT`, `age: 176s`, `cache-control: max-age=14400`
- Playwright `<img>` reports `naturalWidth: 447, naturalHeight: 800` → that's the OLD photo's aspect, not the new 604x800 file

**Root cause:** Deploy did not purge Cloudflare cache for `/profile.png`. The edge will hold the old image for up to 14400s (4h) from upload time.

**Required fix (one of):**
1. Re-run `./scripts/deploy.sh herbert-robles` (the script's step 9 purges Cloudflare — but only works if `CF_PURGE_TOKEN` is exported in env)
2. Manual purge via Cloudflare dashboard → Caching → Purge by URL: `https://herbert-robles.cofoundy.dev/profile.png`
3. Wait ~4 hours for natural TTL expiry (NOT acceptable for client delivery)

`CF_PURGE_TOKEN` was NOT set in env at QA time, so deploy step 9 was skipped silently.

---

## Technical Health
- [x] HTML 200
- [x] /profile.png 200 (but serving stale version — see above)
- [x] /favicon.svg 200
- [x] /og.jpg 200
- [x] /cv.pdf 200

## Visual — Desktop (1280px)
- [x] Site styled (CSS loaded, monocromatic blue medical palette)
- [x] All 7 custom sections render: Hero, Expertise (Subespecialidades), Trayectoria Quirúrgica, Formación, Investigación y Reconocimientos, Donde Atiendo, Agende su Consulta + Footer
- [x] Fonts loaded (serif headings — looks like Cormorant or similar, sans body)
- [x] Counters animate (captured mid-animation at 70/47/117, settling on 2,500+/1,000+/3,500)
- [x] No horizontal overflow
- [ ] **Hero photo:** rendered, but it's the OLD photo (white coat). Should be the NEW formal portrait.

## Visual — Mobile (375px)
- [x] Name fits ("Dr. Cristian Robles" + tagline wraps cleanly)
- [x] Photo sized correctly (rounded square, top-centered, ~280x280)
- [x] Nav mobile-friendly (hamburger area present in header)
- [x] Text legible
- [x] Cards stack vertically (Subespecialidades, Donde Atiendo)
- [x] No horizontal scroll
- [x] Counters readable on mobile (mid-animation 69/46/114)
- [ ] **Hero photo:** same issue — OLD photo rendered

## Other Sections (non-photo)
- [x] Expertise: 3 cards (Cirugía de Retina y Vítreo, Cirugía de Catarata, Retina Clínica) with stats 1000+/1500+/10+
- [x] Trayectoria: counters + 2 panels (Cirugías de Catarata, Vitrectomías) with chip lists
- [x] Formación: timeline 2015→2023→Actualidad, 4 entries (Hospital Edgardo Rebagliati, Fundación Zambrano BA, UNMSM, U. César Vallejo)
- [x] Investigación: 3 publicaciones + 3 reconocimientos + 3 sociedades (PAAO, EuRetina, SARyV)
- [x] Donde Atiendo: 3 sedes (Hosp. Edgardo Rebagliati, Clínica de Especialidades Oftalmológicas, Clínica Oftalmos SAC)
- [x] Contacto: WhatsApp + Email buttons + visible phone (+51944759657) + email (roblescristian78@gmail.com)
- [x] Credentials visible: CMP 70451, RNE 41493
- [x] Memberships chips: PAAO, EURETINA, SARyV

## Premium Quality Gates
- [x] **Swap test:** Layout is profession-specific (counters, "Donde Atiendo" with hospital types, RNE/CMP creds in hero). Swapping to a different doctor would still need the same custom config — but a non-doctor would NOT fit. PASS.
- [x] **Screenshot test:** Without text, you'd identify "doctor / surgeon" by the white-coat photo (OLD), the navy/blue medical palette, hospital card icons, and the surgical metric counters. PASS.
- [x] **Unique sections:** "Trayectoria Quirúrgica" with animated surgical counters + chip lists of procedure types is not in any other portfolio. PASS.
- [x] **Design proposal match:** Monocromatic blue medical, serif headings, 7 custom sections — matches `design-proposal.md`. PASS.

## Clean Deploy
- [x] No template default names ("Dr. Cristian Robles" everywhere — correct)
- [x] No Lorem ipsum / placeholders
- [x] Real social/contact (no `#` links)
- [x] Custom palette applied (medical blue, not template default)

## Data Validation
- [x] Name: Dr. Cristian Robles (matches research-notes; client introduces himself as "Cristian", not "Herbert")
- [x] CMP 70451, RNE 41493 — match research
- [x] Hospitals match research (Edgardo Rebagliati, Clínica Oftalmos, Clínica Especialidades Oftalmológicas)
- [x] Education timeline matches research (UNMSM 2021, U. César Vallejo 2015, Fundación Zambrano BA 2022-23)
- [x] Phone +51 944 759 657 + email roblescristian78@gmail.com — verified in client-meta

## Issues Found

| Severity | Issue | Fix |
|----------|-------|-----|
| **CRITICAL** | Cloudflare CDN still serving OLD profile photo (white coat) — public visitors see the old version, not the new suit+tie portrait | Run deploy with `CF_PURGE_TOKEN` set, OR manually purge `/profile.png` in CF dashboard |
| INFO | Counter animations captured mid-animation in screenshots (70/47/117 desktop, 69/46/114 mobile) | Cosmetic — counters DO animate to correct final values (2500+/1000+/3500). Not a bug. |

## Evidence
- `desktop-full.png` — full-page desktop overview
- `mobile-full.png` — full-page mobile overview
- `desktop-hero.png` + `mobile-hero.png` — show OLD photo despite new file deployed
- `manifest.json` — section dimensions
- Per-section crops for all 7 sections at desktop + mobile

## Verdict

**PASS_WITH_NOTES.** Build, content, structure, mobile, fonts, palette, sections — all correct. The portfolio is production-quality.

**BUT** the photo swap is not yet visible to the public due to Cloudflare cache. Before notifying the client that "the new photo is live", purge the CDN cache for `/profile.png` and re-verify with a fresh curl + screenshot.

