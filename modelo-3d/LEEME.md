# Modelo 3D de AuraSleep

`aurasleep-3d.html` es un visor 3D hecho con **WebGL puro** (sin Three.js ni otras librerías), en un solo archivo. Solo carga fuentes de Google Fonts.

## Qué hace
- Gira con el mouse/dedo y hace zoom.
- 4 vistas con transición de cámara: perspectiva, superior, lateral e interna (rayos X).
- 3 colores de funda: Blanco roto, Gris piedra, Beige cálido.
- Línea de tiempo del despertar (−15 a 0 min): la fibra óptica se enciende y el difusor suelta ráfagas de aroma.
- Etiquetas de componentes y cotas (68 × 48 cm, 13/10 cm).

## Parámetros de URL
| Parámetro | Valores | Efecto |
| --- | --- | --- |
| `view` (o `#hash`) | `perspectiva`, `superior`, `lateral`, `interna`, `uso` | Vista inicial. `uso` muestra una figura genérica (maniquí) acostada con la cabeza en la almohada, sobre un colchón y bajo una cobija; las ráfagas de aroma van hacia su nariz |
| `color` | `blanco`, `gris`, `beige` | Color de la funda |
| `t` | −15 a 0 | Minuto de la secuencia |
| `shot` | `1` | Oculta la interfaz (solo el lienzo a pantalla completa) y detiene el render tras unos cuadros |
| `labels` | `0` | Oculta etiquetas (con `shot=1`) |
| `bg` | `none` | Fondo transparente (con `shot=1`) |
| `aroma` | `1` | Muestra las ráfagas de aroma en la captura |
| `embed` (o `#embed`) | `1` | Modo incrustado del sitio: sin interfaz propia, sigue animando, la rueda solo acerca con Ctrl y escucha `postMessage({aurasleep:true, view, color, t, play})` desde la página |

El sitio (`index.html`) usa `aurasleep-3d.html#embed` porque `npx serve` redirige `.html` a URL limpias y pierde la consulta `?embed=1`; el `#hash` sí se conserva.

Ojo: con `shot=1` el render **se detiene** a los ~20 cuadros (para capturas). Para un visor interactivo incrustado sin interfaz, quita esa condición (`if(SHOT&&frames>20)return;`) o crea un modo nuevo, p. ej. `?embed=1`, que oculte la interfaz pero siga animando.

Ejemplo de incrustación:
```html
<iframe src="modelo-3d/aurasleep-3d.html#perspectiva" title="Modelo 3D interactivo de AuraSleep"
        style="width:100%;aspect-ratio:16/10;border:0;border-radius:20px" loading="lazy"></iframe>
```

## Funciones internas útiles
- `VIEWS`: parámetros de cámara por vista (`th`, `ph`, `r`, `t`, `fov`).
- `go(vista, instantaneo)`: cambia de vista con animación.
- `COLORS` / `PIPE`: color de funda y de ribete.
- `f(x,z)`: altura de la superficie de la almohada (forma paramétrica).
- `draw(...)` con `uMode`: 0 iluminado, 1 líneas sin luz, 2 sombra, 3 aroma.

## Generar renders nuevos
`shot.py` usa Playwright (Python) + Chromium. Recibe una lista JSON de trabajos:
```bash
pip install playwright && playwright install chromium
python shot.py '[{"out":"render.png","q":"?shot=1&view=lateral&t=0&color=gris","w":1600,"h":1000,"dpr":2,"wait":1500,"nobg":false}]'
```
El script busca `aurasleep-3d.html` en su misma carpeta. Si Chromium no tiene GPU, el script ya pasa `--use-gl=angle --use-angle=swiftshader`.
