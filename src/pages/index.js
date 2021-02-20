import React from "react";
import Carolyn from "../images/Carolyn.png";
import BoxInValise from "../images/box-in-valise.jpg";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "cardo, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  fontFamily: "montserrat, sans-serif",
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};
// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#000000",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <img src={Carolyn} alt="Carolyn" />
      <h1 style={headingStyles}>Carolyn McNeillie</h1>
      <p style={paragraphStyles}>
        I am a Senior Web Developer at{" "}
        <a href="https://twg.io/" target="_blank">
          TWG
        </a>{" "}
        with a{" "}
        <a href="https://junocollege.com/blog/alumni-stories-from-publishing-creative-to-frontend-developer">
          background
        </a>{" "}
        in design, marketing,{" "}
        <a href="https://static.sched.com/hosted_files/techforumebookcraft2019/06/Metadata%20and%20the%20Web%20at%20House%20of%20Anansi%20Press.pdf">
          e-commerce
        </a>
        , book publishing, mural painting,{" "}
        <a href={BoxInValise}>art restoration</a>, and{" "}
        <a href="https://vimeo.com/user12087681">fostering kittens</a>. I am
        passionate about making beautiful things.
      </p>
      <p>Toronto / Hamilton</p>
      <ul>
        <li>
          <a href="https://github.com/CarolynMcNeillie">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/carolynalive">Twitter</a>
        </li>
        <li>
          <a href="https://medium.com/@carolynmcneillie">Medium</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/carolyn-mcneillie/">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:hello@carolynmcneillie.com">
            hello@carolynmcneillie.com
          </a>
        </li>
      </ul>
      <p>
        <a href="mailto:hello@carolynmcneillie.com">
          Let's make something together
        </a>
      </p>
    </main>
  );
};

export default IndexPage;
