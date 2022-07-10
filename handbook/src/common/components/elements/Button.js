import React from "react";
import styled from "styled-components";

const Button = props => {
  const { onClick, children, margin, width, padding, bg, cursor, radius } =
    props;

  const styles = {
    margin,
    width,
    padding,
    bg,
    cursor,
    radius,
  };

  return (
    <ElButton {...styles} onClick={onClick}>
      {children}
    </ElButton>
  );
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
  margin: false,
  width: "100%",
  padding: "1rem 0",
  radius: "10px",
};

const ElButton = styled.button`
  width: ${props => props.width};
  padding: ${props => props.padding};
  border: none;
  color: ${props => props.color};
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props => (props.bg ? `background-color: ${props.bg};` : "")}
  ${props => (props.cursor ? `cursor: pointer;` : "")};
  ${props => (props.radius ? `border-radius: ${props.radius};` : "")}
`;

export default Button;
