import React from "react";
import { CabinetEditor } from "./pages/cabinet/CabinetEditor";
import { CutListEditor } from "./pages/cutlist/Cutlist";
import './styles/index.scss';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	NavLink
} from "react-router";


export function App() {
	return (
		<div className="app">
			<Router>
				<nav className="ww-nabbar">
					<NavLink className={x => x.isActive ? '--active' : ''} to="/">Home</NavLink>
					<NavLink className={x => x.isActive ? '--active' : ''} to="/cabinet">Cabinet</NavLink >
					<NavLink className={x => x.isActive ? '--active' : ''} to="/cutlist">Cutlist</NavLink>
				</nav>
				<main>
					<Routes>
						<Route path="/" />
						<Route path="/cabinet" element={<CabinetEditor />} />
						<Route path="/cutlist" element={<CutListEditor />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}