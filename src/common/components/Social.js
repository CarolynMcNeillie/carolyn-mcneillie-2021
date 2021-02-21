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
        <a
          href="https://github.com/CarolynMcNeillie"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
          <span>GitHub</span>
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="https://twitter.com/carolynalive"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitterSquare} />
          <span>Twitter</span>
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="https://medium.com/@carolynmcneillie"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} />
          <span>Medium</span>
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="https://www.linkedin.com/in/carolyn-mcneillie/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
      </SocialItem>
    </SocialList>
  );
};
