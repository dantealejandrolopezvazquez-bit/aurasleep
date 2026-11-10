---
name: AuraSleep v2 — Línea del despertar
description: El despertar es una línea con estaciones; la línea de luz y la de aroma se unen en la correspondencia AuraSleep.
colors:
  grafito: "#17191B"
  grafito-2: "#22262A"
  grafito-3: "#2E3338"
  esmalte: "#F2F3EF"
  esmalte-2: "#E5E8E2"
  blanco: "#FBFBF8"
  tinta: "#17191B"
  tinta-2: "#4A5157"
  tinta-clara: "#F2F3EF"
  tinta-clara-2: "#B8BEC3"
  tinta-2-tunel: "#C3C8CC"
  lampara: "#E9A23B"
  luz-tinta: "#8F5300"
  luz-clara: "#F4BC62"
  menta: "#3FB28F"
  aroma-tinta: "#17735A"
  menta-clara: "#8FD8C0"
  error: "#A12A1E"
  ok-fondo: "#DCEFE7"
  ok-tinta: "#155A47"
  funda-blanco-roto: "#EDE8DF"
  funda-gris-piedra: "#8F8B85"
  funda-beige-calido: "#D8C2A3"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5.6vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 4.4vw, 4.1rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0em"
  cifra:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(5rem, 11vw, 8.6rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  estacion:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
    fontFeature: "tnum"
  lead:
    fontFamily: "Overpass, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.12rem, 1.4vw, 1.26rem)"
    fontWeight: 400
    lineHeight: 1.62
  body:
    fontFamily: "Overpass, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.62
  small:
    fontFamily: "Overpass, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  button:
    fontFamily: "Overpass, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  control: "6px"
  cel: "10px"
  linea: "99px"
  punto: "50%"
spacing:
  grosor: "clamp(9px, 0.9vw, 12px)"
  gutter: "clamp(18px, 4vw, 48px)"
  seccion: "clamp(88px, 11vw, 144px)"
  bloque: "clamp(44px, 5vw, 64px)"
  ancho: "1200px"
  ancho-preguntas: "860px"
  barra: "68px"
components:
  placa:
    backgroundColor: "{colors.grafito}"
    textColor: "{colors.tinta-clara}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  placa-hover:
    backgroundColor: "{colors.grafito-3}"
  placa-linea:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  placa-linea-hover:
    backgroundColor: "{colors.grafito}"
    textColor: "{colors.tinta-clara}"
  placa-chica:
    padding: "0 18px"
    height: "44px"
  placa-sobre-grafito:
    backgroundColor: "{colors.esmalte}"
    textColor: "{colors.grafito}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  placa-sobre-grafito-hover:
    backgroundColor: "#FFFFFF"
  selector:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "46px"
  selector-activo:
    backgroundColor: "{colors.grafito}"
    textColor: "{colors.tinta-clara}"
  muestra-funda:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "60px"
  campo:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "50px"
  rotulo-trasbordo:
    backgroundColor: "{colors.grafito}"
    textColor: "{colors.tinta-clara}"
    typography: "{typography.estacion}"
    rounded: "{rounded.control}"
    padding: "6px 12px 4px"
  placa-union:
    backgroundColor: "{colors.esmalte}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.cel}"
    padding: "12px 16px 10px"
  fila-aurasleep:
    backgroundColor: "{colors.grafito}"
    textColor: "{colors.tinta-clara}"
---

# Design System: AuraSleep v2 — Línea del despertar

Alcance: este sistema describe solo el mundo v2 (`v2/`, publicado en /aurasleep/v2/; rediseño en la rama `v2-dinamico`). El sitio heredado de la raíz (`index.html`, `css/estilos.css`) es una superficie aparte y no se rige por este archivo. El mundo anterior, "Amanecer multiplano", quedó retirado y vive en el historial de git.

## Overview

**Creative North Star: "La línea del despertar"**

El despertar es una línea de transporte con cuatro estaciones (−15, −10, −5 y la hora). La línea de luz (ámbar) entra por la izquierda, la línea de aroma (menta) entra por la derecha y sube en diagonal, y las dos se unen en la correspondencia AuraSleep, que es donde se para la almohada. La página es la señalética de esa línea: placas de esmalte claro y tramos de túnel de grafito, con un riel al margen que tiene una estación por sección y que se enciende cuando llegas a su título, hasta terminar en un anillo terminal junto al nombre de los créditos.

El tono es de señalética pública: claro, condensado, legible desde el fondo de un salón y sin adorno. Fuera de las dos líneas hay tres valores (grafito, esmalte y su tinta). La luz y el aroma son los únicos colores, y cada uno significa una sola cosa. Los títulos, los nombres de estación y las cifras van en Barlow Condensed 700. Todo lo que se lee va en Overpass. Los pictogramas son originales y de un solo trazo (luz, aroma, alarma, trasbordo). No hay logotipos, nombres ni pictogramas de ningún sistema de transporte real.

El mundo rechaza dos plantillas: la foto oscura y cinematográfica del producto con un eslogan serif gigante, y la plantilla crema de bienestar. Sigue siendo antirreferencia el primer sitio (azul marino oscuro con naranja, Instrument Sans + DM Mono), que el usuario calificó de "sin personalidad, muy IA".

**Key Characteristics:**
- Diagrama de línea en la portada: tramo ámbar con estaciones −15/−10/−5, tramo menta que sube en diagonal y anillo de correspondencia bajo la almohada.
- Riel al margen con una estación anillada por sección, que se enciende en ámbar al llegar y acaba en una terminal junto al título de los créditos.
- Placas de esmalte y túneles de grafito que se alternan; no hay degradados de fondo.
- Dos colores de línea con significado fijo y un solo grosor de línea (`grosor`).
- Barlow Condensed 700 para letreros y cifras, Overpass para leer.
- Pictogramas SVG de un solo trazo, definidos como `<symbol>` en `index.html` y del color de su línea.
- El producto aparece siempre con sus propios renders. Los colores de funda solo aparecen en las fundas.

## Colors

Un túnel de grafito y placas de esmalte casi neutros, cruzados por dos líneas de color: ámbar para la luz y menta para el aroma.

### Primary
- **Ámbar lámpara** (`lampara`): la línea de luz. Se usa en el tramo de luz de la portada, el riel lateral y sus estaciones encendidas, el tramo recorrido del deslizador y su tren, las estaciones pasadas de la secuencia (la estación detenida va llena), la mitad de luz de la barra de avance, el punto y el subrayado de la sección actual en la barra, el rótulo "Con AuraSleep" del lado iluminado del comparador, el anillo de foco y la selección de texto. Sobre esmalte nunca se usa como color de texto.
- **Luz sobre esmalte** (`luz-tinta`): la palabra "luz" del eslogan y los pictogramas de luz sobre fondo claro (AA).
- **Luz sobre grafito** (`luz-clara`): las cifras de luz en el túnel, el minuto de la estación detenida y los pictogramas de luz sobre grafito.

### Secondary
- **Menta** (`menta`): la línea de aroma. Se usa en el tramo y el codo de aroma de la portada, la placa de aroma de la unión y su línea, la lectura de aroma de la evidencia y la parte final de la barra de avance.
- **Aroma sobre esmalte** (`aroma-tinta`): la palabra "aroma" del eslogan, la cifra del cartucho, los pictogramas de aroma sobre claro y el `accent-color` de los radios para elegir aroma.
- **Aroma sobre grafito** (`menta-clara`): las cifras y los pictogramas de aroma en el túnel, y las ráfagas que salen del difusor en los renders.

### Tertiary
- **Colores de funda** (`funda-blanco-roto`, `funda-gris-piedra`, `funda-beige-calido`): los fija la marca. Solo aparecen en las muestras del selector de funda, en los selectores del visor 3D y en los renders. No son paleta de interfaz.

### Neutral
- **Grafito** (`grafito`): el túnel. Fondo de la barra, de "Cómo funciona", de la presentación y de los créditos. También es el fondo de las placas principales, del selector activo, de la fila AuraSleep, del rótulo de correspondencia y del anillo de trasbordo.
- **Grafito segundo** (`grafito-2`): el túnel de "El problema" y el fondo de la pantalla de la presentación y del marco del visor.
- **Grafito tercero** (`grafito-3`): el tramo de línea que todavía no se recorre, los anillos de estación apagados, el hover de la placa principal y el filo de la pantalla.
- **Esmalte** (`esmalte`) y **Esmalte segundo** (`esmalte-2`): las placas. El primero es el fondo de la portada, del producto, de la ventaja, de "para quién" y de las preguntas, y el relleno de los anillos de estación. El segundo es el fondo de colores, precio y lista de espera, y el hover de los selectores.
- **Blanco de placa** (`blanco`): caja de la ficha, formulario, campos y muestras de funda.
- **Tinta** (`tinta`) y **Tinta segunda** (`tinta-2`): el texto principal sobre esmalte, y las entradillas, la letra chica y los rótulos de grupo.
- **Tinta clara** (`tinta-clara`), **Tinta clara segunda** (`tinta-clara-2`) y **Tinta segunda del túnel** (`tinta-2-tunel`): el texto sobre grafito. En las secciones de túnel, `--tinta` y `--tinta-2` se redefinen como `tinta-clara` y `tinta-2-tunel`.
- Filete (`--raya`): `rgba(23,25,27,.18)` sobre esmalte y `rgba(242,243,239,.2)` sobre grafito, para separar filas de tablas y acordeones.
- **Error** (`error`) y **Confirmación** (`ok-fondo` con `ok-tinta`): los estados del formulario demostrativo. Son colores de estado, no de aroma.

### Named Rules
**The Amber Is Light Rule.** El ámbar significa luz y lo que se enciende: la línea de luz, las estaciones encendidas, el progreso, el foco y la selección. Las placas de acción general van en grafito sobre esmalte o en esmalte sobre grafito, nunca en ámbar.

**The Mint Is Aroma Rule.** La menta solo aparece donde se habla del aroma: la línea, las ráfagas, el cartucho y la elección de aroma. Nunca se usa como acento decorativo ni como color de estado.

**The Three Values Rule.** Todo lo que no es una línea es grafito, esmalte o su tinta, con sus segundos tonos. Si un elemento nuevo necesita otro color, ese elemento está mal planteado.

## Typography

**Display Font:** Barlow Condensed 700 (con "Arial Narrow", system-ui, sans-serif), autoalojada en `v2/fonts/` (también hay archivos de 500 y 600).
**Body Font:** Overpass variable 400–800, con itálica 400 (con system-ui, -apple-system, "Segoe UI", sans-serif), autoalojada.

**Character:** Barlow Condensed es el letrero de la estación: angosta, firme y en mayúsculas cuando nombra algo. Overpass, que también nació de la señalética vial, es la placa explicativa: abierta y legible proyectada.

### Hierarchy
- **Display** (Barlow Condensed 700, `clamp(3rem, 5.6vw, 5.6rem)`, 0.9, mayúsculas, tres renglones): solo el eslogan de la portada. "luz" va en `luz-tinta` y "aroma" en `aroma-tinta`. El título de los créditos usa la misma voz a `clamp(3.4rem, 8vw, 6rem)`.
- **Headline** (Barlow Condensed 700, `clamp(2.3rem, 4.4vw, 4.1rem)`, 0.98, máx. 18ch, `text-wrap:balance`, sin mayúsculas forzadas): los títulos de sección. Cada uno es una estación del riel.
- **Title** (Barlow Condensed 700, 1.6–2.3rem, 1.02–1.1): sacudidas, públicos (el principal a `clamp(2.2rem, 3.6vw, 3.2rem)`), capas, razones, el encabezado de la ficha y las cajas.
- **Cifra** (Barlow Condensed 700, `clamp(5rem, 11vw, 8.6rem)`, 0.86, numerales tabulares): el precio. Las lecturas de evidencia van a `clamp(4.4rem, 8vw, 7rem)`, el minuto del despertar a `clamp(3rem, 6vw, 5.6rem)` y las cifras del producto a `clamp(2.4rem, 4vw, 3.6rem)`. Las unidades bajan a Overpass 600.
- **Estación** (Barlow Condensed 700, `clamp(1.3rem, 2vw, 1.9rem)`, tabular): los minutos y nombres de las estaciones de la portada y de la secuencia (1.6rem). El rótulo de correspondencia y las placas de la unión van en mayúsculas con 0.04em.
- **Lead** (Overpass 400, `clamp(1.12rem, 1.4vw, 1.26rem)`, máx. 62ch, `tinta-2` con `strong` 700 en `tinta`): la entradilla bajo cada título.
- **Body** (Overpass 400, 1.12rem, 1.62): el texto corrido. Listas y celdas van de 1.02 a 1.08rem, con medidas de 58 a 66ch.
- **Small** (Overpass 400, 0.92rem, 1.5, máx. 64ch): la letra chica de honestidad (precios hipotéticos, datos del fabricante).
- **Label** (Barlow Condensed 700, 0.95rem, 0.1em, mayúsculas): solo para encabezados de columna, nombres de grupo de controles ("Plano", "Funda"), los nombres de cargo en los créditos y los rótulos del comparador. Siempre nombra un control, una columna o un dato que está al lado.
- **Button** (Overpass 700, 1.02rem, 0.01em): el texto de las placas (0.95rem en la chica). Las preguntas del acordeón van en Overpass 700 a `clamp(1.1rem, 1.5vw, 1.28rem)`.

### Named Rules
**The Signage Voice Rule.** Barlow Condensed nombra (títulos, estaciones, cifras, rótulos) y Overpass explica. Barlow nunca se usa en párrafos, y no se agrega una tercera familia.

**The No Kicker Rule.** Ningún título lleva antetítulo, numeración decorativa ni etiqueta en mayúsculas encima. La estación del riel ya cumple esa función. La voz de etiqueta queda solo para controles, columnas y cargos.

**The Back Row Rule.** El cuerpo va a 1.12rem y el texto secundario no baja de 0.92rem, salvo los rótulos dentro de una tarjeta en celular. El texto se lee proyectado antes que bonito.

## Layout

Contenedor de 1200px (`ancho`) con medianil fluido (`gutter`). Las secciones respiran con `seccion` arriba y abajo, y los bloques internos se separan con `bloque`. La barra fija mide 68px y `scroll-padding-top` es 76px. Las preguntas usan el ancho completo para quedar en el riel, con el acordeón limitado a 860px.

El riel al margen solo aparece a partir de 1000px. Corre a 30px a la izquierda del borde del contenido (`--riel`), con una estación anillada de 28px junto a cada `h2` y un tramo del grosor de línea por sección. En los créditos baja hasta la terminal, un anillo junto al título "AuraSleep". Debajo de 1000px el riel desaparece y la terminal queda como un anillo ámbar sobre el título.

La composición es asimétrica y sigue la línea, no una rejilla de tarjetas. En la portada, el eslogan queda arriba a la izquierda (máx. 660px o 56 %). La almohada se centra sobre el trasbordo (`--t`, 68 %) y la ruta corre a lo ancho por la franja inferior. Las tres sacudidas del problema bajan escalonadas (0, 4vw, 8vw). En la mesa del despertar, el cuarto ocupa 1.55fr y el control 1fr. Los públicos ponen al principal en dos filas. Los precios van a 1.3fr contra 1fr. Las columnas se apilan entre 900px y 760px según la sección. A 900px la portada se reordena (texto, almohada y luego ruta) y oculta la estación −10. A 560px oculta la estación de aroma y los selectores pasan a rejilla. A 360px no hay desplazamiento horizontal.

### Named Rules
**The One Station Per Section Rule.** Cada sección de `main` con título es una estación del riel y tiene exactamente una. Una sección nueva hereda su estación y no agrega marcadores propios.

## Elevation & Depth

El sistema es plano. La profundidad viene de alternar placa de esmalte y túnel de grafito, no de levantar superficies. Las placas, tablas, cajas, lecturas y el formulario no tienen sombra. Las sombras quedan para lo que es objeto o fotografía: la almohada recortada, los cuadros con render dentro del túnel y el menú desplegado. La luz del producto puede brillar sobre su propio render (halo de la cinta, brillo de la mesa), porque es la luz que se demuestra y no un efecto de interfaz.

### Shadow Vocabulary
- **Almohada** (`filter: drop-shadow(0 26px 26px rgba(23,25,27,.28))`): el render de la portada sobre el esmalte.
- **Cuadro en el túnel** (`box-shadow: 0 30px 60px -30px rgba(0,0,0,.8)`): el cuarto de la secuencia y el comparador.
- **Menú** (`box-shadow: 0 18px 34px -18px rgba(23,25,27,.6)`): el panel del menú móvil.
- **Filo de pantalla** (`box-shadow: 0 0 0 2px var(--grafito-3)`): un filete sólido alrededor de la pantalla de la presentación. No es un resplandor.

### Named Rules
**The Flat Enamel Rule.** Una placa de esmalte nunca se levanta. Si algo necesita separarse, lleva un filete o cambia de valor (esmalte, esmalte segundo o blanco).

**The No Glass Rule.** Ningún control, barra ni panel usa `backdrop-filter`. La barra es grafito opaco.

**The No Halo Rule.** No se usan resplandores sin desplazamiento (`0 0 Npx`) en controles, cuadros ni texto. El único brillo es la luz del producto pintada sobre su render.

## Shapes

Hay dos esquinas: 6px (`control`) para placas, selectores, campos, rótulos, la pista y la placa del menú, y 10px (`cel`) para cuadros, la caja, el formulario, la pantalla, el visor, las placas de la unión y las filas de la comparativa en celular. Los tramos de línea terminan en punta redonda (`linea`, 99px). Lo redondo (`punto`) queda para estaciones, anillos y muestras de funda.

La línea tiene un solo grosor (`grosor`, de 9 a 12px). Las estaciones son anillos: 26–28px con aro de 6px, en `esmalte` o en el fondo de su sección. Las marcas del deslizador miden 20px con aro de 5px. El trasbordo es un anillo de 52–58px con aro de grafito de 10–11px. El tren del deslizador es un punto ámbar de 30px con aro de grafito de 7px. Los filetes estructurales son de grafito: 3px sobre sacudidas, públicos, precios, cifras y el acordeón, 6px sobre el público principal, 2px en cajas y controles, y 1px de `--raya` entre filas. Los chevrones del menú, del acordeón, de las fuentes y de los enlaces son bordes CSS girados. Los pictogramas son SVG de un solo trazo (`stroke-width:2.2`, puntas redondas) que toman el color de su línea.

### Named Rules
**The One Line Weight Rule.** Todo tramo de línea (portada, riel, secuencia, deslizador, unión, lecturas) usa `grosor`. Solo la barra de avance (3px) y el subrayado de la barra (2px) son más delgados, porque son indicadores de la barra y no la línea.

## Components

### Buttons (placas)
Placa de señalética: sólida, firme, sin brillo.
- **Shape:** esquinas de 6px, borde de 2px, alto mínimo de 52px (44px en la chica).
- **Primary:** fondo grafito con texto `tinta-clara` sobre esmalte. Sobre grafito (barra, visor, pantalla) se invierte a fondo esmalte con texto grafito.
- **Hover / Focus:** hover a `grafito-3` (o a blanco puro en la invertida). Con puntero fino sube 2px. La presión es `scale(.98)`. El foco es un anillo ámbar de 3px a 3px de distancia. Las transiciones duran de .16 a .25s con `--ease-out`.
- **Línea:** transparente, con borde y texto del contexto. Al pasar se rellena de grafito (o de `tinta-clara` sobre túnel).

### Selectores (vistas y funda)
- **Style:** botones de 46px con borde de grafito de 2px, 6px de radio y Overpass 600. Las fundas llevan su muestra redonda de 22px.
- **State:** la vista activa se rellena de grafito. La funda activa suma un filo interior de grafito de 2px y letra 800. El estado va en `aria-pressed`.

### Muestras de funda (selector vivo)
Filas de 60px sobre `blanco` con borde `--raya` de 2px y muestra de 30px. La activa pasa a borde grafito y su muestra crece al 115 % con doble aro. El nombre de la funda va en Barlow 700 en mayúsculas. El render cambia con un fundido lateral de 24px.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** `blanco` (caja de la ficha, formulario). La evidencia no usa tarjetas: son lecturas sobre su línea.
- **Shadow Strategy:** ninguna (The Flat Enamel Rule).
- **Border:** 2px de grafito.
- **Internal Padding:** 24–26px en la caja y `clamp(22px, 3vw, 34px)` en el formulario.

### Inputs / Fields
- **Style:** 50px de alto, fondo `blanco`, borde de 2px en `tinta-2`, 6px de radio, Overpass 1.05rem, cursor grafito.
- **Focus:** anillo ámbar de 3px a 1px de distancia y borde en `tinta`.
- **Error / Disabled:** borde y mensaje en `error`. La confirmación es un bloque `ok-fondo` con texto `ok-tinta` y una palomita. Los radios de aroma usan `aroma-tinta`.

### Navigation
Es el letrero de la estación: barra grafito de 68px. La marca "AuraSleep" va en Barlow 700 a 1.6rem en mayúsculas, con un anillo de trasbordo que lleva un punto ámbar a la izquierda y uno menta a la derecha. Cada enlace (Overpass 600, `tinta-clara-2`) tiene una estación anillada de 10px. La sección actual se enciende: el punto se rellena de ámbar, aparece un subrayado ámbar de 2px y se marca con `aria-current="location"`. La placa "Lista de espera" va en esmalte. Debajo de la barra corre el avance (ámbar y luego menta). Bajo 1080px, los enlaces se cambian por un `details` "Menú" con un panel de esmalte cuyas entradas de 46px llevan una estación ámbar.

### Diagrama de la portada (signature)
Tramo ámbar desde el borde izquierdo hasta el trasbordo (`--t`) con estaciones −15/−10/−5 (cifra en voz de estación y nombre en Overpass 0.86rem). Tramo menta que entra 46px más abajo desde la derecha, con su estación "Aroma" y un codo de 84px que sube a 33.3° hasta el trasbordo. El anillo de trasbordo lleva debajo el rótulo "AuraSleep" (en mayúsculas) en placa grafito, y la almohada se para encima.

### Secuencia de 15 minutos (signature)
Cuarto con los renders de noche y amanecer (1800:1127). La luz (`--l`, de 0 a 1) cruza los renders con un fundido y calienta el fondo. El deslizador es un tramo de línea con cuatro marcas de estación, relleno ámbar hasta el tren. Abajo están los cuatro pasos como estaciones sobre un tramo vertical: apagadas (aro `grafito-3`) hasta que llegas, pasadas con aro ámbar, y la estación detenida llena de ámbar, con su minuto en `luz-clara` y un velo ámbar al 10 %. Solo hay una estación detenida a la vez. Cada paso lleva los pictogramas de luz y de aroma, y el de aroma va atenuado en −15.

### Comparativa y unión
Tabla de filetes con encabezados en voz de etiqueta. Cada competidor va con el pictograma de su línea (luz, aroma o ninguno para las almohadas inteligentes). La fila AuraSleep es un bloque grafito con el pictograma de trasbordo y su nombre en Barlow 700 a 1.9rem, en mayúsculas. Arriba, en la unión, la línea ámbar llega desde la izquierda y la menta desde la derecha hasta un anillo de trasbordo central con el rótulo "AuraSleep". Las placas "Luz" y "Aroma" son de esmalte, con aro interior de 4px del color de su línea.

### Lecturas de evidencia
Cada cifra de la investigación va sobre un tramo de su línea, con una estación anillada al inicio. La cifra va en `luz-clara` o `menta-clara`, en columna de 15rem, y el texto en Overpass al lado. No son tarjetas.

### Visor 3D y pantalla
El visor y la pantalla de Canva van en cuadros de 10px sobre `grafito-2`, sin marco grueso. La placa de carga va invertida (esmalte sobre grafito). La pantalla muestra un frente grafito con el título en Barlow, en mayúsculas, hasta que el usuario la carga. El visor se incrusta con `#embed&marco=multiplano`, que solo cambia el escenario y las etiquetas. Su geometría no se toca.

## Motion

El movimiento vive en `v2/js/movimiento.js`, en partes de `v2/js/main.js` (secuencia, comparador, selector de funda) y en la capa de movimiento de `v2/css/estilos.css`. Solo se activa con `html.mov`, una clase que pone un script en el `<head>` cuando no hay `prefers-reduced-motion: reduce`. Sin JS o con movimiento reducido, todo se ve completo y quieto.

- **Curvas:** `--curva` (.16,1,.3,1) para entradas largas, `--ease-out` (.23,1,.32,1) para la interfaz y `--ease-io` (.77,0,.175,1) para lo que se traza (líneas, riel, curva del comparador, destellos). La interfaz dura de 160 a 300 ms y las entradas de contenido de 0.8 a 1.6 s.
- **Portada:** el tramo de luz se traza desde la izquierda (1.4 s) y el de aroma desde la derecha (1.2 s, a los 0.5 s). Después aparece el codo y las estaciones se encienden en orden (0.45/0.75/1.05 s, aroma 1.1 s, trasbordo 1.45 s). El eslogan sube renglón por renglón (escalonado de 120 ms). La almohada entra (1.6 s) y luego flota (7 s), el halo de la cinta respira y salen ráfagas de menta del difusor. Con puntero fino, la almohada sigue al cursor con inercia.
- **Apariciones:** suben 28px con fundido una sola vez (IntersectionObserver), con un escalonado de 80 ms entre hermanos. Los `h2` y el título de los créditos suben palabra por palabra desde su ranura (45 ms por palabra; `aria-label` con el texto completo).
- **Riel:** al aparecer el `h2` de una sección, su tramo del riel se traza hacia abajo (1.6 s) y su estación pasa de gris a ámbar.
- **Barra:** el avance se llena con el scroll. La sección visible enciende su estación y su subrayado.
- **Comparador:** imagen dividida con un `input range` invisible encima (teclado y lectores de pantalla). La primera vez que aparece, la línea se mueve sola una vez para enseñar el gesto. Mientras está a la vista, el reloj timbra y las ondas salen. La curva de cada lado se dibuja en 2.4 s.
- **Secuencia fija:** en ventanas de 901px o más de ancho y 680px o más de alto, la mesa queda fija (`position: sticky`) y el scroll mueve el tren por las estaciones. Los pasos, el deslizador y "Reproducir" mueven el scroll. En pantallas menores, los pasos animan los minutos sin fijar nada.
- **Cifras que cuentan:** solo cifras de la investigación y de `datos.json`. Duran 1.4 s con desaceleración, empiezan con el 60 % visible y reservan su ancho final.
- **La unión:** con el scroll, las placas de luz y aroma viajan por su línea desde los bordes hasta quedar a los lados del trasbordo. El rótulo "AuraSleep" aparece en el último 40 % del recorrido.
- **Selector de funda:** rota solo cada 3.2 s mientras está a la vista y nadie lo toca. Se detiene con el cursor encima, al enfocarlo, al elegir una funda o con la pestaña oculta.
- **Acordeón:** la altura se anima en .26 s donde el navegador lo permite.

### Named Rules
**The Motion Explains Rule.** Cada movimiento demuestra el producto (la luz sube, el aroma sale, la alarma sacude, las líneas se unen) o confirma una acción o una llegada. Nada se anima solo por decorar contenido que se lee.

**The Still Frame Rule.** Con movimiento reducido no hay sección fija, flotación, rotación automática, conteo, trazado ni cursor seguido: todo aparece en su estado final, con las líneas completas y las estaciones encendidas.

## Do's and Don'ts

### Do:
- **Do** dibujar cualquier línea nueva con `grosor` y punta redonda, y marcar sus paradas con anillos de estación.
- **Do** reservar `lampara` para luz, estaciones encendidas, progreso y foco. Para texto de luz usa `luz-tinta` sobre esmalte y `luz-clara` sobre grafito.
- **Do** reservar la menta para el aroma, con `aroma-tinta` sobre esmalte y `menta-clara` sobre grafito.
- **Do** dar a cada sección nueva con título su estación en el riel y un fondo de esmalte o de túnel de grafito.
- **Do** titular, nombrar estaciones y escribir cifras en Barlow Condensed 700, y escribir todo lo demás en Overpass, con el cuerpo a 1.12rem/1.62.
- **Do** poner la letra chica de cifras hipotéticas en voz `small` junto a cada precio o costo. No se muestran testimonios, reseñas ni promesas médicas.
- **Do** usar pictogramas originales de un solo trazo como `<symbol>` en `index.html`, del color de su línea.
- **Do** congelar todo movimiento con `prefers-reduced-motion: reduce` (The Still Frame Rule).
- **Do** mantener un alto táctil de 44px o más en todo control y el anillo de foco ámbar de 3px.

### Don't:
- **Don't** pintar placas de acción general en ámbar ni en menta: van en grafito o en esmalte.
- **Don't** agregar un tercer color de línea ni usar los colores de funda como acentos de interfaz.
- **Don't** poner antetítulos, numeraciones decorativas ni etiquetas en mayúsculas sobre los títulos.
- **Don't** usar `backdrop-filter` ni paneles de vidrio.
- **Don't** usar resplandores sin desplazamiento en controles, cuadros o texto.
- **Don't** poner sombra a placas, tablas, cajas o lecturas.
- **Don't** mezclar grosores de línea ni dibujar líneas punteadas o degradadas entre luz y aroma (salvo la barra de avance).
- **Don't** usar logotipos, nombres ni pictogramas de sistemas de transporte reales.
- **Don't** volver al aspecto del primer sitio (azul marino oscuro con naranja, Instrument Sans, DM Mono), a la foto oscura con eslogan serif gigante ni a la plantilla crema de bienestar.
- **Don't** redondear más allá de 10px las superficies ni usar píldoras para botones.
