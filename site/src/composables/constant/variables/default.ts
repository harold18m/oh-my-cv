import { PREVIEW_SELECTOR } from "./render";
import type { ResumeStyles } from "../../stores/style";

export const DEFAULT_STYLES = {
  marginV: 50,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#000000",
  fontEN: {
    name: "Arial"
  },
  fontSize: 15,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `---
name: Harold Joel Medrano Canchari 
header:
  - text: |
      <span style="font-size: 1.4em; font-weight: bold;">Full-Stack Developer</span>
  - text: <span class="iconify" data-icon="tabler:location"></span> Lima, Perú
    newLine: true
  - text: <span class="iconify" data-icon="tabler:phone"></span> +51 991 835 651
  - text: <span class="iconify" data-icon="tabler:mail"></span> haroldmedrano33@gmail.com
    link: mailto:haroldmedrano33@gmail.com
  - text: <span class="iconify" data-icon="tabler:brand-linkedin"></span> in/haroldmedrano18
    link: https://linkedin.com/in/haroldmedrano18
  - text: <span class="iconify" data-icon="tabler:world"></span> h18m.tech
    link: https://h18m.tech
---

## 
_Desarrollador Full-Stack con experiencia construyendo productos web privados tipo dashboard, desde arquitectura y backend hasta frontend y despliegue en producción. He trabajado en sistemas con autenticación, roles/permisos, métricas y reporting, enfocados en uso interno real, seguridad y mantenibilidad._

## Experiencia Profesional

**Frontend / AI Developer (Contract)**  
~ **Lima, Perú**  

Cimark Comunicación Corporativa 
~ _Setiembre 2025 – Octubre 2025_

- Desarrollo de interfaces web privadas conectadas a sistemas empresariales.
- Integración frontend–backend con pipelines de datos asincrónicos (RAG).
- Implementación de autenticación y control de acceso para usuarios internos.
- Optimización de performance y reducción de latencia percibida (~25%).
- Participación en despliegues en entornos Linux y AWS Serverless.

**Frontend & Full-Stack Developer Junior**  
~ **Lima, Perú**  

MyWorkin
~ _Mayo 2025 – Agosto 2025_

- Construcción de dashboards internos para visualización de métricas y reporting.
- Desarrollo de frontend con React, Next.js y TypeScript.
- Integración de APIs y lógica de negocio en backend (Python / Node.js).
- Implementación de flujos de estado complejos orientados a producto data-driven.
- Mejora de UX para usuarios no técnicos.

**Frontend / Full-Stack Developer Junior**  
~ **Lima, Perú**  

Cimark Comunicación Corporativa
~ _Junio 2024 – Abril 2025_

- Desarrollo y mantenimiento de productos web privados para uso empresarial.
- Implementación de autenticación, roles y permisos.
- Trabajo end-to-end: frontend, backend, base de datos y despliegue.
- Optimización de consultas y modelos de datos en PostgreSQL.
- Colaboración directa con stakeholders no técnicos.

## Proyectos Relevantes

**ERP MULTILIMP SAC — Dashboard privado / Sistema interno**

- Sistema web privado para gestión de ventas, inventario, proveedores y reportes.
- Autenticación con roles y permisos por área.
- Dashboards de métricas operativas y financieras.
- Desarrollo full-stack end-to-end (React + TypeScript / Node.js – Express / PostgreSQL).
- Despliegue en producción y uso real por usuarios internos.

## Educación

**Diseño y Desarrollo de Software**  
~ **Lima, Perú**

TECSUP  
~ _Marzo 2022 – Diciembre 2024_

- Egresado en el Quinto Superior.


## Habilidades Técnicas

**Frontend:** React, Next.js, TypeScript  
**Backend:** Node.js, Express, FastAPI  
**Bases de datos:** PostgreSQL, Prisma  
**Infra & Deploy:** Docker, AWS, Vercel, Render  
**Producto:** Dashboards, métricas, reporting, APIs de terceros  

## Idiomas
- Español: nativo  
- Inglés: intermedio (B1)
`;

export const DEFAULT_CSS_CONTENT = `/* Backbone CSS for Resume Template 1 */

/* Basic */

${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: white;
  color: black;
  text-align: justify;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

/* Headings */

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  font-weight: bold;
}

${PREVIEW_SELECTOR} h1 {
  font-size: 2.13em;
}

${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  margin-bottom: 5px;
  font-size: 1.2em;
}

${PREVIEW_SELECTOR} h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 2em;
  margin: 0.5em 0;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: disc;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

/* Definition Lists */

${PREVIEW_SELECTOR} dl {
  display: flex;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 8px;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Citations */

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definitions"] {
  padding-left: 1.2em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"] p {
  margin-left: 0.5em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"]::marker {
  content: attr(data-label);
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="reference"] {
  font-size: 100%;
  top: 0;
}

/* Dark & print mode */
/* You might want to comment out the following lines if you change the background or text color. */

.dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: hsl(213, 12%, 15%);
  color: hsl(216, 12%, 84%);
}

@media print {
  .dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
    background-color: white;
    color: black;
  }
}
`;
