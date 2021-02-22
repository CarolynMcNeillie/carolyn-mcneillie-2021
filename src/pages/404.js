import React from "react";
import "normalize.css/normalize.css";
import { Helmet } from "react-helmet";

import { Page } from "../common/components/Page";
import { Social } from "../common/components/Social";

const NotFoundPage = () => {
  return (
    <Page>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <title>404 — Carolyn McNeillie</title>
        <meta
          name="description"
          content="I am a Senior Web Developer at TWG with a background in design, marketing, e-commerce, book publishing, mural painting, and art restoration."
        ></meta>
        <link rel="canonical" href="http://carolynmcneillie.com" />
      </Helmet>
      <div>
        <h1>Oops!</h1>
        <h2>
          This page doesn't exist. <br />
          <a href="/">Go home</a>, or visit me on one of these ↓
        </h2>
      </div>
      <Social />
    </Page>
  );
};

export default NotFoundPage;
