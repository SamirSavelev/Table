import styled from "styled-components";
import { ROW_HEIGHT } from "./utils";
import Text from "@components/Text";

const Styles = styled.div<{
  selectedRows?: boolean;
}>`
  width: 100%;
  display: inline-block;
  width: -webkit-fill-available;

  .table {
    max-width: 100%;
    border-spacing: 0;
    font-size: 13px;
    line-height: 12px;
    .body {
      position: relative;
      padding-top: 65px;
      .tr {
        &:hover {
          background-color: ${({ theme }) => theme.lightGrey4} !important;
        }
      }
    }

    .td:first-child,
    .th:first-child {
      text-align: start;
      font-weight: 600;
      overflow: hidden;
      white-space: nowrap;
    }

    .tr {
      min-width: 100%;
      align-items: stretch;
      height: ${() => ROW_HEIGHT}px;
      font-size: 13px !important;
      border-bottom: 1px solid ${({ theme }) => theme.borderColor};
      font-weight: 400;
    }

    .th,
    .td {
      display: flex !important;
      align-items: center !important;
      padding: 0 10px;
      overflow-y: hidden;

      &:hover {
        overflow-y: visible;
      }

      :last-child {
        border-right: 0;
      }
      .th:first-child {
        padding: 0 0 0 15px !important;
      }
      .resizer {
        display: inline-block;
        width: 2px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        touch-action: none;
      }
    }
    .header,
    .footer {
      font-weight: 600;
      z-index: 2;
      background-color: ${({ theme }) => theme.white};
      &:hover {
        background-color: ${({ theme }) => theme.white} !important;
      }
    }

    &.sticky {
      .header,
      .footer {
        width: 100%;
        position: sticky;
        z-index: 3;
        background-color: ${({ theme }) => theme.white};
        .tr {
          min-width: 100%;
          background-color: inherit;
        }
      }

      .header {
        z-index: 4;
        top: 0;
        background-color: ${({ theme }) => theme.white};
        height: auto;
        border-bottom: 1px solid ${({ theme }) => theme.borderColor};
      }
      [data-sticky-td] {
        background-color: inherit;
        z-index: 3;
        position: sticky;
      }
    }
  }
`;

const Container = styled.section`
  width: 100%;
  max-width: 1505px;
  padding: 0;
  background-color: ${({ theme }) => theme.white};
  border-radius: 2px;
  box-sizing: border-box;
  padding: 0;
`;

const Header = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 17px;
  color: ${({ theme }) => theme.grey2};
`;

export const TableStyles = {
  Styles,
  Container,
  Header,
};
