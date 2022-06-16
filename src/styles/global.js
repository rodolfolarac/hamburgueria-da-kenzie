import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    button {
        cursor: pointer;
    }
    img {
        max-width: 100%;
    }

`;

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 20px;
  background-color: #93d7af;
  border: none;
  border-radius: 8px;
  color: #fff;
  &:hover {
    background-color: #27ae60;
  }
`;

export const StyledContainerSearch = styled.div`
  border: 2px solid #e0e0e0;
  padding: 10px;
  display: flex;
`;
