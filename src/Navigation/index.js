import react from "react";
import { toAuthor, toTasks } from "../routes";
import { StyledNavLink } from "../styled";

export default () => {
    return (
        <nav>
            <ul>
                <li>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </li>
            </ul>
        </nav>
    );
};