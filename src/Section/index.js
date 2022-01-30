import React from "react";
import "./style.css";

const Section = ({title, body, extraHeaderElement }) => (
<section className="section">
        <header className="section__header">
          <h2 >{title}</h2>
          <div>
           {extraHeaderElement}
          </div>
        </header>
        <div>
          {body}
        </div>
      </section>
);

export default Section;