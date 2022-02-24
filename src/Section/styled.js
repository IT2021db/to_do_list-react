import styled , {css} from "styled-components";

export const StyledSection = styled.section`
    background-color: #fff;
    box-shadow: 0 0 5px #ddd;

        ${({header})=>header && css`
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 20px;
            justify-content: space-between;
            align-items: center;    
            padding-right: 20px;
            padding-left: 20px;
            border-bottom: 1px solid #ddd;

                @media(max-width: 767px){
                    grid-template-columns: 1fr;
                }
        `}
`;