import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },

    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId); //find index
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true
            }
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const {
    tasks,
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks } = tasksSlice.actions;

export const selectTasks = state => {
    console.log("console.log(state.tasks)-to tak:");
    console.log(state.tasks)
    console.log("console.log(state.tasks.tasks)-to tak:");
    console.log(state.tasks.tasks);
    return state.tasks.tasks;
}

export const selectHideDone = state => {
    console.log("console.log(state.hideDone)-to tak:");
    console.log(state.tasks.hideDone);
    return state.tasks.hideDone;
}
export const selectIsEveryTaskDone = state => state.tasks.tasks.every(({ done }) => done);
export const selectAreTasksEmpty = state => state.tasks.tasks.length === 0;



export default tasksSlice.reducer;