import { createSlice } from '@reduxjs/toolkit';


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, action) => {
            const index = tasks.findIndex(task => task.id === action.payload); //find index
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, action) => {
            const index = tasks.findIndex(task => task.id === action.payload);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true
            }
        }
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone } = tasksSlice.actions;

export const selectTasks = state => state.tasks;

export default tasksSlice.reducer;
