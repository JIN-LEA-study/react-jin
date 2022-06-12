import React, { useState } from "react";
import FlashcardList from "../components/FlashcardList";

const Cards = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div>
      <h1>CARDS</h1>
      <FlashcardList flashcards={flashcards} />
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
