import React, { useState } from "react";
import styled from "styled-components";

import { Grid, Text } from "./elements";

const Flashcard = ({ flashcard }) => {
  const [show, setShow] = useState(true);
  return (
    <Grid
      width='20rem'
      height='8rem'
      padding='1rem'
      margin='1rem 0 1rem 0'
      border='1px solid var(--gray)'
      radius='10px'
      onClick={() => setShow(!show)}
      cursor='pointer'
      wordBreak='break-all'
    >
      {show === true ? (
        <Text>{flashcard.question}</Text>
      ) : (
        <Text>{flashcard.answer}</Text>
      )}
    </Grid>
  );
};

export default Flashcard;
