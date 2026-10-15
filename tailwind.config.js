/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        v2: {
          bg: '#0B1030',
          card: '#131B47',
          dark: '#070A22',
          panel: '#10184A',
          schema: '#0E1440',
          border: '#2A3678',
          'border-light': '#1E2862',
          accent: '#FFB86B',
          'accent-hover': '#FFA84D',
          'blue-1': '#8B9CFF',
          'blue-2': '#6F7FE8',
          'blue-3': '#5262CC',
          'text-main': '#E8ECFF',
          'text-body': '#C9D1F5',
          'text-muted': '#A3AEDB',
        },
        cyber: {
          bg: '#05050a',
          cyan: '#00f2fe',
          purple: '#7b2cbf',
        }
      },
      fontFamily: {
        head: ['Unbounded', 'sans-serif'],
        body: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'v2-grid': "linear-gradient(#18225A 1px, transparent 1px), linear-gradient(90deg, #18225A 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-56': '56px 56px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'cursor-blink': 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
