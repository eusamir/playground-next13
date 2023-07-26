"use client";
import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Estilos globais */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 8px;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;