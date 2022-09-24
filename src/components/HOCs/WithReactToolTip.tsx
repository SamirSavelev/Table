import { FC } from "react";
import ReactTooltip from "react-tooltip";
import { IToolTips } from "@interfaces";
import { TooltipStyles } from "./styles";

const { FlexWrapper, StyledFiInfo, ToolTipWrapper } = TooltipStyles;

const WithToolTip: FC<IToolTips> = ({ id, children, toolTip }) => {
  return (
    <FlexWrapper>
      {children}
      <StyledFiInfo size={16} data-tip={toolTip} data-for={id} />
      <ToolTipWrapper
        as={ReactTooltip}
        html={true}
        id={id}
        place="bottom"
        type="light"
        offset={{ top: 10, bottom: 20 }}
        effect="solid"
      />
    </FlexWrapper>
  );
};

export default WithToolTip;
