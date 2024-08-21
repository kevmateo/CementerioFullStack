/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Azul': '#0069D9',
        'Rojo': '#C82333',
        'Verde': '#28A745',
        'Gris': '#5A6268',
        'Amarillo': '#E0A800',
        'Gris-Fondos': '#F6F8F9'
      },
      fontFamily:{
        'Monserrat': ['Montserrat', 'sans-serif'],
        'Logo': ['Montserrat Alternates', 'sans-serif'],
      },
      fontSize: {
        'titulo-normal': '1.5rem',
        'subtitulo-normal': '1.25rem',
        'normal': '.875rem',
        'minima': '.75rem',
        'minima-phone': '.688rem',
      },
      
    },
  },
  plugins: [
    function({ addUtilities }){
      const newUtilities = {
        '.titulo-bold': {
          fontSize: '1.5rem',
          fontWeight: '700',
        },
        '.subtitulo-bold': {
          fontSize: '1.25rem',
          fontWeight: '700',
        },
        '.normal-bold': {
          fontSize: '.875rem',
          fontWeight: '700',
        },
        '.normal-placeholder': {
          fontSize: '.875rem',
          fontWeight: '200',
        },
        '.minima-bold': {
          fontSize: '.75rem',
          fontWeight: '700',
        },
        '.minima-phone-bold': {
          fontSize: '.688rem',
          fontWeight: '700',
        },
      }
      const newUtilitiesScroll = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no.scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover'])
      addUtilities(newUtilitiesScroll, ['responsive', 'hover'])
    }
  ],
}

