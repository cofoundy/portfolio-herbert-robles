# QA Report: Dr. Cristian Robles (Herbert Cristian Robles Oncoy)

**Date:** 2026-04-24
**URL:** https://herbert-robles.cofoundy.dev
**Tier:** Premium (S/.280)
**Context:** Re-deploy post-entrega con 8 cambios solicitados por el cliente
**Status:** FAIL (1 regresión crítica detectada)

---

## Technical Health
- [x] HTML 200 | CSS 200 | Profile 200 | Favicon 200 | Guía 200 | CV 200
- [x] Astro build con custom domain (sin `base`) — CSS carga correctamente

## Cambios Solicitados — Verificación 1-a-1

### Cambio #1: Nombre "Dr. Herbert Cristian Robles Oncoy" → "Dr. Cristian Robles"
- [x] **Hero (desktop):** "Dr. Cristian Robles" — OK
- [x] **Hero (mobile):** "Dr. Cristian Robles" — OK
- [x] **Header nav:** "Dr. Cristian Robles" — OK
- [x] **Footer:** "Dr. Cristian Robles" + "© 2026 Dr. Cristian Robles" — OK
- [x] **shortName en config.ts:** "Dr. Cristian Robles" — OK
- [x] HTML source: NO aparece "Herbert" ni "Oncoy" en ninguna parte

### Cambio #2: Tagline "Especialista en Cirugía de Catarata, Retina y Mácula"
- [x] **Hero desktop:** tagline visible correcta
- [x] **Hero mobile:** tagline visible correcta (con line-break esperado por viewport 375px)
- [x] **Title (nav):** "Cirujano de Catarata, Retina y Mácula" (corto, consistente)

### Cambio #3: Stat "1,750+ Cirugías Oculares" → "2,500+ Cirugías Oculares"
- [x] **Hero stats desktop:** "2,500+" visible
- [x] **Hero stats mobile:** "2,500+" visible
- [x] **CTA description:** "Más de 2,500 cirugías oculares respaldan mi experiencia."
- [x] HTML source: NO aparece "1,750" ni "1750"

### Cambio #4: Expertise card #3 → "Retina Clínica" con nuevo contenido
- [x] **Desktop:** título "Retina Clínica", descripción "Degeneración macular, miopía degenerativa, oclusiones vasculares, tomografía de coherencia óptica (OCT) y angiografía retiniana." — OK
- [x] **Mobile:** contenido idéntico, card renderiza correctamente
- [x] HTML source: NO aparece "Diagnóstico Retinal" ni "retinopatía del prematuro" en sección expertise
- [x] Metric "10+ años de práctica clínica" — correcto
- [x] Icono `scan` (grid de 4 cuadrados) renderizando sin overflow

### Cambio #5: Expertise #1 y #2 — números aproximados (1000+, 1500+)
- [x] **Card #1 "Cirugía de Retina y Vítreo":** "1000+ vitrectomías realizadas"
- [x] **Card #2 "Cirugía de Catarata":** "1500+ cirugías de catarata"
- [x] HTML source: NO aparece "680+" ni "1074" en sección expertise
- [x] Alineación consistente entre los 3 cards (mismo alto, misma estructura)

### Cambio #6: Trayectoria Quirúrgica — counters + chips/pills
- [x] **Counters target correcto en HTML:** `data-target="1500"`, `data-target="1000"`, `data-target="2500"` — VERIFICADO en HTML source
- [x] **Chips de tipo de cirugía — CATARATAS (5 pills):** Cataratas seniles | Cataratas complicadas | Catarata y miopía | Catarata e hipermetropía | Catarata y astigmatismo — OK
- [x] **Chips de tipo de cirugía — VITRECTOMÍAS (4 pills):** Desprendimiento de retina | Membrana epirretiniana | Hemorragia vítrea | Agujero macular — OK
- [x] **Desktop:** 2 columnas lado a lado (cataratas izq | vitrectomías der), chips wrap correctamente en 2-3 filas
- [x] **Mobile:** chips stack vertical, cada card en su propio bloque, sin overflow
- [x] **Ningún "breakdown por lugar" visible** — el viejo diseño con barras proporcionales por hospital fue reemplazado correctamente
- [⚠] **Counters visualmente en 0 / 70-116 / 68-114 en screenshots** — esto NO es un bug del portfolio, es limitación del script de screenshots: los counters animan desde 0 al entrar en viewport y el timing del screenshot los captura mid-animation. El HTML source confirma que los targets finales son 1500/1000/2500. **En navegador real, el cliente verá los counters animar hasta llegar a los valores correctos.**

### Cambio #7: Formation Rebagliati description
- [x] **Desktop:** "Atención clínico-quirúrgica en la Unidad de Retina." — OK (sin menciones a Oftalmos ni Clínica de Especialidades)
- [x] **Mobile:** mismo contenido, formato correcto
- [x] Clínica de Especialidades y Oftalmos siguen apareciendo (correctamente) solo en sección "Donde Atiendo" como locations separadas

### Cambio #8: Teléfono +51 987 001 069 → +51 944 759 657
- [x] **WhatsApp link (hero "Contactar por WhatsApp"):** `wa.me/51944759657` — CORRECTO ✓
- [x] **WhatsApp link (CTA "Contactar por WhatsApp"):** `wa.me/51944759657` — CORRECTO ✓
- [x] **config.ts:** `cta.phone` y `social.phone` = "+51944759657" — CORRECTO
- [ ] **❌ REGRESIÓN CRÍTICA: Texto visible del teléfono en CTA section sigue mostrando "+51 987 001 069"** (el número VIEJO)
  - **Ubicación:** `src/components/ContactCTA.astro:53`
  - **Bug:** El número está hardcodeado en el HTML del componente en lugar de usar `{siteConfig.social.phone}` o `{siteConfig.cta.phone}`
  - **Impacto alto:** Usuario que lea el número visualmente llamará al número EQUIVOCADO, aunque el botón WhatsApp funcione. Inconsistencia = pérdida de confianza + paciente va al número incorrecto.
  - **Fix requerido:** reemplazar la línea 53 de `ContactCTA.astro` de `+51 987 001 069` a `{siteConfig.social.phone}` (o formatear desde config)

---

## Visual QA — Desktop (1280px)
- [x] Styled correctamente, CSS cargado
- [x] Paleta azul medical consistente (#1565C0 primary, #0C2D48 dark, #E8F0FE surface)
- [x] Fonts Google cargados (serif headings + sans body)
- [x] Todas las 7 secciones renderizan (hero, expertise, trayectoria, formacion, investigacion, donde-atiendo, contacto + footer)
- [x] Sin horizontal overflow
- [x] Spacing consistente entre secciones
- [x] Timeline de Formación renderiza con dots + líneas verticales correctamente
- [x] Logos institucionales (EsSalud, UNMSM, UCV, Fundación Zambrano, PAAO, EURETINA) cargan

## Visual QA — Mobile (375px)
- [x] Nombre "Dr. Cristian Robles" fits sin overflow (más corto que el original, mejor UX mobile)
- [x] Tagline hace 2-line wrap limpio ("Especialista en Cirugía de Catarata, Retina y / Mácula")
- [x] Photo sized correctly (circular, ~200px)
- [x] Stats (2,500+ / 10+ / 3) caben horizontalmente sin apretarse
- [x] Credential pills (CMP, RNE) visibles
- [x] Society pills (PAAO, EURETINA, SARyV) wrap a una sola fila
- [x] Expertise cards stack verticalmente — OK
- [x] Trayectoria counters stack verticalmente — OK
- [x] Chips de cataratas/vitrectomías wrap 2-3 por fila sin overflow
- [x] Formation timeline: dots + cards stack correctamente
- [x] Donde Atiendo cards stack verticalmente
- [x] CTA buttons full-width
- [x] Sin horizontal scroll en ninguna sección

## Data Validation (Anti-Hallucination)
- [x] Nombre correcto (cliente pidió "Dr. Cristian Robles" — nombre preferido)
- [x] Email roblescristian78@gmail.com
- [x] Phone config 944759657 (NUEVO) — pero ver regresión #8
- [x] CMP 70451, RNE 41493 correctos
- [x] Credenciales y sociedades científicas correctas
- [x] Formation institutions correctas (Rebagliati, Fundación Zambrano, UNMSM, UCV)
- [x] Investigaciones y reconocimientos correctos
- [x] Locations (Rebagliati, Clínica Especialidades, Oftalmos) correctas

## Clean Deploy Checks
- [x] Sin template defaults ("Diego Quispe", "John Doe")
- [x] Sin "Lorem ipsum" / placeholders
- [x] Sin "undefined" / "null" en HTML rendered
- [x] Sin menciones a valores viejos (1074, 680, 1754, 1750, Herbert, Oncoy, Diagnóstico Retinal)

## Premium Quality Gates

### Swap Test
> ¿Si cambio config.ts a otra persona, el site se vería igual estructuralmente?
- **Parcialmente.** El template premium-starter es share-able, pero las secciones específicas (Trayectoria Quirúrgica con chips de tipos de cirugía, Sociedades Científicas, Publicaciones + Reconocimientos, Donde Atiendo) son específicas de oftalmólogo/médico. **PASS para Premium.**

### Screenshot Test
> Viendo el screenshot desktop sin texto, ¿se nota la profesión/industria?
- **PASS.** Paleta azul medical, foto clínica (bata blanca), cards con iconos de ojo/lente/escaneo retinal, pills de sociedades oftalmológicas — claramente sector médico/oftalmología.

### Unique Section Test
> ¿Hay al menos 1 sección única?
- **PASS.** "Trayectoria Quirúrgica" con counters animados + chips de tipos de procedimiento es única para este cliente. "Donde Atiendo" con logos institucionales también.

### Design Proposal Match
- [x] Paleta azul monocromática consistente con la aprobada
- [x] Fonts serif/sans combo
- [x] Sección order: Hero → Subespecialidades → Trayectoria → Formación → Investigación → Donde Atiendo → Contacto

---

## Issues Found

### CRITICAL (bloquean entrega)
1. **Phone number regresión en CTA section display text** — `ContactCTA.astro:53` tiene `+51 987 001 069` hardcodeado. El botón WhatsApp funciona correctamente (usa config), pero el texto visible muestra el número VIEJO. Usuario verá y llamará al número incorrecto. **Fix: reemplazar línea 53 por `{siteConfig.social.phone}`.**

### WARNING (nice to fix, no bloquean)
2. **Counter animations capturadas mid-animation en screenshots** — No es un bug del portfolio, es limitación del script (waitTimeout 800ms vs. counter duration >2000ms). HTML source confirma targets correctos (1500/1000/2500). Para validación definitiva, testear manualmente en navegador real o aumentar waitTimeout en qa-screenshot.js para casos con CountUp animations.

### Informativo
3. **Foto profile.png sigue siendo la "incorrecta"** — Pendiente recibir foto correcta del cliente (flagged en contexto del usuario, excluido de este QA).

---

## Verdict

**FAIL** — Hay 1 regresión crítica que inconsistentiza el número de teléfono entre el display text y el botón WhatsApp. Aunque 7 de 8 cambios quedaron perfectos, el cambio #8 (teléfono) quedó a medias y el texto visible aún muestra el número viejo. Esto debe arreglarse antes de notificar al cliente que los cambios están listos, porque exactamente ese campo es el que el cliente pidió cambiar.

**Acción requerida:**
1. Editar `src/components/ContactCTA.astro:53` — reemplazar `+51 987 001 069` por `{siteConfig.social.phone}`
2. Re-deploy con `./scripts/deploy.sh herbert-robles`
3. Re-run qa-screenshot.js para confirmar fix
4. Luego sí notificar al cliente

---

## Evidence
- `desktop-full.png` (681KB)
- `mobile-full.png` (499KB)
- 16 per-section screenshots (desktop + mobile)
- `manifest.json`
