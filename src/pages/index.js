import React from "react";
import "normalize.css/normalize.css";
import Carolyn from "../common/images/Carolyn.png";
import BoxInValise from "../common/images/box-in-valise.jpg";
import { Page } from "../common/components/Page";
import { Columns } from "../common/components/Columns";
import { Profile } from "../common/components/Profile";

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

const IndexPage = () => {
  return (
    <Page>
      <Columns>
        <Profile />
        <div>
          <h1>Carolyn McNeillie</h1>
          <h2>
            <a href="mailto:hello@carolynmcneillie.com">
              hello@carolynmcneillie.com
            </a>
          </h2>
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
            <a href="https://vimeo.com/user12087681">fostering kittens</a>.
            Using React, TypeScript and GraphQL I have worked on websites,
            e-commerce shops, and web applications for clients including{" "}
            <a href="https://houseofanansi.com/">House of Anansi Press</a>,{" "}
            <a href="https://chanzuckerberg.com/">Chan Zuckerberg Initiative</a>
            ,{" "}
            <a href="https://joya.ca/" target="_blank">
              Joyà
            </a>
            , and <a href="https://www.shopify.ca/">Shopify</a>.
          </p>
          <p>I love CSS in all its forms.</p>
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
              <a href="https://www.linkedin.com/in/carolyn-mcneillie/">
                LinkedIn
              </a>
            </li>
          </ul>
          <p>Toronto / Hamilton / Anywhere</p>
          <p>
            <a href="mailto:hello@carolynmcneillie.com">Get in touch.</a>
          </p>
        </div>
      </Columns>
    </Page>
  );
};

export default IndexPage;
