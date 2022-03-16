import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Buttons } from "../../features/tasks/Buttons/styled";
import { fetchExampleTasks } from "../../features/tasks/tasksSlice";

export const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <>
                <Buttons onClick={() => dispatch(fetchExampleTasks())}>
                    Pobierz przykładowe zadania
                </Buttons>
            </>
        </div>
    )
}