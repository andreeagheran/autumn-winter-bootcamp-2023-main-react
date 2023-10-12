import React from "react";
import { StyledFooter } from "./styled";

const Footer = ({ children }) => {
  return (
    <StyledFooter>
      {children}
    </StyledFooter>
  )
}

export default Footer;