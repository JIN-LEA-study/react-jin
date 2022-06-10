import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards }) => {
  return (
    <div className='card-grid'>
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />; // 요소만 다시 렌더링
      })}
    </div>
  );
};

export default FlashcardList;
