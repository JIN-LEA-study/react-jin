import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "./elements";

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
          <Grid width='auto' padding='0.5rem'>
            <NavLink
              to={menu.path}
              key={index}
              className='active'
              style={({ isActive }) => ({
                color: isActive ? "var(--orange)" : "var(--gray)",
              })}
            >
              <span>{menu.name}</span>
            </NavLink>
          </Grid>
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
  border: 1px solid var(--gray);
  justify-content: space-between;
  @media (max-width: 320px) {
    display: none;
  }
`;

export default Navbar;
