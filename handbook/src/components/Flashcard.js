import React, { useState } from "react";
import styled from "styled-components";

const Flashcard = ({ flashcard }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <CardWrapper onClick={() => setShow(!show)}>
        {show === true ? (
          <div>{flashcard.question}</div>
        ) : (
          <div>{flashcard.answer}</div>
        )}
      </CardWrapper>
    </>
  );
};

const CardWrapper = styled.div`
  border: 1px solid black;
  cursor: pointer;
`;

export default Flashcard;
