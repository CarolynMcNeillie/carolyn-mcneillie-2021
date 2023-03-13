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
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat:400,700`, `cardo`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass", 
    "gatsby-plugin-google-gtag", 
    "gatsby-plugin-sitemap"
  ]
};

export default config;
