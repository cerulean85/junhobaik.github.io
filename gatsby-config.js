module.exports = {
  siteMetadata: {
    title: `_SITE TITLE_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `typography.js`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`
  ]
};
