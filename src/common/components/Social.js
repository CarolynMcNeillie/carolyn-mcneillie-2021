import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faTwitterSquare,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { SocialList, SocialItem } from "../styles/styled-components";

export const Social = () => {
  return (
    <SocialList>
      <SocialItem>
        <a href="https://github.com/CarolynMcNeillie">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://twitter.com/carolynalive">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://medium.com/@carolynmcneillie">
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://www.linkedin.com/in/carolyn-mcneillie/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </SocialItem>
    </SocialList>
  );
};
