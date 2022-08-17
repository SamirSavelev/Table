import { ReactNode } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { TableState } from "react-table";
import styled, { css } from "styled-components";

export const ROW_HEIGHT = 50;

export const _bindScrollCallback = (
  element,
  callback,
  callbackForScroll = () => {}
) => {
  if (element) {
    element.addEventListener("scroll", callbackForScroll, false);
    element.addEventListener("mousewheel", callback, false);
    element.addEventListener("DOMMouseScroll", callback, false);
  }
};
export const _unBindScrollCallback = (
  element,
  callback,
  callbackForScroll = () => {}
) => {
  if (element) {
    element.removeEventListener("scroll", callbackForScroll, false);
    element.removeEventListener("mousewheel", callback, false);
    element.removeEventListener("DOMMouseScroll", callback, false);
  }
};

// styles
export const Styles = styled.div<{
  grayHeader?: boolean;
  noHorPadding?: boolean;
  selectedRows?: boolean;
  chart?: boolean;
  noHeader?: boolean;
  plusMunisModal?: boolean;
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
      padding-top: 50px;
    }
    .td:first-child,
    .th:first-child {
      text-align: start;
      font-weight: 600;
      overflow: hidden;
      white-space: nowrap;
      padding-left: ${({ noHorPadding }) =>
        noHorPadding ? "30px !important" : 0};

      span {
        display: inline-block;
        position: relative;
        top: 4px;
        align-items: center;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      ${(props) =>
        !props.plusMunisModal &&
        css`
          &:hover {
            overflow: visible;
            z-index: 9 !important;
            * {
              cursor: default;
              z-index: 10;
            }
            span {
              position: relative;
              left: 0px;
              z-index: 11;
              overflow: visible;
              text-overflow: initial;
            }
          }
        `}
    }
    .tr {
      min-width: 100%;
      align-items: stretch;
      height: ${() => ROW_HEIGHT}px;
      font-size: ${({ plusMunisModal }) =>
        plusMunisModal ? "14px" : "12px"} !important;
      * {
        font-size: ${({ plusMunisModal }) =>
          plusMunisModal ? "14px" : "12px"} !important;
      }
      :hover {
        background-color: blue;
      }

      :last-child {
        .td {
          height: 46px;
          padding-bottom: 15px !important;
          border-bottom: 0;
          overflow: hidden;
        }
      }
    }

    .th,
    .td {
      display: flex !important;
      align-items: center !important;
      padding: 0 15px;
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
        background: ${({ theme }) => theme.tableBorder};
        width: 2px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${"" /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;
      }
    }
    .td:last-child {
      padding: ${({ chart }) => (chart ? 0 : "8px")} !important;
      opacity: 0.7;
      box-shadow: 0px -5px 15px rgba(255, 255, 255, 0.05) !important;
    }
    .header,
    .footer {
      font-weight: 600;
      z-index: 2;
      background-color: ${({ theme }) => theme.white};
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
        background-color: ${({ theme, grayHeader }) =>
          grayHeader ? theme.grayHover : theme.white};
        height: ${({ grayHeader }) => (grayHeader ? "50px" : "auto")};
        box-shadow: ${({ grayHeader }) =>
          grayHeader ? "none" : "0px 5px 10px rgba(0, 0, 0, 0.05)"} !important;
        .tr:first-child {
          .th {
            height: ${({ selectedRows, grayHeader }) =>
              selectedRows || grayHeader ? "50px" : "auto"};
            font-size: 20px;
          }
        }
        ${({ noHeader }) =>
          noHeader &&
          css`
            display: none;
          `};
      }
      .footer {
        z-index: 5;
        bottom: 0;
        .tr:first-child {
          box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.05) !important;
        }
      }

      [data-sticky-td] {
        background-color: inherit;
        z-index: 3;
        position: sticky;
      }

      ${(props) =>
        !props.plusMunisModal &&
        css`
          [data-sticky-last-left-td] {
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
          }
        `}
    }
  }
`;
export const ValueGeneralCss = css`
  font-weight: 500;
  svg {
    width: 10px;
    height: 10px;
    position: relative;
    top: -1px;
    margin-right: 1px;
  }
  span {
    font-size: 8px;
    font-weight: 700;
    line-height: 10px;
    vertical-align: center;
  }
`;
export const TableHeader = styled.div<{ noHorPadding?: boolean }>`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: ${({ noHorPadding }) => (noHorPadding ? "0 30px" : 0)};
  justify-content: space-between;
  gap: 30px;
`;

export const ArrowSection = styled.span<{ positive?: boolean }>`
  color: ${({ theme, positive }) => (positive ? theme.green : theme.red)};
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin-left: 8px;
  svg {
    height: 13px;
  }
`;

export const MarginedSpan = styled.span`
  margin-left: 10px;
`;

export const AlignedLink = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  max-width: 100%;
`;

// table
export const CellElement: React.FC<{ item: any }> = ({ item }) => (
  <>
    <span>
      {item?.value ||
        item?.average_position ||
        item?.request_visibility ||
        "ー"}
    </span>
    {typeof item?.increased !== "boolean" ? null : (
      <ArrowSection positive={item.increased}>
        {item?.increased ? <BsArrowUp /> : <BsArrowDown />}
        <span>{item?.difference}</span>
      </ArrowSection>
    )}
  </>
);

export const defaultColumn = () => ({
  minWidth: 50,
  width: 150,
});

// functions
export const getItemSize = (h: number) => {
  const height = h * ROW_HEIGHT;
  if (height > 400) {
    return 400;
  } else {
    return height;
  }
};

export interface FooterRow {
  [propName: string]: string;
}

export interface ITable {
  isLoading?: boolean;
  title?: string;
  selectRows?: boolean;
  error?: string | null;
  setCheckedRows?: any;
  subtitle?: string | ReactNode;
  filename?: string;
  extraContent?: JSX.Element;
  buttonText?: string;
  data: any;
  chart?: boolean;
  exportStyle?: any;
  scrollEnd?: boolean;
  height?: number;
  footerData?: any[];
  columns: any;
  tableData: any;
  tooltip?: string | ReactNode;
  bottomContent?: ReactNode;
  hideExcel?: boolean;

  type?: string;

  initialState?: Partial<TableState<object>>;
  buttonNew?: string;
  onClickButtonNew?: any;
  modal?: boolean;
  noHorPadding?: boolean;
  noPadding?: boolean;
  grayHeader?: boolean;
  onClickButton?: (serachValue: string) => void; // Пока не используется, нужно для фильтрации таблицы
  onChangeSearch?: () => void;
  noExport?: boolean;
  promotion?: boolean;
  plusMunisModal?: boolean;
  noHeader?: boolean;
}
