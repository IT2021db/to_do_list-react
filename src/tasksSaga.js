import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getExampleTasks } from "./features/tasks/getExampleTasks";
import { fetchExampleTasks, setTasks } from "./features/tasks/tasksSlice";

export function* fetchExampleTasksHandler() {
    try {
        delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło  nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}