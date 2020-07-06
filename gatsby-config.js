module.exports = {
  siteMetadata: {
    title: `Dinda's Pastry`,
    description: `Looking for the best CINAMMON Rolls in town? Well we got ya covered! Don't missed out on our 30% discounts`,
    url: `https://fantasticsecond.com`,
    author: `Jessica Stevanie`,
  },
  plugins: [
    'gatsby-plugin-antd',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      loader: `less-loader`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#C1A57B',
          'font-family': 'Arial',
          'layout-body-background': '#66ff79'
        }
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
