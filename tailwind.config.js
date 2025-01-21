/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors:{
        bodyColor: "hsl(300, 100%, 2%)",
        sectionColor: "hsl(300, 100%, 5%)",
        cardColor: "hsl(300, 100%, 10%)",
        titleColor: "hsl(300, 100%, 23%)",
        textColor: "hsl(0, 0%, 100%)",
      }
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      DancingScript: ["Dancing Script", "cursive"],
    },
    container:{
     center:true,
     padding:'20px',

    },
  },
  plugins: [],
}

