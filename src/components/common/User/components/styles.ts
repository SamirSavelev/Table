import styled from "styled-components";

const Ellipse = styled.div`
  background-color: ${({ theme }) => theme.logo};
  height: 52px;
  width: 52px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.logoHover};
  }
  > * {
    cursor: pointer;
  }
`;

export const UserComponentsStyles = { Ellipse };
