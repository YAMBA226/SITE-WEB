/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0062FF', // Electric blue
          600: '#0057e6',
          700: '#0047cc',
          800: '#0038a3',
          900: '#002966',
        },
        secondary: {
          50: '#e6fdff',
          100: '#ccfbff',
          200: '#99f8ff',
          300: '#66f4ff',
          400: '#33f1ff',
          500: '#00F0FF', // Neon blue accent
          600: '#00d8e6',
          700: '#00c0cc',
          800: '#0099a3',
          900: '#006066',
        },
        dark: {
          50: '#f2f3f7',
          100: '#e6e7ee',
          200: '#cdd0de',
          300: '#b3b8cd',
          400: '#9aa0bd',
          500: '#8089ac',
          600: '#666e9b',
          700: '#4d538a',
          800: '#33396a',
          900: '#111827', // Carbon black
        },
        light: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fcfcfc',
          400: '#fbfbfb',
          500: '#F9FAFB', // Off-white
          600: '#e0e1e2',
          700: '#c8c9c9',
          800: '#afb0b0',
          900: '#979797',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        'neon': '0 0 5px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.2)',
        'neon-hover': '0 0 8px rgba(0, 240, 255, 0.6), 0 0 30px rgba(0, 240, 255, 0.3)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 8px rgba(0, 240, 255, 0.6), 0 0 30px rgba(0, 240, 255, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};