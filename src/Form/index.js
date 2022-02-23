import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                autoFocus
                placeholder="Co jest do zrobienia?"
                ref={inputRef}
            />
            <button className="form__button" >Dodaj zadanie</button>
        </form>
    );
}

export default Form;