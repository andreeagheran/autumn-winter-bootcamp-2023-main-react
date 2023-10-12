import React from "react";
import { StyledHeader } from "./styled";
import Button from "../Button/Button";
import NavbarTitle from "./NavbarTitle";
import { ReactComponent as Logo } from "../../assets/img/ddroidd_logo.svg";

const navbarItems = [
  "Autumn",
  "Winter",
  "Bootcamp"
];

const Header = () => {
  const currentPage = window.location.pathname;
  const navigate = (pathname) => {
    window.location.pathname = pathname;
  }
  return (
    <StyledHeader>
      <Logo onClick={() => navigate('/')} style={{ marginLeft: '20px', width: '7rem', height: '5rem', cursor: 'pointer' }} />
      <NavbarTitle navbarItems={navbarItems} />
      {currentPage === '/' && (<Button onClick={() => navigate('/application-form')}>Join Us</Button>)}
    </StyledHeader>
  )
}


export default Header;