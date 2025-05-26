/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-custom-/,
    },
    {
      pattern: /^text-custom-/,
    },
    {
      pattern: /^border-custom-/,
    },
    "custom-blue-1000",
    "custom-purple-1000",
    "custom-red-1000",
    // "bg-custom-purple-1000",
  ],
};
