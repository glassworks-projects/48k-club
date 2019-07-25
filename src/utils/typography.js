import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1,

  googleFonts: [
    // {name: 'Roboto', styles: ['300', '500'],},
    {name: 'Cormorant Garamond', styles: ['400', '500', '600i'],},
  ],

  // bodyFontFamily: ['Roboto', '500'],
  bodyColor: "white",
})

export default typography
