import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0b1d3a',
          light: '#162f55',
          dark: '#071526',
        },
        ocean: {
          DEFAULT: '#0284c7',
          light: '#38bdf8',
          dark: '#0369a1',
        },
        primary: {
          DEFAULT: '#0f2b48',
          light: '#1e3a5f',
          dark: '#071626',
        },
        accent: {
          DEFAULT: '#1d4ed8',
          light: '#3b82f6',
          dark: '#1e40af',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;