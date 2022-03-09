import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
    },
});

export const { addTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

// console.log(addTask({
//     content: "nauczyc sie lekcji o reduxie",
//     done: false,
// })
// );

console.log(tasksSlice.reducer({tasks:[]}, addTask({
    content: "test",
    done: true,
})))