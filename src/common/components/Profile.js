import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { ProfileImage } from "../styles/styled-components";

export const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Carolyn.png" }) {
        childImageSharp {
          fixed(width: 218, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <ProfileImage>
      <Img fixed={data.file.childImageSharp.fixed} alt="Carolyn" />
    </ProfileImage>
  );
};
