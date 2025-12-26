/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nft-purple": "#8b5cf6",
        "nft-dark": "#0f0f23",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        heading: ["Clash Display", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
