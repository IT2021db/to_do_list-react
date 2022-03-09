import React, { useState } from 'react';
import Buttons from './Buttons';
import Form from './Form';
import TasksList from './TasksList';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useTasks } from '../../useTasks';

function Tasks() {
  const [hideDone, setHideDone] = useState(false);
  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  const toggleHideDone = () => { setHideDone(hideDone => !hideDone) };

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />}
        extraHeaderElement={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
      />
    </Container>
  );
}

export default Tasks;

