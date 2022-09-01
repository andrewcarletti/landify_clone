/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#7C3AED",
        },
        secondary: {
          100: "#D5FAFC"
        },
        neutral: {
          900: "#111827",
          700: "#374151",
          500: "#6B7280",
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
