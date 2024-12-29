/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        libre: ["Libre Baskerville", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      textColor: {
        DEFAULT: "#D0D0D0",
      },
      colors: {
        gray: {
          DEFAULT: "var(--color-gray-500)",
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          150: "var(--color-gray-150)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          850: "var(--color-gray-850)",
          900: "var(--color-gray-900)",
          950: "var(--color-gray-950)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
};
