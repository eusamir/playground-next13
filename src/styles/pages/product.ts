"use client";
import styled from "styled-components";

export const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 4rem;

  max-width: 1180px;
  margin: 0 auto;
`
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 576px;
  height: calc(656px);
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img{
    object-fit: cover;
  }
`
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-size: 2rem;
    color:#C4C4CC;
  }
  span{
    margin-top: 1rem;
    display: block;
    font-size: 2rem;
    color: #1ea483 ;
  }
  p{
    margin-top: 2.5rem;
    font-size: 1rem;
    line-height: 1.6rem;
    color: #C4C4CC;
  }
  button{
    margin-top:auto;
    background-color: #00875F;
    color:#ffff;
    border-radius: 8px;
    padding:1.25rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    border: none;

    &:disabled{
      opacity: 0.6;
      cursor:not-allowed;
    }

    &:not(:disabled):hover {
      background-color:#00B37E ;
    }
  }

`