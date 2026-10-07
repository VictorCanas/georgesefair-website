# 🏗️ Guía de Entrega — Sitio Web Dr. Georges Sefair

Documento de handoff para quien continúe manteniendo **georgesefair.com**.
Última actualización: 7 de octubre de 2026.

---

## 1. Qué es este sitio

Sitio web de marca para el ecosistema **Kingdom Builders** del Dr. Georges Sefair.

| | |
|---|---|
| **URL en producción** | https://georgesefair.com (y https://www.georgesefair.com) |
| **Tecnología** | Vite + React 18 + TypeScript + Tailwind CSS |
| **Hosting** | Vercel |
| **Dominio** | Registrado en GoDaddy, DNS apuntando a Vercel |
| **Repositorio** | https://github.com/VictorCanas/georgesefair-website |
| **Idioma del sitio** | Español |

Es un sitio **estático de una sola página (SPA)** con varias rutas. No tiene backend ni base de datos: toda la venta y la comunidad viven en **Circle** y los videos en **Google Drive**. El sitio solo informa y envía al usuario a Circle.

---

## 2. Requisitos previos

- **Node.js 20 o superior** (desarrollado con Node 24). Descargar: https://nodejs.org
- Un editor de código (recomendado **VS Code** o **Cursor**).
- Cuenta de **GitHub** (para el código) y de **Vercel** (para publicar).

---

## 3. Correr el sitio en tu computadora

```bash
# 1. Clonar el repositorio
git clone https://github.com/VictorCanas/georgesefair-website.git
cd georgesefair-website

# 2. Instalar dependencias (solo la primera vez)
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

Abre el enlace que aparece (normalmente **http://localhost:5173**). Cualquier cambio que guardes en el código se refleja al instante en el navegador.

Otros comandos útiles:

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo (vista en vivo) |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la versión de producción localmente |
| `npm run typecheck` | Verifica que no haya errores de TypeScript |
| `npm run lint` | Revisa el estilo del código |

---

## 4. Mapa del proyecto

```
georgesefair-website/
├── index.html              → <head>: título, SEO, tarjeta social (Open Graph)
├── vercel.json             → regla de ruteo SPA (no tocar)
├── public/                 → imágenes y archivos estáticos
│   ├── historia/           → h1.jpg … h12.jpg (collage de la página Dr. George)
│   ├── _AFV3530.JPG        → foto principal del Dr. G
│   ├── og-image.jpg        → tarjeta que se ve al compartir el sitio
│   ├── favicon.svg         → ícono de la pestaña del navegador
│   └── GEORGES_SEFAIR.png  → logo del navbar
└── src/
    ├── config.ts           → ⭐ ENLACES, redes sociales y videos (cambios rápidos)
    ├── App.tsx             → rutas (qué página se ve en cada URL)
    ├── index.css           → colores de marca y animaciones globales
    ├── components/
    │   ├── Navbar.tsx      → barra de navegación superior
    │   ├── Footer.tsx      → pie de página
    │   ├── DriveVideo.tsx  → reproductor de videos de Google Drive
    │   └── ui.tsx          → piezas reutilizables (botón dorado, animación "Reveal", etc.)
    └── pages/
        ├── Inicio.tsx          → "/"               Página principal
        ├── DrGeorge.tsx        → "/dr-george"      Historia del Dr. G
        ├── TheKingdomMethod.tsx→ "/metodo-faos"    Curso Reset Mental / FAOS
        ├── KingdomBuilders.tsx → "/kingdom-builders" Comunidad
        ├── Unirse.tsx          → "/unirse"         Opciones de entrada
        └── Eventos.tsx         → (Build Tour — ver nota en sección 7)
```

---

## 5. Cómo hacer los cambios más comunes

> Regla de oro: casi todos los textos están **directamente dentro de cada archivo de página** (`src/pages/…`). Busca la frase que quieres cambiar con la búsqueda del editor (Cmd/Ctrl + F) y edítala.

### 5.1 Cambiar enlaces, redes sociales o videos → `src/config.ts`

Este es el archivo más importante para cambios rápidos. Todo está centralizado aquí:

```ts
// Enlace de la comunidad en Circle (lo usan TODOS los botones "Unirse" / "Inscribirme")
export const CIRCLE_URL = 'https://builders-community-….circle.so/join?...';

// Redes sociales (pie de página)
export const SOCIAL_LINKS = [
  { label: 'IG', name: 'Instagram', url: 'https://www.instagram.com/drgsefair/' },
  { label: 'FB', name: 'Facebook',  url: 'https://www.facebook.com/drgsefair/' },
  { label: 'YT', name: 'YouTube',   url: 'https://www.youtube.com/@drgsefair' },
];

// Videos testimoniales (IDs de Google Drive)
export const VIDEOS_RESET_MENTAL = ['ID1', 'ID2', …];     // 6 videos del curso
export const VIDEOS_KINGDOM_BUILDERS = ['ID1', 'ID2'];     // 2 videos de la comunidad
```

**Cómo sacar el ID de un video de Google Drive:** el enlace se ve así
`https://drive.google.com/file/d/`**`1aJsW1GE...Z2zDEcQPi`**`/view`
→ el ID es la parte en negrita. Pega solo esa parte en la lista.
⚠️ El video en Drive debe estar compartido como **"Cualquier persona con el enlace"**, si no, no se verá.

### 5.2 Cambiar los precios

- **Curso Reset Mental** → `src/pages/TheKingdomMethod.tsx`. Busca `Por confirmar` (hay 2: Acceso General y Experiencia VIP) y reemplaza por el precio, ej. `$97 USD`.
- **Build Tour** → `src/pages/Eventos.tsx`. Busca `$99 USD` y `$249 USD`.

### 5.3 Cambiar textos (títulos, párrafos)

Abre la página correspondiente en `src/pages/` y edita el texto entre las etiquetas. Ejemplo en `Inicio.tsx`:

```tsx
<h1 …>Construye lo que <span className="gold-gradient-text">permanece.</span></h1>
```

Solo cambia las palabras, no las etiquetas `<…>` ni los `className`.

### 5.4 Cambiar las fotos del collage (página Dr. George)

Las 12 fotos están en `public/historia/` con nombres `h1.jpg` … `h12.jpg`.
Para reemplazar una, pon una foto nueva con **exactamente el mismo nombre** en esa carpeta.
Recomendación: que no pesen más de ~500 KB cada una (puedes reducirlas en https://tinypng.com).

### 5.5 Cambiar los testimonios de texto (Kingdom Builders)

En `src/pages/KingdomBuilders.tsx`, busca `const testimonials = [` y edita el arreglo: cada bloque tiene `text` (el testimonio), `author` (nombre) y `tag` (etiqueta).

### 5.6 Cambiar el título, descripción o la tarjeta social → `index.html`

- El `<title>` y `<meta name="description">` controlan cómo aparece en Google.
- Las etiquetas `og:…` y `twitter:…` controlan la imagen y el texto que se ven al compartir el enlace en WhatsApp, Facebook, etc.
- La imagen de la tarjeta es `public/og-image.jpg` (1200×630 px). Para cambiarla, reemplaza ese archivo manteniendo el nombre.

### 5.7 Colores de marca → `src/index.css` o `tailwind.config.js`

Los colores están definidos como variables al inicio de `src/index.css` (`--color-gold`, `--color-dark-base`, etc.). El dorado principal es `#C9952A`.

---

## 6. Cómo publicar los cambios (deploy)

Hay dos formas. **La opción A es la recomendada** una vez conectado GitHub.

### Opción A — Automático con GitHub (recomendada)

Una vez conectado (ver abajo), **cada vez que subes cambios a la rama `main`, Vercel publica solo**:

```bash
git add .
git commit -m "Describe tu cambio aquí"
git push
```

En ~1 minuto el cambio está en georgesefair.com. Puedes ver el progreso en el panel de Vercel.

#### Cómo conectar GitHub con Vercel (se hace una sola vez, desde el navegador)

Esta conexión **no se puede hacer por terminal**: requiere autorizar la app de Vercel en GitHub, que es un paso de permisos en el navegador. Pasos:

1. Entra a https://vercel.com y abre el proyecto **`georgesefair-website`**.
2. Ve a **Settings → Git**.
3. Clic en **Connect Git Repository** → elige **GitHub**.
4. Si es la primera vez, GitHub pedirá **instalar/autorizar la app "Vercel"**. Al instalarla, da acceso a `VictorCanas/georgesefair-website` (o a "All repositories").
5. Selecciona el repo `VictorCanas/georgesefair-website` y confirma.
6. Listo. Desde ahora, cada `git push` a `main` publica automáticamente. (Además, cada rama o Pull Request genera una "Preview" con su propia URL para revisar antes de publicar.)

> Mientras no esté conectado, usa la **Opción B** para publicar.

### Opción B — Manual con la CLI de Vercel

```bash
# Una sola vez: instalar la CLI y entrar
npm i -g vercel
vercel login

# Cada vez que quieras publicar:
cd georgesefair-website
npm run build        # opcional, para verificar que compila
vercel --prod        # publica a georgesefair.com
```

---

## 7. Pendientes y notas

- [ ] **Precios del curso Reset Mental**: siguen como "Por confirmar" en la página Método FAOS. Reemplazar cuando se definan (ver 5.2).
- [ ] **Checkout real**: hoy todos los botones de compra envían a Circle. Si en el futuro se quiere cobrar con tarjeta directamente, se recomienda crear enlaces de pago en **Stripe** y apuntarlos desde `config.ts`.
- [ ] **Conectar GitHub con Vercel** para deploy automático (ver 6, Opción A).
- [ ] **Página Build Tour** (`src/pages/Eventos.tsx`): está construida y lista, pero **no está enlazada ni en el menú ni en las rutas**. Para activarla, agregar su ruta en `src/App.tsx` y un enlace en `src/components/Navbar.tsx`. Precios actuales: Builder $99 / Platinum $249.
- [ ] **Videos introductorios** (página principal y Reset Mental): aún no se han recibido. Cuando lleguen, se agregan igual que los testimoniales (ver 5.1).

### Herramienta de QA incluida

El proyecto trae una "skill" de Claude Code llamada **`ui-check`** (`.claude/skills/ui-check/`) que revisa todas las páginas en busca de imágenes rotas, textos de relleno, videos faltantes, errores, etc. Si usas Claude Code, escribe `/ui-check` o "revisa la UI" antes de publicar.

---

## 8. Accesos / cuentas necesarias

Para mantener el sitio, quien lo reciba necesitará acceso a:

| Servicio | Para qué | Cómo se comparte |
|---|---|---|
| **GitHub** (repo) | Clonar y editar el código | El repo es **público**: cualquiera puede clonarlo. Para subir cambios directo a `main` se necesita ser colaborador; si no, se contribuye por *fork* + Pull Request. |
| **Vercel** | Publicar el sitio y ver el dominio | Invitar al equipo/proyecto en Vercel |
| **GoDaddy** | Dominio georgesefair.com (DNS) | Compartir acceso de la cuenta GoDaddy |
| **Google Drive** | Videos testimoniales | Que los videos estén en "Cualquiera con el enlace" |
| **Circle** | Comunidad y venta | Administración propia de Circle (no toca el código) |

> Sobre la pregunta de los accesos de la comunidad: el **acceso a Circle (y los correos de bienvenida) se gestionan dentro de Circle**, no desde este sitio web. El sitio solo lleva al usuario al enlace de Circle.

---

## 9. Hacer modificaciones con IA (Claude Code o ChatGPT)

La forma más fácil de seguir editando este sitio **sin saber programar** es usar un asistente de IA que trabaje directamente sobre los archivos del proyecto. Le describes el cambio en español y él lo hace.

### Opción recomendada: Claude Code (lo que se usó para construir este sitio)

**Instalación (una sola vez):**
1. Descarga la app de Claude en https://claude.ai/download (o instala la versión de terminal con `npm i -g @anthropic-ai/claude-code`).
2. Abre Claude Code y ábrele la carpeta del proyecto `georgesefair-website`.

**Para hacer un cambio:**
1. Asegúrate de tener el código actualizado: en la terminal del proyecto corre `git pull`.
2. Escríbele el cambio en lenguaje normal. Ejemplos de prompts que puedes copiar:
   - *"Cambia el precio del curso Reset Mental a $97 USD en el Acceso General y $197 en el VIP."*
   - *"En la página de inicio, cambia el subtítulo del hero a 'Fe aplicada. Resultados reales.'"*
   - *"Reemplaza los 2 videos de Kingdom Builders por estos nuevos enlaces de Google Drive: [pega los enlaces]."*
   - *"Agrega un nuevo testimonio de texto en Kingdom Builders de 'Juan Pérez' que diga: '…'."*
   - *"Corre /ui-check para revisar que todo se vea bien antes de publicar."*
3. Pídele que lo previsualice: *"Muéstrame cómo quedó en el navegador."*
4. Cuando estés conforme, pídele publicar: *"Publica los cambios a producción."* (hará `git push` o `vercel --prod`).

> 💡 Este proyecto ya incluye instrucciones para la IA: el archivo **`.claude/`** trae la skill `ui-check` (revisión visual automática). Solo escribe `/ui-check` o "revisa la UI".

### Alternativa: ChatGPT

ChatGPT funciona, pero es menos directo porque no edita los archivos por sí solo (a menos que uses ChatGPT con acceso a tu computadora / Codex).

Flujo manual con ChatGPT normal:
1. Abre el archivo que quieres cambiar (ej. `src/pages/Inicio.tsx`) y copia su contenido.
2. Pégalo en ChatGPT con una instrucción: *"Este es un componente de React. Cambia [lo que sea] y devuélveme el archivo completo."*
3. Copia la respuesta y pégala de vuelta en el archivo, reemplazando todo.
4. Guarda, revisa con `npm run dev`, y publica (sección 6).

### Reglas de oro al usar IA

- **Siempre haz `git pull` antes de empezar** y `git push` al terminar, para no perder cambios.
- Pídele **un cambio a la vez** y revisa el resultado antes del siguiente.
- Antes de publicar, pídele correr `npm run build` para confirmar que no hay errores.
- Si algo sale mal, siempre se puede volver atrás: *"Revierte el último cambio"* o `git revert`.

---

## 10. Contacto

Proyecto desarrollado inicialmente por Víctor Canas (victor@multigle.com).
Para dudas sobre la estructura del código, revisar primero este documento y los comentarios dentro de `src/config.ts`.
