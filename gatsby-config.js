module.exports = {
  plugins: [
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
