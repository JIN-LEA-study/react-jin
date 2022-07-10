import React, { useState } from "react";
import styled from "styled-components";

// recoil
import { useSetRecoilState } from "recoil";
import { items } from "../common/recoil/atoms";

// components
import { Grid, Text } from "../common/components/elements";

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
    <Grid
      width='auto'
      display='flex'
      justifyContent='center'
      flexDirection='column'
    >
      <Text margin='1rem 0 1rem 0' type='h1'>
        NEW
      </Text>
      <Grid marginBottom='1rem'>
        <Label>Question</Label>
        <Grid marginTop='0.5rem'>
          <QuestionInput
            type='text'
            value={inputValue}
            onChange={onChangeQuestion}
          />
        </Grid>
      </Grid>

      <Grid marginBottom='1rem'>
        <Label>Answer</Label>
        <Grid marginTop='0.5rem'>
          <AnswerInput
            type='text'
            value={textareaValue}
            onChange={onChangeAnswer}
          />
        </Grid>
      </Grid>
      <button onClick={addItem}>Add</button>
    </Grid>
  );
};

const Label = styled.label`
  font-size: 1rem;
  color: var(--black);
`;

const QuestionInput = styled.input`
  width: 20rem;
  height: 2rem;
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 10px;
  :focus {
    outline: 1.5px solid var(--gray);
  }
`;

const AnswerInput = styled.textarea`
  width: 20rem;
  height: 8rem;
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 10px;
  resize: none;
  :focus {
    outline: 1.5px solid var(--gray);
  }
`;

export default New;
