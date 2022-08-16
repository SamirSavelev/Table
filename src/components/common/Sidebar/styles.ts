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
  padding: 40px 10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 5px 18px rgba(40, 41, 61, 0.07);
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin: 40px 0 30px 0;
  padding: 0 20px 0 20px;
`;

const Wave = styled.div`
  margin: 15px 0 15px 0;
`;
export const SidebarStyled = { Wrapper, ButtonContainer, Wave };
