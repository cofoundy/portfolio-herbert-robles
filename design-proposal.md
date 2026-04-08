# Propuesta de Diseno: Herbert Cristian Robles Oncoy

## Identidad
Herbert es un cirujano oftalmologico subespecializado en retina y vitreo con formacion internacional (Argentina) y un record quirurgico impresionante: mas de 1,750 cirugias oculares. No es un oftalmologo general — es un cirujano de retina que opera en el hospital mas grande del Peru (Rebagliati) y en dos clinicas privadas. Su audiencia son pacientes que necesitan confiar en que sus ojos estan en las mejores manos.

## Audiencia
- **Pacientes potenciales:** Personas con problemas de retina (desprendimiento, degeneracion macular, retinopatia) que buscan un especialista confiable. Necesitan ver credenciales, experiencia, y donde atenderse.
- **Colegas medicos:** Oftalmologos generales que refieren pacientes a subespecialistas. Necesitan ver formacion, sociedades, y publicaciones.
- **Instituciones:** Hospitales y clinicas buscando staff de retina. Credenciales y volumenes quirurgicos.

## Metafora Visual
Precision clinica. El mundo de la retina es microscopico — precision extrema, luz controlada, instrumentos delicados. El portfolio debe sentirse como un quirofano moderno: limpio, ordenado, con cada elemento en su lugar exacto. Azul institucional que transmite confianza y competencia medica.

## Paleta (6 colores) — Monocromatico frio: Medical Blue

| Variable | Hex | Justificacion |
|----------|-----|---------------|
| primaryDark | #0C2D48 | Navy profundo — headers y footer. Autoridad medica, evoca batas quirurgicas y cielos nocturnos de estudio. |
| primary | #1565C0 | Azul institucional — bordes, badges, timeline. Color de confianza medica universal. |
| primaryLight | #42A5F5 | Azul claro — shimmer, highlights. Luminosidad que evoca la luz del quirofano. |
| accent | #0D47A1 | Azul intenso — CTAs, stats, numeros. Pop sutil dentro de la familia azul. |
| surface | #E8F0FE | Azul hielo — secciones alternadas. Limpieza clinica, esterilidad. |
| surfaceLight | #F0F6FF | Casi blanco azulado — hero bg, secciones claras. Bata blanca, luz de consultorio. |

Esquema monocromatico frio puro. Toda la paleta derivada de un solo hue azul (210-220). Sin colores calidos. Contraste WCAG AA verificado: primaryDark (#0C2D48) sobre surfaceLight (#F0F6FF) = 14:1+.

## Tipografia
- **Headings:** DM Serif Display — autoridad medica, peso visual, serif elegante
- **Body:** Source Sans 3 — legibilidad maxima, profesional, moderno sin ser frio
- **Accent/Numbers:** Space Grotesk — numeros quirurgicos, datos precision

## Efecto Visual Unico
**"Surgical Counter"** — Animacion de conteo ascendente (0 a 1750+) para las cifras quirurgicas. Los numeros suben como contadores de sala de operaciones. Visible solo cuando la seccion entra en viewport (Intersection Observer).

## Secciones Propuestas (en orden)

### 1. Hero — "Dr. Herbert Robles"
```
MOBILE (375px):
+----------------------------+
|  [Nav: HR | Menu burger]   |
+----------------------------+
|                            |
|      [Iniciales SVG]       |
|       "HR" en circulo      |
|                            |
|   Dr. Herbert Cristian     |
|      Robles Oncoy          |
|                            |
|  Cirujano de Retina y      |
|       Vitreo               |
|                            |
|  [CMP 70451] [RNE 41493]  |
|                            |
|  [PAAO] [EURETINA] [SARyV]|
|       (badges)             |
|                            |
|   [Agendar Consulta btn]   |
+----------------------------+

DESKTOP (1280px):
+--------------------------------------------------+
|  [Nav: Dr. Herbert Robles  |  Expertise  Trayect  |
|   Formacion  Investigacion  Contacto]             |
+--------------------------------------------------+
|                    |                               |
|   Dr. Herbert C.   |     [SVG Iniciales "HR"      |
|   Robles Oncoy     |      grande, con ring        |
|                    |      azul animado]            |
|   Cirujano de      |                               |
|   Retina y Vitreo  |                               |
|                    |                               |
|  [CMP] [RNE]      |                               |
|  [Sociedades]      |                               |
|                    |                               |
|  [Agendar btn]     |                               |
+--------------------------------------------------+
|  1750+ Cirugias  |  10+ Anos  |  3 Sociedades    |
|                  |  Experiencia|  Internacionales  |
+--------------------------------------------------+
```
Trust bar con stats animados debajo del hero.

### 2. Expertise — "Subespecialidades"
```
MOBILE:
+----------------------------+
| EXPERTISE                  |
+----------------------------+
| [Eye icon]                 |
| Cirugia de Retina          |
| Vitrectomias, desprendimi- |
| ento de retina, membrana   |
| epirretiniana...           |
+----------------------------+
| [Lens icon]                |
| Cirugia de Catarata        |
| Facoemulsificacion,        |
| implante IOL, LIO torica  |
+----------------------------+
| [Scan icon]                |
| Diagnostico Retinal        |
| OCT, angiografia, manejo   |
| de retinopatia del         |
| prematuro...               |
+----------------------------+

DESKTOP: 3 columnas con iconos grandes, hover lift
```
No es "Services" generico — son subespecialidades medicas con terminologia real.

### 3. Trayectoria Quirurgica — "Record Quirurgico" (SECCION UNICA)
```
MOBILE:
+----------------------------+
| TRAYECTORIA QUIRURGICA     |
+----------------------------+
|                            |
|    [Counter animado]       |
|        1,074               |
|   Cirugias de Catarata     |
|                            |
|    [Counter animado]       |
|        680+                |
|   Vitrectomias             |
|                            |
|    [Counter animado]       |
|        1,750+              |
|   Total Cirugias           |
|                            |
| [Barra de progreso visual] |
| HNERM ████████████  60%    |
| F.Zambrano ██████   25%    |
| Clinicas ████      15%     |
+----------------------------+

DESKTOP: 3 counters grandes en fila + barra visual abajo
```
Counters que animan de 0 al numero final cuando entran en viewport. Esta seccion NO existe en ningun otro portfolio.

### 4. Formacion — "Trayectoria Academica"
```
MOBILE:
+----------------------------+
| FORMACION                  |
+----------------------------+
| [Timeline vertical]       |
|                            |
| 2023 ── Actualmente       |
| o  Cirujano Retina-Vitreo |
|    HNERM + 2 clinicas      |
|                            |
| 2022 ── 2023              |
| o  Fellowship Retina       |
|    Fund. Zambrano, ARG     |
|    [Flag ARG]              |
|                            |
| 2021                       |
| o  Especialista Oftalmo.   |
|    UNMSM / HNERM           |
|                            |
| 2015                       |
| o  Medico Cirujano         |
|    Univ. Cesar Vallejo     |
|    Trujillo                |
+----------------------------+
```
Timeline vertical con puntos y linea. Journey geografico implicito: Trujillo > Lima > Buenos Aires > Lima.

### 5. Investigacion & Reconocimientos
```
MOBILE:
+----------------------------+
| INVESTIGACION              |
+----------------------------+
| [Card]                     |
| WOC 2020                   |
| E-Poster 495-PO            |
| Epidemiology of ROP        |
| [Badge: Internacional]     |
+----------------------------+
| [Card]                     |
| ARVO 2020                  |
| Poster 4605-B0411          |
| ROPIS System               |
| [Badge: Internacional]     |
+----------------------------+
| RECONOCIMIENTOS            |
| + Ponencia CAO Argentina   |
| + Ponencia EsSalud         |
| + Felicitacion HNERM       |
+----------------------------+
```

### 6. Sociedades — "Afiliaciones Internacionales"
```
MOBILE:
+----------------------------+
| SOCIEDADES                 |
+----------------------------+
| [Logo/Badge] PAAO          |
| Asoc. Panamericana         |
| ID: 68424                  |
+----------------------------+
| [Logo/Badge] EURETINA      |
| European Society           |
| ID: 4447                   |
+----------------------------+
| [Logo/Badge] SARyV         |
| Soc. Argentina Retina      |
+----------------------------+
```
Badges/pills con los logos de las sociedades. Tres columnas en desktop.

### 7. Donde Atiendo — "Consulta" (SECCION ORIENTADA A PACIENTES)
```
MOBILE:
+----------------------------+
| DONDE ATIENDO              |
+----------------------------+
| [Card hospital]            |
| Hospital Rebagliati        |
| EsSalud - Unidad Retina    |
| Jesus Maria, Lima          |
+----------------------------+
| [Card clinica]             |
| Clinica de Espec.          |
| Oftalmologicas             |
| Lima                       |
+----------------------------+
| [Card clinica]             |
| Clinica Oftalmos SAC       |
| Lima                       |
+----------------------------+
```

### 8. Contacto/CTA — "Agendar Consulta"
```
MOBILE:
+----------------------------+
| AGENDAR CONSULTA           |
|                            |
| Confie su vision en manos  |
| especializadas             |
|                            |
| [WhatsApp btn]             |
| [Email btn]                |
|                            |
| +51 987 001 069            |
| roblescristian78@gmail.com |
+----------------------------+
```

### 9. Footer
```
| Dr. Herbert Robles         |
| CMP 70451 | RNE 41493      |
| [LinkedIn] [Facebook]      |
| [Instagram] [Email]        |
```

## Secciones que NO incluir
- **Skills pills genericos:** Un cirujano de retina no necesita "pills" de habilidades blandas. Las cirugias hablan por si solas.
- **Projects grid:** No es desarrollador. Sus "proyectos" son cirugias y publicaciones.
- **Education generico con cards:** Se integra en la timeline de Formacion.
- **About generico 3-col:** Su identidad se comunica mejor via las secciones especializadas.
- **Blog:** No tiene contenido de blog.

## Decisiones de Motion
- Counters animados en "Trayectoria Quirurgica" (efecto unico)
- Scroll reveal sutil en todas las secciones (opacity + translateY)
- Timeline draw animation para Formacion
- Card hover lift en Expertise y Donde Atiendo
- Stats bar en hero con fade-in stagger
- prefers-reduced-motion: solo opacity transitions
