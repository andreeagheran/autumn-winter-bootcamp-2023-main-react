import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 75px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 70%;
  height: fit-content;
  min-height: 400px;
  margin: 0 auto;
  background-color: #f4f5f8;
`;

export const FormContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 75%;
  margin: 0 auto;
`

export const PageTitle = styled.span`
  display: block;
  color: #003C55;
  font-family: Open Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const FormSubTitle = styled.span`
  color: #003C55;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 2.75;
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const FieldRow = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  gap: 25px;
  margin-bottom: 15px;
`;

export const InputField = styled.input`
  padding: 3px 5px;
  height: 24px;
  border: 1px solid #003C55;
  background: #FFF;
  box-shadow: 5px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
`

export const InputLabel = styled.span`
  color: #003C55;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ButtonWrapper = styled.div`
  margin: 35px 0 0;
  display: flex;
  width: 100%;
  justify-content: end;
`


export const FieldError = styled.span`
  position: absolute;
  top: 2px;
  left: 5px;
  color: red;
  font-size: 12px;
`

export const ErrorWrapper = styled.div`
  position: relative;
`;
