/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Poppins, sans-serif", { fontFeatureSettings: '"cv11", "ss01"' }],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
