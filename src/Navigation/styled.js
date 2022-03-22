import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    &.active{
    color: red;
    }
`;

export const List = styled.ul`
    display: flex; 
    justify-content: center;
    background-color:teal;
    list-style: none;
    margin:  0;
`;

export const Item = styled.li`
    padding: 30px;
`;