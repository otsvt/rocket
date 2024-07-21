/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        primary: "#F9F7F2",
        star: "#F5A623",
        starOff: "#F1EBDB",
      },
    },
  },
  plugins: [],
};
