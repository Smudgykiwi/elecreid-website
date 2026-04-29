import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        austin: ['Austin', 'Georgia', 'serif'],
        'austin-hairline': ['AustinHairline', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        navy: '#16253F',
        blue: '#0134E7',
        cream: '#F8F4F1',
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
}

export default config
