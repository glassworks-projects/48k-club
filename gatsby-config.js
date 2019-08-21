module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
      pathToConfigModule: `src/utils/typography`,
      omitGoogleFont: true
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
      },
    },
  ],
}
