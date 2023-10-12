import React from "react";
import { StyledButton } from "./styled";

const Button = ({ onClick, children, shadow }) => {
  return (
    <StyledButton shadow onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;
