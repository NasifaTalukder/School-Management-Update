/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      colors: {
        "main-color": "#344CB7",
        "secondary-colour": "#426fca",
        "third-color": "#4ade80",
      },
      borderRadius: {
        "btn-radius": "6px",
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
    },
  },
};
