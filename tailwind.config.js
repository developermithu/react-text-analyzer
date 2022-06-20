/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
