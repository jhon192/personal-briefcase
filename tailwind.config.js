const { withAnimations } = require("animated-tailwindcss");

module.exports = withAnimations({
  darkMode: "false",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mountain-meadow": {
          DEFAULT: "#10B981",
          50: "#8CF5D2",
          100: "#79F3CB",
          200: "#53F0BC",
          300: "#2EEDAE",
          400: "#13DF9B",
          500: "#10B981",
          600: "#0C855D",
          700: "#075239",
          800: "#031E15",
          900: "#000000",
        },
        "french-rose": {
          DEFAULT: "#EC4899",
          50: "#FDEEF6",
          100: "#FBDCEB",
          200: "#F8B7D7",
          300: "#F492C2",
          400: "#F06DAE",
          500: "#EC4899",
          600: "#E4187D",
          700: "#B11261",
          800: "#7F0D45",
          900: "#4C0829",
        },
        "red-orange": {
          DEFAULT: "#FF3535",
          50: "#FFEDED",
          100: "#FFD8D8",
          200: "#FFAFAF",
          300: "#FF8787",
          400: "#FF5E5E",
          500: "#FF3535",
          600: "#FC0000",
          700: "#C40000",
          800: "#8C0000",
          900: "#540000",
        },
        "screamin-green": {
          DEFAULT: "#35FF42",
          50: "#EDFFEE",
          100: "#D8FFDB",
          200: "#AFFFB5",
          300: "#87FF8F",
          400: "#5EFF69",
          500: "#35FF42",
          600: "#00FC11",
          700: "#00C40D",
          800: "#008C09",
          900: "#005406",
        },
        "blue-special": {
          DEFAULT: "#5D8BF4",
        },
      },
    },
  },
  plugins: [],
});
