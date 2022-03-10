import React from 'react';
import Buttons from './Buttons';
import Form from './Form';
import TasksList from './TasksList';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';

function Tasks() {
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
        body={<TasksList />}
        extraHeaderElement={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;

