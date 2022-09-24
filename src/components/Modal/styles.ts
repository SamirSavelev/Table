import styled, { css } from "styled-components";

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s ease-out;
  z-index: -1;
  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      z-index: 10000;
    `};
`;

const Content = styled.div`
  z-index: 10001;

  border-radius: 10px;

  position: relative;

  background-color: ${({ theme }) => theme.white};
  padding: 25px 40px 40px 40px;
  max-width: 566px;

  max-height: fit-content;
  overflow: visible;
`;

const Close = styled.button`
  position: absolute;
  right: 16px;
  top: 12px;
`;

export const ModalStyles = {
  Wrapper,
  Content,
  Close,
};
