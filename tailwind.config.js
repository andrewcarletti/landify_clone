/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#7C3AED",
        },
        neutral: {
          900: "#111827",
          700: "#374151",
          200: "#E5E7EB"
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
