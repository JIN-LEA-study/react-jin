import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const menus = [
    { name: "CARDS", path: "/card" },
    { name: "NEW", path: "/new" },
    { name: "PRACTICE", path: "/practice" },
  ];
  return (
    <Menu>
      {menus.map((menu, index) => {
        return (
          <LinkWrapper>
            <NavLink
              to={menu.path}
              key={index}
              style={{ color: "gray", textDecoration: "none" }}
            >
              <span>{menu.name}</span>
            </NavLink>
          </LinkWrapper>
        );
      })}
    </Menu>
  );
};

const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 15rem;
  padding: 0.2rem;
  border-radius: 10px;
  border: 1px solid gray;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  :hover :first-child {
    color: #ffa500;
  }
  padding: 0.5rem;
  /* border: 1px solid red; */
`;

export default Navbar;
