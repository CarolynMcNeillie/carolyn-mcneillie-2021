import React from "react";
import "normalize.css/normalize.css";

import Carolyn from "../common/images/Carolyn.png";
import BoxInValise from "../common/images/box-in-valise.jpg";
import { Page } from "../common/components/Page";
import { Profile } from "../common/components/Profile";
import { Social } from "../common/components/Social";
import { Text } from "../common/styles/styled-components";

const IndexPage = () => {
  return (
    <Page>
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
      <Text>
        <p>
          I am a Senior Web Developer at{" "}
          <a href="https://twg.io/" target="_blank">
            TWG
          </a>{" "}
          with a{" "}
          <a
            href="https://junocollege.com/blog/alumni-stories-from-publishing-creative-to-frontend-developer"
            target="_blank"
          >
            background
          </a>{" "}
          in design, marketing,{" "}
          <a
            href="https://static.sched.com/hosted_files/techforumebookcraft2019/06/Metadata%20and%20the%20Web%20at%20House%20of%20Anansi%20Press.pdf"
            target="_blank"
          >
            e-commerce
          </a>
          , book publishing, mural painting, and{" "}
          <a href={BoxInValise}>art restoration</a>. Using React, TypeScript and
          GraphQL I have helped build e-commerce and web applications for
          clients including{" "}
          <a href="https://houseofanansi.com/" target="_blank">
            House of Anansi Press
          </a>
          ,{" "}
          <a href="https://chanzuckerberg.com/" target="_blank">
            Chan Zuckerberg Initiative
          </a>
          ,{" "}
          <a href="https://joya.ca/" target="_blank">
            Joyà
          </a>
          , &{" "}
          <a href="https://www.shopify.ca/" target="_blank">
            Shopify
          </a>
          .
          <br />I ♡ CSS.
        </p>
        <Social />
      </Text>
    </Page>
  );
};

export default IndexPage;
