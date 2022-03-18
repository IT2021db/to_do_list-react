import React from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';

const App = () => (
	<HashRouter>
		<nav>
			<ul>
				<li>
					<NavLink activeClassName="active" to="/zadania">Zadania</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/author">O autorze</NavLink>
				</li>
			</ul>
		</nav>
		<Switch>
			<Route path="/zadania/:id">
				<TaskPage />
			</Route>
			<Route path="/zadania">
				<TasksPage />
			</Route>
			<Route path="/author">
				<AuthorPage />
			</Route>
			<Route path="/zadania">
				<Redirect to="/zadania" />
			</Route>
		</Switch>
	</HashRouter >
)

export default App;