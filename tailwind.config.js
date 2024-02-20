/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#C89F94",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translate3d(0px,8px,0px)", opacity: 0 },
          "100%": { transform: "translate3d(0px,0px,0px)", opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out",
        fadeIn: "fadeIn 0.4s ease-in-out",
        slideUp: "slideUp .4s ease-in",
      },
      backgroundImage: {
        "slider-bg": 'url("./img/header.jpg")',
      },
    },
  },
  plugins: [],
};
