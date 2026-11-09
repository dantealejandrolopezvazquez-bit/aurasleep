---
name: AuraSleep v2 — Amanecer multiplano
description: Una mañana de la Ciudad de México en planos pintados, de la noche al amanecer, para una almohada que despierta con luz y aroma.
colors:
  lampara: "#E9A23B"
  menta: "#2E7D67"
  menta-clara: "#8FD4BE"
  pino: "#23392F"
  pino-2: "#2F4A3E"
  musgo: "#4D6B5A"
  tinta: "#1C2326"
  tinta-2: "#44515A"
  tinta-clara: "#F4F1E8"
  tinta-clara-2: "#D3DBDD"
  cel-noche: "#26333D"
  umbra: "#24201C"
  bruma: "#C7D3D6"
  niebla: "#D4DDDF"
  manana: "#E3E7E1"
  dia: "#EDF0EA"
  campo: "#FBFCFA"
  error: "#A12A1E"
  ok-fondo: "#DCEEE6"
  ok-tinta: "#1E5444"
  funda-blanco-roto: "#EDE8DF"
  funda-gris-piedra: "#8F8B85"
  funda-beige-calido: "#D8C2A3"
typography:
  display:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.55rem, 5.1vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  cifra:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(4.2rem, 9vw, 7.2rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.05rem, 3.7vw, 3.55rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.2
  lead:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.12rem, 1.4vw, 1.28rem)"
    fontWeight: 400
    lineHeight: 1.62
  body:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "1.18rem"
    fontWeight: 400
    lineHeight: 1.62
  small:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "0.84rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  button:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "1.02rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  campo: "2px"
  cel: "3px"
  riel: "4px"
  punto: "50%"
spacing:
  gutter: "clamp(18px, 4vw, 48px)"
  seccion: "clamp(84px, 11vw, 140px)"
  bloque: "clamp(44px, 5vw, 64px)"
  ancho: "1200px"
  ancho-angosto: "860px"
  barra: "68px"
components:
  tab-primary:
    backgroundColor: "{colors.pino}"
    textColor: "{colors.tinta-clara}"
    typography: "{typography.button}"
    rounded: "{rounded.cel}"
    padding: "0 26px"
    height: "52px"
  tab-primary-hover:
    backgroundColor: "{colors.pino-2}"
  tab-primary-sobre-noche:
    backgroundColor: "{colors.tinta-clara}"
    textColor: "{colors.pino}"
  tab-linea:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    typography: "{typography.button}"
    rounded: "{rounded.cel}"
    padding: "0 26px"
    height: "52px"
  tab-chica:
    padding: "0 18px"
    height: "44px"
  selector:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.cel}"
    padding: "0 16px"
    height: "46px"
  selector-activo:
    backgroundColor: "{colors.pino}"
    textColor: "{colors.tinta-clara}"
  campo:
    backgroundColor: "{colors.campo}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.campo}"
    padding: "0 14px"
    height: "50px"
  fila-aurasleep:
    backgroundColor: "{colors.pino}"
    textColor: "{colors.tinta-clara}"
---

# Design System: AuraSleep v2 — Amanecer multiplano

Alcance: este sistema describe solo el mundo v2 (`v2/`, publicado en /aurasleep/v2/) y el marco `marco-multiplano` del visor 3D; el sitio heredado de la raíz (`index.html`, `css/estilos.css`) es una superficie aparte que sigue en paralelo y no se rige por este archivo.

## Overview

**Creative North Star: "La toma multiplano de una mañana"**

La página es una cámara multiplano que baja por los planos de una fotografía del Iztaccíhuatl y el Popocatépetl antes del amanecer (cielo, volcanes, árboles) mientras un velo de noche se levanta. Cada sección de contenido es una celda de papel mate apoyada sobre esos planos, y el fondo de las celdas avanza en orden de la noche al día: pizarra nocturna, cuarto en umbra, bruma, niebla, mañana y, en los créditos, día pleno. El amanecer no se ilustra: ocurre con el desplazamiento.

El tono es tranquilo, legible desde el fondo de un salón y honesto. Dos serifas sostienen todo (una de cartela para títulos y cifras, otra de libro para leer); no hay sans ni monoespaciada. Los controles son pestañas de celda opacas con un filo encendido en ámbar, nunca vidrio. La única calidez del sistema es la luz de AuraSleep (ámbar lámpara) y el único color frío saturado es el aroma (menta). Todo lo demás sale de la madrugada: pino, musgo, bruma, umbra.

El usuario rechazó el aspecto del primer sitio (azul marino oscuro con naranja, Instrument Sans + DM Mono) como "sin personalidad, muy IA"; ese aspecto es antirreferencia.

**Key Characteristics:**
- Fotografías con licencia libre de Wikimedia Commons (Lanjoe9, CC BY 3.0; Luis Alvaz, CC BY-SA 4.0), acreditadas en la página, como única fuente de imagen de ambiente, cada raster con su archivo de procedencia `.json` al lado.
- Celdas de contenido con grano de papel y fondos que siguen el orden noche → día.
- Young Serif para cartelas y cifras; Literata para todo lo que se lee.
- Un acento cálido (luz) y un acento menta (aroma), con significado fijo.
- Pestañas de celda opacas con filo ámbar; ningún desenfoque de fondo tras controles.
- Movimiento que se congela en una toma fija con `prefers-reduced-motion`.

## Colors

Pigmentos fríos y terrosos sacados de la pintura, con una sola lámpara cálida y un solo verde menta que significan producto.

### Primary
- **Ámbar lámpara** (`lampara`): la luz de AuraSleep. Filo interior de las pestañas, anillo de foco, relleno del deslizador del despertar, fila actual de la hoja de exposición (al 16 %), punto de la luz, selección de texto y fuente citada (`:target`, al 22 %). Nunca como fondo de superficie grande ni como color de texto sobre claro.
- **Pino** (`pino`) y **Pino encendido** (`pino-2`): fondo de la pestaña principal y de su estado hover, selector activo, fila de AuraSleep en la comparativa, enlace "saltar al contenido".

### Secondary
- **Menta** (`menta`) y **Menta clara** (`menta-clara`): el aroma. La clara pinta las ráfagas de aroma y el punto de aroma sobre fondos oscuros o junto al precio del cartucho; la profunda es el `accent-color` de los radios de aroma del formulario.

### Tertiary
- **Colores de funda** (`funda-blanco-roto`, `funda-gris-piedra`, `funda-beige-calido`): fijados por la marca. Solo aparecen en las muestras del selector de funda y en los renders; no son paleta de interfaz.

### Neutral
- **Tinta** (`tinta`): texto principal sobre papel claro, bordes de cajas, filetes gruesos.
- **Tinta segunda** (`tinta-2`): entradillas, párrafos secundarios, etiquetas de grupo, letra chica.
- **Tinta clara** (`tinta-clara`) y **Tinta clara segunda** (`tinta-clara-2`): texto sobre noche, umbra y la primera toma; la clara también es el fondo de la pestaña principal sobre escenas oscuras.
- **Celda de noche** (`cel-noche`): fondo de la sección del problema; ahí `tinta` y `tinta-2` se redefinen a sus versiones claras.
- **Umbra** (`umbra`): el cuarto donde se ilumina la mesa del despertar, marco del visor 3D y pantalla de la presentación.
- **Bruma** (`bruma`), **Niebla** (`niebla`), **Mañana** (`manana`), **Día** (`dia`): fondos de celda en orden de amanecer; `niebla` es también el fondo del `body`, `manana` el de la barra sobre celdas claras y del menú.
- **Musgo** (`musgo`): solo el pulgar de la barra de desplazamiento.
- **Campo** (`campo`): fondo de los campos de texto.
- **Error** (`error`) y **Confirmación** (`ok-fondo` con `ok-tinta`): estados del formulario demostrativo.
- Filete (`--raya`): `rgba(28,35,38,.22)` sobre claro, `rgba(244,241,232,.26)` sobre noche; divisores de tablas y acordeones.

### Named Rules
**The One Lamp Rule.** El ámbar es la luz del producto y nada más: aparece donde algo está encendido, enfocado o en curso. Si un elemento no representa luz, foco o progreso, no lleva ámbar.

**The Mint Is Aroma Rule.** La menta solo aparece donde se habla del aroma (ráfagas, punto de aroma, cartucho, elección de aroma). Nunca como acento decorativo genérico.

**The Dawn Order Rule.** Los fondos de sección avanzan de oscuro a claro en el orden de la página: primera toma y `cel-noche` → `umbra` → `bruma` → `niebla` → `manana` → `dia`. Una sección nueva toma el fondo que le corresponde por su lugar; no se vuelve a la noche después del amanecer.

## Typography

**Display Font:** Young Serif 400 (con Georgia, "Times New Roman", serif), autoalojada en `v2/fonts/`.
**Body Font:** Literata variable 300–800, con itálica 400–500 (con Georgia, "Times New Roman", serif), autoalojada, `font-optical-sizing:auto`.

**Character:** Young Serif es la cartela de cine: un solo peso, redonda y cálida, para títulos y cifras. Literata es la página de libro en el plano más cercano: lectura larga, itálica para pies de pintura y créditos.

### Hierarchy
- **Display** (Young Serif 400, `clamp(2.55rem, 5.1vw, 5.25rem)`, 1.02, máx. 12.5ch): solo el eslogan de la primera toma.
- **Cifra** (Young Serif 400, `clamp(4.2rem, 9vw, 7.2rem)`, 0.95, −0.03em, numerales tabulares): precios; la lectura del minuto del despertar usa la misma voz a `clamp(3rem, 6vw, 5.4rem)`.
- **Headline** (Young Serif 400, `clamp(2.05rem, 3.7vw, 3.55rem)`, 1.06, máx. 20ch, `text-wrap:balance`): títulos de sección.
- **Title** (Young Serif 400, 1.35rem–2rem, 1.12–1.2): sacudidas, públicos, razones, capas, encabezados de fila, preguntas del acordeón.
- **Lead** (Literata 400, `clamp(1.12rem, 1.4vw, 1.28rem)`, máx. 62ch, color `tinta-2` con `strong` 600 en `tinta`): la entradilla bajo cada título.
- **Body** (Literata 400, 1.18rem, 1.62): texto corrido; listas y celdas de tabla entre 1.02 y 1.08rem, máx. 58–68ch.
- **Small** (Literata 400, 0.92rem, 1.5, máx. 64ch): letra chica de honestidad (precios hipotéticos, hipótesis por comprobar).
- **Label** (Literata 600, 0.84rem, 0.08em, mayúsculas): solo encabezados de columna de tabla y nombres de grupo de controles ("Plano", "Funda"). Es rótulo funcional de un control o columna, no antetítulo de sección.

### Named Rules
**The Two Serifs Rule.** Young Serif titula y cuenta; Literata explica. No se agrega una sans ni una monoespaciada (fueron la antirreferencia), y Young Serif nunca baja a texto corrido ni sube de peso.

**The Back Row Rule.** El cuerpo no baja de 1.02rem salvo letra chica y pies; el texto se lee proyectado antes que bonito.

## Layout

Contenedor de 1200px (`ancho`) con medianil fluido (`gutter`, `clamp(18px, 4vw, 48px)`); preguntas usa la envoltura angosta de 860px. Las celdas respiran con `clamp(84px, 11vw, 140px)` arriba y abajo; los bloques dentro de una sección se separan con `clamp(44px, 5vw, 64px)`. La barra fija mide 68px y `scroll-padding-top` es 76px.

La composición es asimétrica y de cámara, no de rejilla de tarjetas: la primera toma pone la cartela a la derecha (máx. 680px) y la almohada en el plano cercano abajo a la izquierda; las tres sacudidas del problema bajan escalonadas (0, 4vw, 8vw) como un paneo; la mesa del despertar es 1.7fr de cuarto contra 1fr de control; el visor es 1.8fr contra 1fr; los públicos ponen al principal en dos filas a la izquierda. Las columnas se apilan en 900px, 860px, 820px y 760px según la sección; en 560px los selectores pasan a rejilla de 2 y 3 columnas. A 360px no hay desplazamiento horizontal (`overflow-x:hidden` en `body`, lienzo de la toma al 300 % recortado).

En celular la primera toma reordena: pintura arriba, velo más denso en la banda del texto, almohada a la derecha abajo, acciones a ancho completo y sin el pie de la pintura.

## Elevation & Depth

La profundidad viene de los planos, no de sombras de interfaz: capas de pintura apiladas que se desplazan a distinto ritmo (`data-vel` 0.5, 0.34, 0.2, 0.06 de cielo a rocas), un velo de noche que se disipa al bajar y un enfoque que desenfoca los planos lejanos cuando aparece el aroma. Las celdas de papel son planas y llevan un grano de ruido SVG en `multiply`. Las sombras solo existen en objetos físicos: la pestaña (que se despega un poco de su celda), el marco del visor, la pantalla de la presentación, el menú desplegado y la almohada recortada.

### Shadow Vocabulary
- **Despegue de pestaña** (`0 2px 0 rgba(28,35,38,.18), 0 8px 18px -10px rgba(28,35,38,.45)`): bajo las pestañas sólidas; las de línea no llevan sombra.
- **Filo encendido** (`inset 0 0 0 3px var(--anillo), inset 0 0 0 4px rgba(233,162,59,.6)`): el filo ámbar dentro de la pestaña sólida.
- **Marco de visor** (`0 18px 36px -18px rgba(28,35,38,.6)`) y **pantalla** (`0 26px 50px -24px rgba(0,0,0,.6)`): marcos gruesos de umbra (12px y 10px).
- **Menú** (`0 14px 30px -14px rgba(28,35,38,.5)`): desplegable de navegación móvil.
- **Almohada** (`drop-shadow(0 24px 30px rgba(10,14,16,.45))`): el producto sobre el plano cercano.

### Named Rules
**The Paper Lies Flat Rule.** Las celdas, tablas, cajas y textos no proyectan sombra; solo lo que en el rodaje sería un objeto (pestaña, marco, pantalla, almohada) se separa del plano.

**The No Glass Rule.** Ningún control ni barra usa `backdrop-filter`. Sobre la pintura, la barra se oscurece con `rgba(20,26,32,.9)` opaco y las pestañas son papel sólido o línea.

## Shapes

Esquinas casi rectas de papel cortado: 3px en pestañas, selectores y menú; 2px en campos de texto; cajas, tablas, marcos y celdas sin radio. Lo redondo queda para lo que es luz o pigmento: puntos de luz y aroma, muestras de funda, pulgar del deslizador (50 %) y su riel (4px). Los filetes hacen la estructura: 1.5px de `tinta` en cajas y controles, 2px arriba de cada sacudida o público (4px en el principal), 1px de `--raya` entre filas. Los chevrones de menú, acordeón y fuentes son bordes CSS girados, no glifos. El marco del visor lleva tres pernos de registro arriba, como la barra de una cámara de animación.

## Components

### Buttons (pestañas de celda)
Pestaña de papel que se toca y cede, con su filo encendido.
- **Shape:** esquinas de papel cortado (3px), borde de 1.5px, alto mínimo 52px (44px en la chica).
- **Primary:** `pino` con texto `tinta-clara`, Literata 600 a 1.02rem, filo interior ámbar y despegue; sobre escenas oscuras (primera toma, visor, pantalla) se invierte a fondo `tinta-clara` con texto `pino` y el filo sigue el color de fondo.
- **Hover / Focus:** hover a `pino-2` (o blanco en la versión invertida); presión `translateY(1px) scale(.985)`; foco con anillo ámbar de 3px a 3px de distancia. Transiciones de .25s con `--curva`.
- **Línea:** transparente con borde y texto del contexto, hover con velo de pino al 8 % (o de tinta clara al 10–12 % sobre oscuro), sin sombra.
- En la barra, mientras flota sobre la pintura o sobre noche, la pestaña pasa a línea clara.

### Selectores (vistas y funda)
- **Style:** fila de botones de 46px con borde de 1.5px de `tinta`, 3px de radio, Literata 500; las fundas llevan su muestra redonda de 22px.
- **State:** el activo de vista se rellena de `pino`; el activo de funda engrosa el borde a 3px y la letra a 700 (la muestra ya es el color). Estado en `aria-pressed`.

### Cards / Containers
- **Corner Style:** sin radio.
- **Background:** el de la celda; el formulario usa `rgba(255,255,255,.35)` sobre `manana`.
- **Shadow Strategy:** ninguna (The Paper Lies Flat Rule).
- **Border:** 1.5px de `tinta`.
- **Internal Padding:** 24–26px en la caja de la ficha; `clamp(22px, 3vw, 34px)` en el formulario.

### Inputs / Fields
- **Style:** 50px de alto, fondo `campo`, borde de 1.5px de `tinta-2`, 2px de radio, Literata 1.05rem; cursor de texto `pino`.
- **Focus:** anillo ámbar de 3px a 1px y borde a `tinta`.
- **Error / Disabled:** borde y mensaje en `error`; confirmación en bloque `ok-fondo` con texto `ok-tinta`. Radios de 20px con acento `menta`.

### Navigation
Marca "AuraSleep" en Young Serif 1.45rem; enlaces Literata 1rem al 86 % de opacidad, subrayados al pasar. La barra es transparente sobre la pintura, se vuelve `rgba(20,26,32,.9)` al desplazarse, `manana` con texto `tinta` sobre celdas claras y vuelve a oscura sobre noche o umbra. Bajo 1080px los enlaces y la pestaña se cambian por un `details` "Menú" con chevrón CSS y un panel `manana` con borde de 1.5px y entradas de 44px.

### Mesa del despertar (signature)
Los mismos tres planos de la foto de madrugada en un cuarto 16:10 de umbra, controlados por un deslizador de −15 a 0 minutos (`--l` de 0 a 1). El cielo se ilumina primero y las rocas al final (factores 1.5, 1.25 y retardado), la almohada pasa de apagada a encendida por opacidad, y al empezar el aroma los planos lejanos se desenfocan (1.4px el cielo, 0.9px los volcanes; los árboles nunca) mientras suben tres ráfagas de menta. Riel de 8px en `#4A4038` rellenado de ámbar, pulgar `tinta-clara` con aro ámbar de 4px. La lectura del minuto va en voz de cifra.

### Hoja de exposición y comparativa
Tablas de filetes sin fondo; encabezados en voz de etiqueta. La fila en curso de la secuencia se tiñe de ámbar al 16 % con punto de luz; la fila de AuraSleep en la comparativa es un bloque `pino` con su nombre en Young Serif 1.45rem. Bajo 860/820px cada fila se vuelve tarjeta con rótulos por celda.

### Marco del visor 3D y pantalla
El visor va en un marco de umbra de 12px (8px en celular) con pernos de registro y cartel previo con la pestaña "Cargar el modelo 3D"; la presentación de Canva va en una pantalla de 10px que muestra un frente de cielo previo al alba hasta que el usuario la carga. Dentro del visor, `body.marco-multiplano` viste las etiquetas como celdas de papel (`rgba(228,233,230,.96)`, `tinta`, 3px, Literata 600 a 12.5px) y evita que se encimen; la geometría no cambia.

## Do's and Don'ts

### Do:
- **Do** usar como imagen de ambiente solo fotografías con licencia libre y crédito visible (CC BY / CC BY-SA), cada `.webp` con su `.webp.json` de procedencia al lado.
- **Do** reservar `lampara` para luz, foco y progreso, y la menta para el aroma.
- **Do** dar a cada sección nueva el fondo que le toca en el orden noche → día (`cel-noche`, `umbra`, `bruma`, `niebla`, `manana`, `dia`).
- **Do** titular en Young Serif 400 y escribir en Literata, con el cuerpo a 1.18rem/1.62 y medidas de 58–68ch.
- **Do** poner la letra chica de cifras hipotéticas en voz `small` junto a cada precio o costo.
- **Do** congelar todo movimiento con `prefers-reduced-motion: reduce`: parallax, velo, ráfagas y acordeón quedan en toma fija.
- **Do** mantener alto táctil de 44px o más en todo control y anillo de foco ámbar de 3px.

### Don't:
- **Don't** volver al aspecto del primer sitio: azul marino oscuro con naranja, Instrument Sans, DM Mono.
- **Don't** usar `backdrop-filter` ni paneles de vidrio en barras, pestañas o tarjetas.
- **Don't** poner sombra a celdas, cajas, tablas o texto de contenido; solo a objetos físicos.
- **Don't** agregar una tercera familia tipográfica ni usar Young Serif en texto corrido.
- **Don't** redondear tarjetas o pestañas más allá de 3px ni usar píldoras para botones.
- **Don't** usar los colores de funda como acentos de interfaz.
- **Don't** usar el ámbar como fondo de superficies grandes o como color de texto sobre papel claro.
