module.exports = {
  siteMetadata: {
    title: "Carolyn McNeillie",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-113885017-1",
      },
    },
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/common/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat:400,700`, `cardo`],
        display: "swap",
      },
    },
  ],
};
