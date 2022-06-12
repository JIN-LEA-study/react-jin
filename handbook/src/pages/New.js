import React, { useState } from "react";

// recoil
import { useSetRecoilState } from "recoil";
import { items } from "../recoil/atoms";

let id = 0;
const getId = () => {
  return id++;
};

const New = () => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const setItems = useSetRecoilState(items);

  const addItem = () => {
    setItems(oldList => [
      ...oldList,
      {
        id: getId(),
        question: inputValue,
        answer: textareaValue,
      },
    ]);
    setInputValue("");
    setTextareaValue("");
  };

  const onChangeQuestion = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onChangeAnswer = ({ target: { value } }) => {
    setTextareaValue(value);
  };

  return (
    <div>
      <h1>NEW</h1>
      <input type='text' value={inputValue} onChange={onChangeQuestion} />
      <textarea type='text' value={textareaValue} onChange={onChangeAnswer} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default New;
