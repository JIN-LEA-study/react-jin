import React from "react";
import styled from "styled-components";

const Template = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

export default Template;
