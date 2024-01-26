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
        "black": "#000",
        "white": "#fff",
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
          l1: "#BBBBA0",
          l2: "#DCDCD0",
          l3: "#FFFFEE"
        }
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'var(--font-merriweather-sans)',
          'var(--font-open-sans)',
          "sans-serif"
        ],
        serif: [
          'var(--font-merriweather)',
          'var(--font-bitter)',
          'var(--font-domine)',
          "serif"
        ],
        mono: [
          'var(--font-roboto-mono)',
          'var(--font-ubuntu-mono)',
          'var(--font-pt-mono)',
          "monospace"
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideright: {
          "0%": { transform: "translateX(-25%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideleft: {
          "0%": { transform: "translateX(25%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideup: {
          "0%": { transform: "translateY(25%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slidedown: {
          "0%": { transform: "translateY(-25%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        appear10: { "0%": { opacity: "0" }, "100%": { opacity: "0.1" } },
        appear20: { "0%": { opacity: "0" }, "100%": { opacity: "0.2" } },
        appear30: { "0%": { opacity: "0" }, "100%": { opacity: "0.3" } },
        appear40: { "0%": { opacity: "0" }, "100%": { opacity: "0.4" } },
        appear50: { "0%": { opacity: "0" }, "100%": { opacity: "0.5" } },
        appear60: { "0%": { opacity: "0" }, "100%": { opacity: "0.6" } },
        appear70: { "0%": { opacity: "0" }, "100%": { opacity: "0.7" } },
        appear80: { "0%": { opacity: "0" }, "100%": { opacity: "0.8" } },
        appear90: { "0%": { opacity: "0" }, "100%": { opacity: "0.9" } },
        appear100: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        "slider": "slideright 1s ease 1",
        "slidel": "slideleft 1s ease 1",
        "slideu": "slideup 1s ease 1",
        "slided": "slidedown 1s ease 1",
        "appear10": "appear10 1s ease 1",
        "appear20": "appear20 1s ease 1",
        "appear30": "appear30 1s ease 1",
        "appear40": "appear40 1s ease 1",
        "appear50": "appear50 1s ease 1",
        "appear60": "appear60 1s ease 1",
        "appear70": "appear70 1s ease 1",
        "appear80": "appear80 1s ease 1",
        "appear90": "appear90 1s ease 1",
        "appear100": "appear100 1s ease 1",
      },
    },
  },
  plugins: [],
};
