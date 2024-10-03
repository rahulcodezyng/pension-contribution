import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: 'var(--primary)',
          DEFAULT: 'var(--primary)', 
          dark: '#3068c9',
        },
        secondary: {
          light: 'var(--secondary--light)',
          DEFAULT: 'var(--secondary)',  
          dark: '#d99a1f',
        },
        subtitle: 'var(--subtitle)'
      },
      maxWidth: {
        'container': '1200px',  
        'screen-xl': '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
