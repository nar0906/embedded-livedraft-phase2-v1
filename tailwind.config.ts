import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'racing-green': {
          100: '#F5F7F6',
          200: '#EDF2F0',
          300: '#CCD9D2',
          400: '#A1B2A9',
          500: '#6E8178',
          600: '#50665B',
          700: '#1D4B34',
          800: '#123021',
        },
        'cc-orange': {
          100: '#F8EADD',
          200: '#EFB399',
          300: '#E68C66',
          400: '#DE6633',
          500: '#D64000',
          600: '#AB3300',
          700: '#802600',
          800: '#561A00',
        },
        'graphite': '#212223',
        'page-bg': '#FCFCFC',
      },
      fontFamily: {
        'sans': ['"Source Sans 3"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        'heading': ['"Clario"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
