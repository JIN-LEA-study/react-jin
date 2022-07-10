import React, { useState } from "react";
import styled from "styled-components";

// recoil
import { useSetRecoilState } from "recoil";
import { items } from "../common/recoil/atoms";

// components
import { Button, Grid, Text } from "../common/components/elements";

let id = 0;
const getId = () => {
  return id++;
};

const New = () => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const setItems = useSetRecoilState(items);

  const addItem = e => {
    e.preventDefault();
    if (!inputValue) {
      window.alert("Enter your Question.");
      return;
    }
    if (!textareaValue) {
      window.alert("Enter your Answer.");
      return;
    }
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
    <Grid isFlex flexDirection='column'>
      <Text margin='1rem 0 1rem 0' type='h1'>
        NEW
      </Text>

      <Grid width='70%' marginBottom='1rem'>
        <Label>Question</Label>
        <Grid marginTop='0.5rem'>
          <QuestionInput
            type='text'
            value={inputValue}
            onChange={onChangeQuestion}
          />
        </Grid>
      </Grid>

      <Grid width='70%' marginBottom='1rem'>
        <Label>Answer</Label>
        <Grid marginTop='0.5rem'>
          <AnswerInput
            type='text'
            value={textareaValue}
            onChange={onChangeAnswer}
          />
        </Grid>
      </Grid>
      <Button width='70%' onClick={addItem} cursor>
        Add
      </Button>
    </Grid>
  );
};

const Label = styled.label`
  font-size: 1rem;
  color: var(--black);
`;

const QuestionInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 10px;
  font-size: 1rem;
  :focus {
    outline: 1.5px solid var(--gray);
  }
`;

const AnswerInput = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 10px;
  resize: none;
  font-size: 1rem;
  font-family: sans-serif;
  :focus {
    outline: 1.5px solid var(--gray);
  }
`;

export default New;
