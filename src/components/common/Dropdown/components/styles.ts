import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 13px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
  > * {
    cursor: pointer;
    color: ${({ theme }) => theme.dropdownItem};
  }
  &:hover {
    background-color: ${({ theme }) => theme.lightGreyHover};
    > * {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const DropdownItemStyles = { Container };
