import Image from "next/image";
import { FC } from "react";
import styled, { css } from "styled-components";
import down from "../../../../assets/down.svg";

interface IIcon {
  rotate: boolean | undefined;
}
const ExpandIcon: FC<IIcon> = ({ rotate }) => {
  return (
    <StyledCircle rotate={rotate}>
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
  transition: 0.5s ease-out;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(0.5turn);
    `}
`;
export default ExpandIcon;
