import Image from "next/image";
import styled from "styled-components";
import noSort from "@assets/table/noSort.svg";
import sortDown from "@assets/table/sortDown.svg";
import sortUp from "@assets/table/sortUp.svg";

const SortedIcon: React.FC<{
  isSorted: boolean;
  isSortedDesc: boolean;
}> = ({ isSorted, isSortedDesc }) => {
  return (
    <IconWrapper>
      {!isSorted && <Image src={noSort} alt="" />}
      {isSorted &&
        (isSortedDesc ? (
          <Image src={sortDown} alt="" />
        ) : (
          <Image src={sortUp} alt="" />
        ))}
    </IconWrapper>
  );
};

const IconWrapper = styled.span`
  margin-top: 10px;
  margin-left: 10px;
  height: 20px;
  width: 20px;
`;

export default SortedIcon;
