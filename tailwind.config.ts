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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },
  plugins: [],
} satisfies Config;
