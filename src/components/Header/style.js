import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  padding: 14px;
  background-color: #f5f5f5;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
