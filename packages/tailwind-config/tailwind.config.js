/** @type {import('tailwindcss').Config} */

const customColors = [
  "custom-blue-1000",
  "custom-purple-1000",
  "custom-red-1000",
];

const safelist = [];

["bg", "text", "border"].forEach((prefix) => {
  customColors.forEach((color) => {
    safelist.push(`${prefix}-${color}`);
  });
});

module.exports = {
  content: [
    "../../apps/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist,
};
