import styled, { css } from "styled-components";

export const Buttons = styled.button`
  background-color: transparent;
  color: teal;
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.3s;
  cursor: pointer;
 

  ${({disabled})=> disabled && css`
  color: #ccc;
  cursor: default;
  `}

  @media (max-width: 767px){
    text-align: center;
    margin: 0;
  }
`;