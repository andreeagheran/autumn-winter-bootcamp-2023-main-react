import styled from "styled-components";

export const StyledHeader = styled.div`
  background: #003C55;
  display:flex;
  align-items: center;
  justify-content: center;
  height: 12vh;
  padding: 0 10px;
`;

export const NavbarItemsContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
`;

export const NavbarItems = styled.div`
  color: #FFF;
  font-family: Open Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::after {
    content: '-';
    margin: 0 10px;
  }

  &:last-child::after {
    content: '';
  }
`;