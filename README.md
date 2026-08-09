# Sitio web de la iglesia

Proyecto React (Vite + Tailwind CSS), sin backend por el momento.

## Cómo abrirlo en Visual Studio Code

1. Descomprime la carpeta `iglesia-sitio`.
2. Abre la carpeta en VS Code (`File > Open Folder`).
3. Abre una terminal integrada (`` Ctrl+ˋ ``) e instala las dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

## Estructura del proyecto

```
src/
  data/content.js       ← Aquí editas TODO el contenido (nombre de la iglesia,
                            WhatsApp, líderes, devocionales, videos, historias...)
  components/
    Header.jsx           ← Barra de navegación
    Hero.jsx              ← Sección de inicio
    Nosotros.jsx           ← Quiénes somos / visión / misión
    Historia.jsx           ← Línea de tiempo de la historia
    Lideres.jsx             ← Tarjetas de líderes
    Devocionales.jsx         ← Lista de devocionales
    Videos.jsx                ← Galería de videos
    HistoriasBiblicas.jsx      ← Historias bíblicas
    Contacto.jsx                ← Contacto + WhatsApp + footer
    WhatsAppButton.jsx           ← Botón flotante de WhatsApp
  App.jsx                 ← Une todas las secciones
```

## Qué editar primero

Abre `src/data/content.js` y cambia:
- `CHURCH_NAME` → nombre real de la iglesia
- `WHATSAPP_NUMBER` → número real (código país + número, sin "+" ni espacios, ej: `18091234567`)
- `leaders`, `devocionales`, `videos`, `historiasBiblicas`, `contacto` → contenido real

## Próximos pasos (pendientes)

- Backend en Node.js (sin MySQL por ahora, se agregará después)
- Registro de usuarios y comentarios
- Contenido real (fotos, videos de YouTube, textos definitivos)

## Comandos disponibles

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción (carpeta `dist/`)
- `npm run preview` — previsualizar el build de producción
