import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "./recoil/selectors";

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

export default CharacterCount;
