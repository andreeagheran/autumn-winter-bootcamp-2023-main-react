import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownHeader = styled.div`
  cursor: pointer;
  height: 24px;
  border: 1px solid #003C55;
  background: #FFF;
  box-shadow: 5px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 3px 5px;
`;

export const DropdownListContainer = styled.div`
  padding: 5px 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  z-index: 1000;
  background-color: #fff;
  max-height: 85px;
  overflow: scroll;
`;

export const DropdownListItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
