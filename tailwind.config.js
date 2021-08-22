module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "sans": [
          "Montserrat",
          "sans-serif",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif"
        ],
      },
      screens: {
        "3xl": { min: "1920px" },
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
      },
      colors: {
        "uitalks-primary": "#110228",
        "uitalks-white": "#FFFFFF",
        "uitalks-darkblue": "#263483",
        "uitalks-pink": "#EC0D7A",
        "uitalks-purple": "#8D207E"
      },
      margin: {
        "30": "7.5rem"
      },
      padding: {
        "30": "7.5rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}