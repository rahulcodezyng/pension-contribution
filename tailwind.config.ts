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
        },
        secondary: {
          light: 'var(--secondary--light)',
          DEFAULT: 'var(--secondary)',  
        },
        subtitle: 'var(--subtitle)'
      },
      maxWidth: {
        'container': '1200px',  
      },
    },
  },
  plugins: [],
};
export default config;
