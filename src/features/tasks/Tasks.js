import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Buttons from './Buttons';
import Form from './Form';
import TasksList from './TasksList';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useTasks } from '../../useTasks';
import { selectTasks } from './tasksSlice';


function Tasks() {

  const { tasks } = useSelector(selectTasks);

  const {
    removeTask,
    setAllDone,
  } = useTasks();



  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList
          removeTask={removeTask}
        />}
        extraHeaderElement={
          <Buttons
            setAllDone={setAllDone}
          />}
      />
    </Container>
  );
}

export default Tasks;

