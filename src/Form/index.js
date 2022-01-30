import React from "react";
import "./style.css";

const Form = () => (
    <form className="form section__body">
        <input className="form__input" autoFocus placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>

);

export default Form;