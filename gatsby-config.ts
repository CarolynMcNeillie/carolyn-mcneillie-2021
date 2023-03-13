import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CarolynMcNeillie`,
    description:
    "Carolyn McNeillie is a Senior Font-End Developer.",
    image: "images/Carolyn.png",
    twitterUsername: "@carolynalive",
    siteUrl: "https://carolynmcneillie.com",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat:400,700`, `cardo`],
        display: "swap",
      },
    },
    "gatsby-plugin-sass", 
    "gatsby-plugin-google-gtag", 
    "gatsby-plugin-sitemap"
  ]
};

export default config;
