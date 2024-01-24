/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "lsm": "480px",
        "lmd": "720px",
        "llg": "960px",
        "lxl": "1160px",
        "l2xl": "1367px",
      },
      spacing: {
        "128": "128px",
        "256": "256px",
        "480": "480px",
        "512": "512px",
        "640": "640px",
        "768": "768px",
        "896": "896px",
        "960": "960px",
        "1024": "1024px",
        "1080": "1080px",
        "1366": "1366px",
        "1440": "1440px",
        "1536": "1536px",
        "1600": "1600px",
        "1920": "1920px",
        "2048": "2048px",
      },
      colors: {
        "black": "#000000",
        "white": "#ffffff",
        "darktheme": {
          l1: "#11151E",
          l2: "#151923",
          l3: "#191D27"
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
