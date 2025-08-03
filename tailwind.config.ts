/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class", // <- add this line
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
