/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2E5C77",
      },
      fontFamily: {
        eduVic: ["Edu AU VIC WA NT Arrows", "cursive"],
        playWrite: ["Playwrite NG Modern", "serif"],
      },
    },
  },
  plugins: [],
};
