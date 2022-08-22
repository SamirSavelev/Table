import styled, { css } from "styled-components";
import { CommonUseComponents } from "../../../../styles/CommonUseComponents";
import Button from "../../Button";

const { Row } = CommonUseComponents;

const Container = styled(Row)<{ id?: string }>`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.lightGrey3};
  border-radius: 8px;
  width: ${({ id }) => (!(id == "calendar") ? "290px" : "220px")};
  height: 62px;
  padding: 9px 13px;
  cursor: pointer;
`;

const Arrow = styled.div<{ rotate?: boolean }>`
  transition: 0.2s ease-out;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(0.5turn);
    `}
`;

const Popup = styled.div<{ id?: string }>`
  position: absolute;
  top: 235px;
  width: ${({ id }) => (!(id == "calendar") ? "290px" : "220px")};
  height: 221px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 5px 18px rgba(40, 41, 61, 0.07);
  border-radius: 8px;
  overflow-y: scroll;
  z-index: 9;
`;

const Input = styled.input<{ isShow?: boolean; id?: string }>`
  cursor: pointer;
  width: ${({ id }) => (!(id == "calendar") ? "250px" : "150px")};
  background-color: ${({ theme }) => theme.white};
  font-size: 14px;
  color: ${({ theme }) => theme.grey2};
  ${({ isShow }) =>
    isShow &&
    css`
      color: ${({ theme }) => theme.greyLink};
    `}
`;

const Calendar = styled.div`
  position: absolute;
  top: 235px;
  margin-left: -91px;
  width: 311px;
  height: 365px;
  background: #ffffff;
  box-shadow: 0px 7px 20px rgba(40, 41, 61, 0.08);
  border-radius: 2px;
  z-index: 999;
`;

const cssStyle = `
  .dialog-sheet {
    background-color: white;
    box-shadow: 0px 3px 20px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 2;
  }
  .rdp-button:focus:not([disabled]) ,

  .rdp-button:active:not([disabled]) {
    border: none;
    
  }
  .rdp-caption {
    padding-bottom: 15px;
  }
  .rdp-day_range_start,
  .rdp-day_range_end,
  .rdp-day_range_end:focus:not([disabled]),
  .rdp-day_range_end:hover:not([disabled]){
    background:#2A2E37 ;
  }, 

 
  .rdp-day_range_start:focus:not([disabled]),
  .rdp-day_range_start:active:not([disabled]){
    background: #2A2E37;
    border-radius: 2px;
    color: white;
  }
  .rdp-row {
    margin-bottom: 10px;
  }
  .rdp-head {
    color: #7E818C;
  }
  .rdp-head_cell {
      font-family: 'Nunito' !important;
      font-style: normal !important;
      font-weight: 400 !important;
      font-size: 13px !important;
      text-transform: capitalize !important;
      color: #333333;
  }
  .rdp-tbody {
    font-weight: 400;
    border-bottom: 1px solid #ECECEC;
  }
  
  .rdp-button {
    width: 34px;
    height: 32px;
    span {
      font-size: 13px;
    }
  }
  .rdp-button:not([disabled]) {
    font-weight: 400 !important;
    font-size: 13px !important;
    line-height: 18px !important;
    color: #333333;
    opacity: 0.6 !important;

  }
  .my-selected:not([disabled]) { 
    background: #2A2E37 !important;
    border-radius: 2px;
    color: white  !important;
    opacity: 1 !important;
  }
  .rdp-button:hover:not([disabled]) {
      background: #2A2E37 !important;
      border-radius: 2px !important;;
      color: white !important;;
      opacity: 1 !important;
  }
  .rdp-nav {
    .rdp-nav_button_previous {
    position: relative;
    left: 0;
  }

    button.rdp-button_reset .rdp-button .rdp-nav_button .rdp-nav_button_next {
    position: relative;
    right: 0;
  }
  }
  .rdp-caption_label {
    font-weight: 400 !important;
    text-transform: capitalize;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: #000000;
    grid-area: center !important;
  }
  
}`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const FooterButton = styled(Button)<{ noBg?: boolean }>`
  padding: 8px 27px;
  background-color: ${({ theme, noBg }) => (noBg ? "transparent" : theme.grey)};
  width: max-content;
  > * {
    cursor: pointer;
    color: ${({ theme, noBg }) => (noBg ? theme.lightGrey : theme.white)};
  }
`;
export const DropdownStyles = {
  Container,
  Arrow,
  Popup,
  Input,
  Calendar,
  cssStyle,
  Footer,
  FooterButton,
};
