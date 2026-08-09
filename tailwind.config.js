/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'], // Títulos principales
        subheading: ['Montserrat', 'sans-serif'], // Subtítulos (en itálica)
        sans: ['"Open Sans"', 'sans-serif'], // Texto de párrafo
        accent: ['Poppins', 'sans-serif'], // Etiquetas, botones, énfasis
        script: ['"Mr Dafoe"', 'cursive'], // Detalle decorativo / firma
      },
      colors: {
        // Paleta oficial de la marca
        azul: '#164B7A', // Azul principal — confianza, firmeza, fe, verdad, estabilidad
        azulClaro: '#4FA3D9', // El agua, la fuente, renovación, frescura y vida
        dorado: '#D4A62A', // La gloria de Dios, excelencia, luz y propósito
        verde: '#63A65F', // Esperanza, restauración, crecimiento y vida
        blanco: '#FFFFFF', // Pureza, paz, unidad y ambiente acogedor
        azulOscuro: '#0B2742', // Profundidad, autoridad, madurez espiritual y seguridad

        // Alias semánticos usados en los componentes (mapeados a la paleta de marca)
        cream: '#FFFFFF',
        sand: '#EAF3FA',
        brown: '#0B2742',
        text: '#0B2742',
        muted: '#3F5877',
        rust: '#164B7A',
        gold: '#D4A62A',
        whatsapp: '#25D366',
      },
    },
  },
  plugins: [],
};
