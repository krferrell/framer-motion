import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavBar>
      <Link to="/" exact>
        <span>Home</span>
      </Link>

      <Link to="styled" exact>
        <span>Styled Component Example</span>
      </Link>
      <Link to="/modal" exact>
        <span>Modal</span>
      </Link>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.div`
  width: 100vw;
  height: 100px;
  background-color: lavender;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  span {
    margin: 10px 40px;
  }
`;
