/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px", // mobile
        md: "768px", // tablets
        lg: "1024px", // small laptops / tablet landscape
        xl: "1280px", // desktops
        "2xl": "1600px", // large desktops
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
