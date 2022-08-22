import Image from "next/image";
import { FC, useEffect } from "react";
import styled, { css } from "styled-components";
import down from "../../../../assets/down.svg";
import { CloseRow, OpenRow } from "../../../../features/table/table-api-slice";
import { useAppDispatch } from "../../../../hooks";

interface IIcon {
  isExpanded: boolean | undefined;
  index: number;
}
const ExpandIcon: FC<IIcon> = ({ isExpanded, index }) => {
  useEffect(() => {
    if (isExpanded) {
      dispatch(OpenRow(index));
    } else {
      dispatch(CloseRow(index));
    }
  }, [isExpanded]);

  const dispatch = useAppDispatch();
  return (
    <StyledCircle rotate={isExpanded}>
      <Image src={down} alt="" />
    </StyledCircle>
  );
};

const StyledCircle = styled.div<{ rotate?: boolean }>`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.lightGrey3};
  transition: 0.2s ease-out;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(0.5turn);
    `}
`;
export default ExpandIcon;
