/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#232946",
        headline: "#fffffe",
        paragraph: "#b8c1ec",
        button: "#eebbc3",
        buttonText: "#232946",
        stroke: "#121629",
        main: "#b8c1ec",
        highlight: "#eebbc3",
        secondary: "#fffffe",
        tertiary: "#eebbc3",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
