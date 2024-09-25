/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      fontFamily: {
        //   sans: ["Recursive Variable", "Recursive", "sans-serif"],
        sans: "'Urbanist Variable', sans-serif",
        mono: ["'Fira Code'", "monospace"],
      },
      extend: {},
    },
    plugins: [],
  };
  