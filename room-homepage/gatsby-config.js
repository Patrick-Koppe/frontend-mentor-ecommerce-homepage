const path = require(`path`)

const myCustomQueries = {
  xs: '(min-width: 0)',
  sm: '(max-width: 576px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 992px)',
  xl: '(max-width: 1200px)',
  xxl: '(max-width: 1400px)',
};

module.exports = {
  siteMetadata: {
    title: "Room-homepage",
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ],
};