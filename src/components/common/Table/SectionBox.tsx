import styled, { css } from "styled-components";

interface BoxInterface {
  noPadding?: boolean;
  loading?: boolean;
  noHorPadding?: boolean;
  plusMunisModal?: boolean;
  noHeader?: boolean;
  border?: boolean;
  width?: string;
  style?: Object;
}

const Overlay = styled.div<{ loading?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.grey2};
  transition: 1s ease-out;
  opacity: ${({ loading }) => (loading ? 0.8 : 0)};
`;

const SectionBoxStyled = styled.section<BoxInterface>`
  max-width: ${({ width }) => (width ? width : "100%")};
  width: 100%;
  padding: ${(props) =>
    props.noPadding || props.plusMunisModal
      ? "0"
      : props.noHorPadding
      ? "30px 0 0 0"
      : props.noHeader
      ? "0 30px 0 30px"
      : "30px 35px 35px 35px"};
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;

  ${(props) =>
    props.border == false
      ? null
      : css`
          border: 1px solid ${({ theme }) => theme.lightGrey};
        `}

  /* overflow: hidden; */
  box-sizing: border-box;

  max-width: 1100px;
`;

const SectionBox: React.FunctionComponent<BoxInterface> = ({
  children,
  border = true,
  ...props
}) => {
  return (
    <SectionBoxStyled border={border} {...props}>
      {children}
      {props.loading && <Overlay {...props} />}
    </SectionBoxStyled>
  );
};

export default SectionBox;
