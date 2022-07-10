import React, { useState } from "react";

// recoil
import { useRecoilValue } from "recoil";
import { filterItems } from "../common/recoil/selectors";

// components
import { FlashcardList, Flashcard } from "../common/components";
import { Grid, Text } from "../common/components/elements";

const Cards = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const itemsState = useRecoilValue(filterItems);

  return (
    <Grid width='auto'>
      <Text margin='1rem 0 1rem 0' type='h1'>
        CARDS
      </Text>
      {!itemsState.length ? (
        <>
          <p style={{ textAlign: "center" }}>These cards are samples.</p>
          <FlashcardList flashcards={flashcards} />
        </>
      ) : (
        itemsState.map(flashcard => (
          <Flashcard flashcard={flashcard} key={flashcard.id} />
        ))
      )}
    </Grid>
  );
};

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 1 + 1?",
    answer: "2",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    answer: "4",
  },
];

export default Cards;
