import styled, {css} from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
        }
    `;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover{
         background-color: hsl(180, 100%, 30%);
         transform: scale(1.1);
         transition: 1s;
    }

    &:active{
         background-color: hsl(180, 100%, 35%);
    }
`;

  
    
        
