/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "white": "#ffffff",
        "darktheme": {
          l1: "#21252E",
          l2: "#252933",
          l3: "#292D37"
        },
        "bluetheme": {
          l1: "#2F88FC",
          l2: "#2B7AFD",
          l3: "#2770FE"
        },
        "cyantheme": {
          l1: "#33E9D8",
          l2: "#31E3CB",
          l3: "#2ED9C2"
        },
        "ocretheme": {
          l1: "#DDDDC0",
          l2: "#FDFDE0",
          l3: "#FFFFEE"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-merriweather-sans)', 'var(--font-open-sans)', "sans-serif"],
        serif: ['var(--font-merriweather)', 'var(--font-bitter)', 'var(--font-domine)', "serif"],
        mono: ['var(--font-roboto-mono)', 'var(--font-ubuntu-mono)', 'var(--font-pt-mono)', "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
