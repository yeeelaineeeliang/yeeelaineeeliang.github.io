/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF6F0',
        'bg-alt': '#F4EFE7',
        surface: '#FFFFFF',
        border: 'rgba(36,28,26,0.13)',
        text: '#241C1A',
        muted: '#6B5850',
        'muted-2': '#9C877D',
        accent: '#9A3324',
        'accent-hover': '#7C281C',
        'accent-light': 'rgba(154,51,36,0.08)',
        gold: '#AD8A57',
        teal: '#5C7A70',
        success: '#5C7A70',
        warning: '#AA7A5F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
