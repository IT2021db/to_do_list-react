import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Buttons } from "./styled";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks,
    selectIsEveryTaskDone,
    selectAreTasksEmpty
} from "../tasksSlice";

const Button = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    
    // const isEveryTaskDone=useSelector(selectIsEveryTaskDone);
    // const areTasksEmpty=useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();
    return (
        <div>
            <Buttons onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Buttons>
            {tasks.length > 0 && (
                <>

                    <Buttons onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone {console.log(hideDone)}
                    </Buttons>
                    <Buttons
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Buttons>
                </>
            )}
        </div>
    )
};

export default Button;