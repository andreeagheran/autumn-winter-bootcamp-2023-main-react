import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 13px;
  width: fit-content;
  min-height: 15px;
  background-color: #FCD400;
  padding: 6px 45px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #FF7700;
  }
  ${props => props.shadow && `
    box-shadow: 5px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `}
`