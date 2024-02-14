import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        'light-background': 'hsl(0 0% 100%)',
        'light-forebackground': 'hsl(240 5.9% 90%)',
        'light-text': 'hsl(240 10% 3.9%)',
        'dark-background': 'hsl(222.2 84% 4.9%)',
        'dark-forebackground': 'hsl(217.2 32.6% 17.5%)',
        'dark-text': 'hsl(210 40% 98%)',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
