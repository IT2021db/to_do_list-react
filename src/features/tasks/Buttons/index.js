import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Buttons } from "./styled";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks,
    selectIsEveryTaskDone,
    selectAreTasksEmpty,
    selectHideDone
} from "../tasksSlice";

const Button = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();
    return (
        <div>
            <Buttons onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Buttons>
            {!areTasksEmpty && (
                <>

                    <Buttons onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone {console.log(hideDone)}
                    </Buttons>
                    <Buttons
                        disabled={isEveryTaskDone}
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