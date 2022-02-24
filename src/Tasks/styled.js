import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    height: 30px;
    width: 30px;
    color: white;
    cursor: pointer; 
     
    ${({toggleDone})=> toggleDone && css`
        background-color: hsl(120, 62%, 37%);

       &:hover {
        background-color: hsl(120, 62%, 45%);
          transition: 1s;
       } 
    `}

    ${({remove})=> remove && css`
    background-color: red;

       &:hover {
          background-color: hsl(0, 100%, 70%);
          transition: 1s;
        } 
    `}
`;
