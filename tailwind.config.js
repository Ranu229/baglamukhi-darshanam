/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#E8691A',
          light: '#F5A623',
          pale: '#FFF3E0',
        },
        deepRed: '#8B1A1A',
        crimson: '#C0392B',
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          pale: '#FFF8E7',
        },
        cream: '#FDF6EC',
        warmWhite: '#FFFBF5',
        text: {
          dark: '#2C1810',
          mid: '#5C3D2E',
          light: '#8B6355',
        },
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'floatCard 4s ease-in-out infinite',
        'rotate-mandala': 'rotateMandala 20s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        floatCard: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        rotateMandala: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(245,166,35,0.6))' },
          '50%': { filter: 'drop-shadow(0 0 40px rgba(245,166,35,0.9))' },
        },
      },
    },
  },
  plugins: [],
}
