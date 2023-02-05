/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgPatternCircles: 'url("./images/bg-pattern-circles.svg")',
        bgPatternIntroDesktop: 'url("./images/bg-pattern-intro-desktop.svg")',
        bgPatternIntroMobile: 'url("./images/bg-pattern-intro-mobile.svg")',
        'hero-pattern': "linear-gradient(to right bottom, hsl(13, 100%, 72%), hsl(353, 100%, 62%)), url('./images/bg-pattern-intro-desktop.svg')",
      },
      colors: {
        localred: {
          50: 'hsl(355, 100%, 74%)',
          100: 'hsl(356, 100%, 66%)'
        },
        grayishBlue: {
          50: "hsl(240, 2%, 79%)",
          100: "hsl(207, 13%, 34%)"
        },
        blackBlue: 'hsl(240, 10%, 16%)',
        gradient1: {from: 'hsl(13, 100%, 72%)', to: 'hsl(353, 100%, 62%)'},
        gradient2: {from: 'hsl(237, 17%, 21%)', to: 'hsl(237, 23%, 32%)'},
      }
    },
    fontFamily: {
      Overpass: ["Overpass"],
      Ubuntu: ["Ubuntu"]
    },
  },
  plugins: [],
}
