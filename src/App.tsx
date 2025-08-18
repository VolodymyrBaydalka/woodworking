import React from "react";
import { CabinetEditor } from "./pages/cabinet/cabinet";
import './styles/styles.scss';
import { CutListEditor } from "./pages/cutlist/Cutlist";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router";


export function App() {
	return (
		<div className="app">
			<Router>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/cabinet">Cabinet</Link>
					<Link to="/cutlist">Cutlist</Link>
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