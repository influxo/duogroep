/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        primary: "#4993F3",
        secondary: "#F0F8FF",
        third: "#FBFCF8",
        dark_blue: "#4993F3",
      },
    },
  },
  plugins: [],
};
