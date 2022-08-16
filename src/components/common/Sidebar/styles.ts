import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  bottom: 0;
  width: 270px;
  padding: 40px 30px;
  background-color: ${({ theme }) => theme.white};
`;

export const SidebarStyled = { Wrapper };
