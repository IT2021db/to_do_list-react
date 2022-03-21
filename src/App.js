import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import { StyledNavLink } from './styled';

const App = () => (
	<HashRouter>
		<nav>
			<ul>
				<li>
					<StyledNavLink to="/zadania">Zadania</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/author">O autorze</StyledNavLink>
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