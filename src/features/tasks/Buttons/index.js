import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Buttons } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Button = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <div>
            {tasks.length > 0 && (
                <>
                    <Buttons onClick={() => dispatch(toggleHideDone())} >
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
    )
};

export default Button;