import React from 'react';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../tasksSlice';
import { useSelector } from "react-redux";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={task ?
                    <><strong>Ukończono: </strong>
                        {(task.done ? "Tak" : "Nie")}
                    </>
                    : ""
                }
            />
        </Container>
    );
}

export default TaskPage;

