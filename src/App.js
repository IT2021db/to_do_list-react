import React from 'react';
import Tasks from "./features/tasks/Tasks";
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';

const App = () => (
	<HashRouter>
		<nav>
			<ul>
				<li>
					<Link to="/zadania">Zadania</Link>
				</li>
				<li>
					<Link to="/author">O autorze</Link>
				</li>
			</ul>
		</nav>
		<Switch>
			<Route path="/zadania">
				<Tasks />
			</Route>
			<Route path="/author">
				<AuthorPage />
			</Route>
		</Switch>
	</HashRouter>
)

export default App;