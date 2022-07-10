import React from "react";
import styled from "styled-components";

const Template = ({ children }) => {
  return (
    <MainBox>
      <Main>{children}</Main>
    </MainBox>
  );
};

const MainBox = styled.main`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 100%;
  padding-top: 3rem;
  @media (min-width: 1200px) {
    max-width: 1024px;
  }
`;

export default Template;
