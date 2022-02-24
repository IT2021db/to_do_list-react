import React from "react";
import { StyledSection } from "./styled";

const Section = ({ title, body, extraHeaderElement }) => (
  <StyledSection>
    <StyledSection header >
      <h2 >{title}</h2>
      <div>
        {extraHeaderElement}
      </div>
    </StyledSection>
    <div>
      {body}
    </div>
  </StyledSection>
);

export default Section;