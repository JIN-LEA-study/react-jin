import React from "react";
import styled from "styled-components";

const Grid = props => {
  const {
    children,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    width,
    height,
    margin,
    marginBottom,
    marginTop,
    padding,
    border,
    isFlex,
    onClick,
    cursor,
    wordBreak,
    radius,
    overflowY,
    minHeight,
  } = props;

  const styles = {
    children,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    width,
    height,
    margin,
    marginBottom,
    marginTop,
    padding,
    border,
    isFlex,
    onClick,
    cursor,
    wordBreak,
    radius,
    overflowY,
    minHeight,
  };

  return (
    <GridBox {...styles} onClick={onClick}>
      {children}
    </GridBox>
  );
};

Grid.defaultProps = {
  chidren: null,
  width: "100%",
  padding: false,
  margin: false,
  isFlex: false,
  onClick: () => {},
};

const GridBox = styled.div`
  display: ${props => props.display};
  ${props =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ""}
  ${props => (props.alignItems ? `align-items: ${props.alignItems};` : "")}
  ${props =>
    props.flexDirection ? `flex-direction: ${props.flexDirection};` : ""}  
  ${props => (props.width ? `width: ${props.width};` : "")}
  ${props => (props.height ? `height: ${props.height};` : "")}
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
  ${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props => (props.border ? `border: ${props.border};` : "")}
  ${props => (props.cursor ? `cursor: pointer;` : "")}
  ${props => (props.wordBreak ? `word-break: ${props.wordBreak};` : "")}
  ${props => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${props => (props.overflowY ? `overflow-y: ${props.overflowY};` : "")}
  ${props => (props.minHeight ? `min-height: ${props.minHeight};` : "")}
  // space-beteween
  ${props =>
    props.isFlex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
`;

export default Grid;
