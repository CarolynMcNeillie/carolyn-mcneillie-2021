import React from "react";
import "normalize.css/normalize.css";
import { Helmet } from "react-helmet";

import BoxInValise from "../images/box-in-valise.jpg";
import { Page } from "../common/components/Page";
import { Profile } from "../common/components/Profile";
import { Social } from "../common/components/Social";
import { TextBox } from "../common/components/TextBox";

const IndexPage = () => {
  return (
    <Page>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <title>Carolyn McNeillie</title>
        <meta
          name="description"
          content="I am a Senior Web Developer at TWG with a background in design, marketing, e-commerce, book publishing, mural painting, and art restoration."
        ></meta>
        <link rel="canonical" href="http://carolynmcneillie.com" />
      </Helmet>
      <div>
        <Profile />
        <h1>Carolyn McNeillie</h1>
        <h2>
          Toronto / Hamilton / Anywhere <br />
          <a href="mailto:hello@carolynmcneillie.com">
            hello@carolynmcneillie.com
          </a>
        </h2>
      </div>
      <TextBox>
        <p>
          I am a Senior Web Developer at{" "}
          <a href="https://twg.io/" target="_blank" rel="noreferrer">
            TWG
          </a>{" "}
          with a{" "}
          <a
            href="https://junocollege.com/blog/alumni-stories-from-publishing-creative-to-frontend-developer"
            target="_blank"
            rel="noreferrer"
          >
            background
          </a>{" "}
          in design, marketing,{" "}
          <a
            href="https://static.sched.com/hosted_files/techforumebookcraft2019/06/Metadata%20and%20the%20Web%20at%20House%20of%20Anansi%20Press.pdf"
            target="_blank"
            rel="noreferrer"
          >
            e-commerce
          </a>
          , book publishing, mural painting, and{" "}
          <a href={BoxInValise}>art restoration</a>. Using React, TypeScript,
          and GraphQL I have helped build e-commerce, websites, and web
          applications for clients including{" "}
          <a href="https://houseofanansi.com/" target="_blank" rel="noreferrer">
            House of Anansi
          </a>
          ,{" "}
          <a
            href="https://chanzuckerberg.com/"
            target="_blank"
            rel="noreferrer"
          >
            Chan Zuckerberg Initiative
          </a>
          ,{" "}
          <a
            href="https://www.greenshield.ca/en-ca/"
            target="_blank"
            rel="noreferrer"
          >
            Green Shield
          </a>
          , &{" "}
          <a href="https://www.shopify.ca/" target="_blank" rel="noreferrer">
            Shopify
          </a>
          .
          <br />I ♡ CSS.
        </p>
      </TextBox>
      <Social />
    </Page>
  );
};

export default IndexPage;
