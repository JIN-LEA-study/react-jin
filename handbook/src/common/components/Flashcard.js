import React, { useState } from "react";

import { Grid, Text } from "./elements";

const Flashcard = ({ flashcard }) => {
  const [show, setShow] = useState(true);

  return (
    <Grid
      width='70%'
      minHeight='10rem'
      padding='1rem'
      margin='1rem 0 1rem 0'
      border='1px solid var(--gray)'
      radius='10px'
      onClick={() => setShow(!show)}
      wordBreak='break-all'
      cursor
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
