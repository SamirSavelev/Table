import { ReactNode } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { FiInfo } from "react-icons/fi";
import { WithToolTipProps } from "../interfaces";

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;
`;
const ToolTipWrapper = styled.div`
  background: #ffffff !important;
  opacity: 1 !important;
  border-radius: 12px !important;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.05);
  font-size: 13px !important;
  font-weight: 400 !important;
  z-index: 99999;
  max-width: 500px;
  padding: 15px 20px !important;

  font-weight: 400 !important;

  #optimization {
    h3 {
      font-weight: 600;
    }
    b {
      font-weight: 500;
      display: inline-block;
      width: 150px;
    }
    * {
      line-height: 160% !important;
    }
  }

  #optimization-grid {
    margin-top: 10px;
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 20px;
    column-gap: 0px;
  }
`;

const StyledFiInfo = styled(FiInfo)`
  margin-left: 10px;
  color: ${({ theme }) => theme.tooltip};
  transition: 0.2s ease-out;
  &:hover {
    color: ${({ theme }) => theme.grey2};
  }
`;

const WithToolTip = (props: WithToolTipProps) => {
  return (
    <FlexWrapper>
      {props.children}
      <StyledFiInfo size={16} data-tip={props.toolTip} data-for={props.id} />
      <ToolTipWrapper
        as={ReactTooltip}
        html={true}
        id={props.id}
        place="bottom"
        type="light"
        offset={{ top: 10, bottom: 20 }}
        effect="solid"
      />
    </FlexWrapper>
  );
};

export default WithToolTip;
