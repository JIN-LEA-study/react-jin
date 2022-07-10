import React from "react";
import styled from "styled-components";

const Text = props => {
  const {
    children,
    position,
    top,
    width,
    margin,
    color,
    size,
    bold,
    letterSpacing,
    lineHeight,
    center,
    whiteSpace,
    opacity,
    type,
  } = props;

  const styles = {
    children,
    position,
    top,
    width,
    margin,
    color,
    size,
    bold,
    letterSpacing,
    lineHeight,
    center,
    whiteSpace,
    opacity,
    type,
  };

  if (type === "h1") {
    return <HeadBox {...styles}>{children}</HeadBox>;
  }

  return <TextBox {...styles}>{children}</TextBox>;
};

Text.defaultProps = {
  children: null,
  color: "#3A3A3A",
  size: "14px",
};

const HeadBox = styled.h1`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  color: ${props => props.color};
  font-size: 2rem;
`;

const TextBox = styled.p`
  position: ${props => props.position};
  top: ${props => props.top};
  width: ${props => props.width};
  margin: ${props => props.margin};
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  font-size: ${props => props.size};
  font-weight: ${props => (props.bold ? "600" : "400")};
  ${props =>
    props.letterSpacing ? `letter-spacing: ${props.letterSpacing};` : ""}
  ${props => (props.lineHeight ? `line-height: ${props.lineHeight};` : "")}
  ${props => (props.center ? `text-align: center;` : "")}
  ${props => (props.whiteSpace ? `white-space: ${props.whiteSpace};` : "")}
`;

export default Text;
