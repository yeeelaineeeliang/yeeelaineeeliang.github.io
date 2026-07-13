/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F8F4F1',
        'bg-alt': '#F1E8E2',
        surface: '#FFFFFF',
        border: '#CDB7AA',
        text: '#261B19',
        muted: '#6F5A52',
        'muted-2': '#9B8176',
        accent: '#7A1F2B',
        'accent-hover': '#631823',
        'accent-light': 'rgba(122,31,43,0.08)',
        teal: '#A88A7A',
        success: '#967566',
        warning: '#AA7A5F',
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
