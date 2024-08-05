import type { Config } from 'tailwindcss';
const { tailwindConfig } = require('@storefront-ui/react/tailwind-config');

const config: Config = {
  presets: [tailwindConfig],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@storefront-ui/react/**/*.{js,mjs}',
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1043px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: '#155284',
          200: '#0D3651',
        },
        gray: {
          100: '#F2F2F2',
          200: 'rgb(173,173,173, 0.68)',
        },
        red: {
          100: '#eb3434',
        },
      },
    },
  },
  plugins: [],
};
export default config;
