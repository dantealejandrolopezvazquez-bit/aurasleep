# AuraSleep: paquete para el sitio web

Esta carpeta tiene todo lo del proyecto AuraSleep para construir el sitio con **Claude Code**.

## Cómo empezar

1. **Instala Claude Code** en tu computadora siguiendo la guía oficial: https://docs.claude.com/en/docs/claude-code/overview
2. **Descomprime** este .zip en una carpeta fácil de encontrar, por ejemplo `Documentos/aurasleep-sitio`.
3. Abre una **terminal** en esa carpeta:
   - Windows: abre la carpeta, escribe `cmd` en la barra de direcciones y presiona Enter.
   - Mac: clic derecho en la carpeta → Servicios → Nueva terminal en la carpeta.
4. Escribe `claude` y presiona Enter.
5. Copia el texto de `PROMPT_INICIAL.md` y pégalo.

Claude Code lee `CLAUDE.md` por su cuenta y usa el skill de marca (`.claude/skills/aurasleep-marca`). Así no tienes que volver a explicarle el proyecto. La carpeta `.claude` está oculta: en Mac, muéstrala con `Cmd + Shift + .`; en Windows, ve a Vista → Elementos ocultos.

## Contenido

```
aurasleep-sitio/
├── CLAUDE.md                     ← contexto y reglas del proyecto (Claude Code lo lee solo)
├── PROMPT_INICIAL.md             ← lo que pegas en la primera sesión
├── LEEME.md                      ← este archivo
├── .claude/skills/aurasleep-marca/SKILL.md   ← colores, tipografía, tono
├── docs/
│   ├── contenido.md              ← todos los textos del sitio por sección
│   ├── datos.json                ← especificaciones, precios y escenarios en JSON
│   ├── enlaces.md                ← ligas de Canva y guion de la presentación
│   └── AuraSleep_Investigacion.pdf
├── modelo-3d/
│   ├── aurasleep-3d.html         ← visor 3D interactivo (WebGL, un archivo)
│   ├── shot.py                   ← genera renders fijos del modelo
│   └── LEEME.md
├── public/img/                   ← renders optimizados (.webp) para el sitio
└── assets/originales/            ← renders en PNG a resolución completa
```

## Para ajustar el sitio a tu gusto

- **El diseño** se cambia en `.claude/skills/aurasleep-marca/SKILL.md`, por ejemplo los colores, las fuentes o el tono. Claude Code lo usa cada vez.
- **Las reglas del proyecto** están en `CLAUDE.md`. Puedes agregar cosas como "siempre usa animaciones suaves" o "no uses tablas en celular".
- **Los textos** salen de `docs/contenido.md`.
- **Los datos del equipo:** cuando los tengas, agrega nombres, escuela y correo en `CLAUDE.md`, en la sección "Equipo y datos pendientes".

## Antes de publicar

- Haz públicas las ligas de Canva: en cada diseño, Compartir → Acceso a la liga → Cualquier persona con el enlace.
- No pongas en el sitio la liga de **edición** de la presentación.
- Si usas en el sitio la foto del reloj de la portada (Unsplash, autor Indra Projects), el crédito es opcional, pero queda bien ponerlo.
