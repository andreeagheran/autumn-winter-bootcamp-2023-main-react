import React from "react";
import { NavbarItems, NavbarItemsContainer } from "./styled";

const NavbarTitle = ({ navbarItems }) => {
  return (
    <NavbarItemsContainer>
      {navbarItems.map(navbarItem => (
        <NavbarItems>{navbarItem}</NavbarItems>
      ))}
    </NavbarItemsContainer>
  )
}

export default NavbarTitle;