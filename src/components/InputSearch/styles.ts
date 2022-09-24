import styled from "styled-components";

const InputContainer = styled.form<{ big?: boolean }>`
  display: flex;
  gap: 15px;
  border-radius: 8px;
  padding: 16px 20px;
  width: 400px;
  height: 62px;
  background-color: ${({ theme }) => theme.bgInput};
`;

const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.bgInput};
  ::placeholder {
    color: ${({ theme }) => theme.greyHover};
  }
`;

export const InputSearchStyles = { Input, InputContainer };
