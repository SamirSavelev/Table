import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 270px calc(100% - 270px);
  grid-template-areas: "s c";
  gap: 10px;
`;

export const Container = styled.div`
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 50px 20px 20px;
  grid-area: c;
`;
