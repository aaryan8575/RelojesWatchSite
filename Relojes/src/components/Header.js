import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return <MainHeader>
    <NavLink to="/">
      <img style={{height:"138px",position:"relative",top:"20px"}} src="./images/Relojes_logo.png" alt="logo" />
    </NavLink>
    <Nav />
  </MainHeader>;
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;
export default Header;


