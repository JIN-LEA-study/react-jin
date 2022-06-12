import React, { useState } from "react";

// recoil
import { useRecoilValue } from "recoil";
import { filterItems } from "../recoil/selectors";

// components
import FlashcardList from "../components/FlashcardList";
import Flashcard from "../components/Flashcard";

const Cards = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const itemsState = useRecoilValue(filterItems);

  return (
    <div>
      <h1>CARDS</h1>
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
    </div>
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
