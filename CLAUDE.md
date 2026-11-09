# AuraSleep — sitio web

Este archivo lo lee Claude Code automáticamente en cada sesión. Contiene el contexto del proyecto y las reglas para construir el sitio.

## Qué es el proyecto

AuraSleep es un proyecto escolar de la materia **Emprendimiento**, actividad "Un objeto cotidiano: la almohada". Es una **almohada inteligente que despierta con luz y aroma en lugar de con ruido**. Tipo de innovación: *innova lo existente* (une fibra óptica textil + microdifusión de aroma dentro de la almohada).

- Eslogan: **"Despierta con luz y aroma, no con ruido."**
- Es un proyecto conceptual: no se vende de verdad. El sitio no debe cobrar ni pedir datos de pago. Un formulario de "preventa / lista de espera" solo es demostrativo.
- Todas las cifras de costos y precios son **hipotéticas**; el sitio debe decirlo en letra pequeña donde aparezcan.

## Objetivo del sitio

Una página de producto/venta (landing) que convenza de la idea, en español (México), con:
1. Hero con el producto y el eslogan.
2. El problema (alarma sonora: despertar abrupto, pico de estrés, despierta a la pareja).
3. La solución: secuencia de 15 minutos (luz → aroma → despertar).
4. El producto: modelo 3D interactivo + 3 vistas (superior, lateral, interna) + 3 colores + ficha técnica.
5. Ventaja competitiva (tabla frente a lámparas de amanecer, despertadores de aroma, almohadas inteligentes).
6. Para quién es (3 capas de público).
7. Precio y modelo de cartuchos (ingresos recurrentes).
8. Preguntas frecuentes, enlaces a Canva y PDF, cierre con llamada a la acción.

Todo el texto está en `docs/contenido.md` y los datos estructurados en `docs/datos.json`. **Usa esos textos; no inventes cifras, fuentes ni testimonios.** No escribas reseñas o testimonios de personas inventadas.

## Identidad visual

Usa el skill `aurasleep-marca` (`.claude/skills/aurasleep-marca/SKILL.md`) para cualquier decisión de diseño. Ese skill separa:

- **Fijo:** colores del producto (Blanco roto `#EDE8DF`, Gris piedra `#8F8B85`, Beige cálido `#D8C2A3`), renders de `public/img/`, concepto **de la noche al amanecer** al hacer scroll, español de México y reglas de honestidad (cifras hipotéticas, sin testimonios ni promesas médicas).
- **Flexible:** tipografía, paleta de interfaz, componentes, movimiento y estilo del tono. Lo que trae es un punto de partida (Young Serif / Manrope / IBM Plex Mono, paleta noche–amanecer). **Se decide con las skills de diseño instaladas** (`impeccable`, `taste-referencias`, `emil-design-eng`, `apple-design`, `animate`, `choreograph`): antes de construir, propón 2–3 direcciones de identidad respaldadas por esas skills, deja que el usuario elija y anota la decisión en `aurasleep-marca`.

## Archivos disponibles

| Carpeta | Qué hay |
| --- | --- |
| `public/img/` | Renders optimizados en WebP listos para la web (ver lista abajo) |
| `assets/originales/` | Los mismos renders en PNG a resolución completa (no subir al sitio tal cual) |
| `modelo-3d/aurasleep-3d.html` | Visor 3D interactivo en WebGL puro (sin librerías), un solo archivo |
| `modelo-3d/shot.py` | Script de Playwright para generar renders fijos desde el visor |
| `docs/contenido.md` | Todos los textos del sitio por sección |
| `docs/datos.json` | Paleta, especificaciones, costos, precios y escenarios en JSON |
| `docs/enlaces.md` | Ligas de Canva y del modelo 3D publicado |
| `docs/AuraSleep_Investigacion.pdf` | Documento de investigación (5 capítulos) para descargar desde el sitio |

Imágenes en `public/img/`:
- `hero_amanecer.webp`, `hero_noche.webp`: almohada en escena con luz encendida / apagada (fondo oscuro).
- `hero_blanco.webp`, `hero_gris.webp`, `hero_beige.webp`, `hero_aroma_nobg.webp`: producto con fondo transparente (selector de color).
- `cut_*.webp`: recortes horizontales transparentes del producto.
- `vista_superior.webp`, `vista_lateral.webp`, `vista_interna.webp`, `vista_perspectiva.webp`: las vistas técnicas con etiquetas.
- `colores.webp`: lámina de los 3 colores.
- `fondo_amanecer.webp`: fondo de portada del PDF (cielo de amanecer).

## Modelo 3D

`modelo-3d/aurasleep-3d.html` es autónomo. Se puede **incrustar con `<iframe>`** o integrar su código. Parámetros por URL:

- `?view=perspectiva|superior|lateral|interna` (o `#superior` en el hash)
- `?color=blanco|gris|beige`
- `?t=-15..0` minuto de la secuencia del despertar (−15 apagado, 0 luz completa)
- `?shot=1` modo captura (oculta la interfaz), `&labels=0` sin etiquetas, `&bg=none` fondo transparente, `&aroma=1` muestra las ráfagas de aroma

Para incrustarlo sin la interfaz propia del visor y controlarlo desde el sitio, usa `?shot=1` y cambia el `src`, o extrae las funciones `go(view)` y el cambio de color. Respeta `prefers-reduced-motion` (sin animación automática).

## Reglas técnicas

- Empieza simple: **HTML + CSS + JS sin framework** (o Vite si hace falta). Que funcione abriendo `index.html` o con `npx serve`.
- Responsive: debe verse bien en celular (360 px) sin scroll horizontal.
- Accesible: textos alternativos en español, contraste AA, navegación con teclado.
- Ligero: usa los `.webp` de `public/img/`, `loading="lazy"` debajo del hero.
- Sin rastreadores ni cookies de terceros.
- Publicación sugerida: GitHub Pages, Netlify o Vercel (sitio estático).
- Antes de decir que algo está terminado, ábrelo en el navegador / toma captura y revísalo.

## Equipo y datos pendientes

Integrantes del equipo (usar tal cual en los créditos):
- Dante Lopez
- Sebastian Saavedra
- Carlos Prol
- Sebastian Lavariega

Correo de contacto: dantealejandrolopezvazquez@gmail.com. Escuela, profesor(a) y grupo **no se muestran** en el sitio (decisión del usuario, 2026-11-08); no los inventes.

Publicación: GitHub Pages desde la rama `main` (https://dantealejandrolopezvazquez-bit.github.io/aurasleep/). Al cambiar `css/estilos.css` o `js/main.js`, sube el número `?v=` con que los carga `index.html`: Pages guarda caché 10 minutos y el navegador usaría la versión vieja. `docs/enlaces.md` está en `.gitignore` porque trae la liga de edición de Canva.

## Sitio v2 ("Amanecer multiplano")

Rediseño en `v2/` (https://dantealejandrolopezvazquez-bit.github.io/aurasleep/v2/), en paralelo al sitio original. Su sistema visual está en `DESIGN.md` y la verdad del producto en `PRODUCT.md`. Los planos del paisaje son pinturas de José María Velasco en dominio público (Wikimedia Commons), acreditadas en el sitio. El visor 3D se incrusta con `#embed&marco=multiplano` (solo cambia escenario y etiquetas).
