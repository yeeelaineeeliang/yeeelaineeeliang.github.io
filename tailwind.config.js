/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFAF6',
        'bg-alt': '#FFF5ED',
        surface: '#FFFFFF',
        border: '#E8DDD4',
        text: '#2D2319',
        muted: '#6B5E52',
        'muted-2': '#9C8E82',
        accent: '#D97355',
        'accent-hover': '#C4603F',
        'accent-light': 'rgba(217,115,85,0.08)',
        teal: '#E8A87C',
        success: '#4A9E7C',
        warning: '#D4943A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        content: '1060px',
      },
    },
  },
  plugins: [],
}
