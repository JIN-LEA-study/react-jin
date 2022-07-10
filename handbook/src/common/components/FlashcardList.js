import React from "react";
import Grid from "./elements/Grid";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards }) => {
  return (
    <Grid>
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />; // 요소만 다시 렌더링
      })}
    </Grid>
  );
};

export default FlashcardList;
