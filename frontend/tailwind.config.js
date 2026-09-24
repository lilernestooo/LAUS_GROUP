/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14141a",
        "ink-soft": "#1f2027",
        ember: {
          DEFAULT: "#e2231a",
          dark: "#b91811",
        },
        paper: "#f7f6f2",
        steel: "#3d3f46",
        ash: "#8a8d94",
      },
      fontFamily: {
        display: ["Barlow Condensed", "Arial Narrow", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};