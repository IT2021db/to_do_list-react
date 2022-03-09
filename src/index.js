import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from "./theme";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload,
          },
        ],
      };
    default: return state;
  }
};

const addTask = content => ({
  type: "addTask",
  payload: content,
});

const selectTasks = ({ tasks }) => tasks;

const store = configureStore({ reducer: taskReducer });
console.log(selectTasks(store.getState()));

store.dispatch(addTask("Nauczyć sie dispatch"));

console.log(store.getState());

store.dispatch(addTask("Zrobić zadanie 2"));

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
