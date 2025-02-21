import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1400px'},
        'xl': {'max': '1124px'},
        'lg': {'max': '1024px'}, // Tablet
        'md': {'max': '768px'},  // Mobile (landscape)
        'sm': {'max': '640px'},  // Mobile (portrait)
      },
      fontFamily: {
        'lexend': ['lexend'],
      },
      backgroundImage: {
        subscribeCard : "url(/images/bg.png)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green : {
          primary: '#10B981',
          secondary : '#D1FAE5'
        },
        red : {
          primary: '#EF4444',
          secondary : '#FEE2E2'
        },
        blue : {
          primary: '#1D4ED8',
          secondary : '#DBEAFE'
        },
        orange: {
          primary : '#F59E0B'
        },
        text : {
          primary : '#1B1C57',
          secondary: '#626687'
        }        
      },

    },
  },
  plugins: [],
} satisfies Config;
