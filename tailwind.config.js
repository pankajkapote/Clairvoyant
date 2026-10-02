/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx}", // catches clairvoyant-saas.jsx in root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
