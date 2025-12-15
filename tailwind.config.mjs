/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-bone': '#f6f5ec',
        'brand-black': '#0d0e14',
        'brand-neon': '#ecfc39',
        'brand-blue': '#005dff',
        'brand-gray': '#b0b1b6',
      },
      borderRadius: {
        bento: '1.5rem', // 24px
        btn: '0.75rem', // 12px
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
