import React from "react";

import { PageContainer, PageCard } from "../styles/styled-components";

export const Page = ({ children }) => {
  return (
    <PageContainer>
      <PageCard>{children}</PageCard>
    </PageContainer>
  );
};
