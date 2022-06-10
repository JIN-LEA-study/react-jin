import React, { useState } from "react";
import FlashcardList from "../components/FlashcardList";

const List = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <div>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 1 + 1?",
    answer: "2",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    answer: "4",
    options: ["1", "2", "3", "4"],
  },
];

export default List;
