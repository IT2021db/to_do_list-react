import React from "react";
import { Buttons } from "./styled";

const Button = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div>
        {tasks.length > 0 && (
            <>
                <Buttons onClick={toggleHideDone} >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Buttons>
                <Buttons disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </Buttons>
            </>
        )}
    </div>
);

export default Button;