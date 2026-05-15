/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F8F5',
        'bg-alt': '#EDF4F1',
        surface: '#FFFFFF',
        border: '#D7DED9',
        text: '#1F2A24',
        muted: '#5E6F68',
        'muted-2': '#87958F',
        accent: '#A33F2F',
        'accent-hover': '#842F24',
        'accent-light': 'rgba(163,63,47,0.08)',
        teal: '#2F8F83',
        success: '#3A8C63',
        warning: '#B7793E',
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
