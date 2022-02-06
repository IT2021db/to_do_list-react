import React, { useState } from 'react';
import Buttons from './Buttons';
import Form from './Form';
import Tasks from './Tasks';
import Section from './Section';
import Header from './Header';
import Container from './Container';


const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść obiad", done: false },
];


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => { setHideDone(hideDone => !hideDone) };

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
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderElement={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />}
      />
    </Container>
  );
}

export default App;
