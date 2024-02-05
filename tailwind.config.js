/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
