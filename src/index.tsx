import ReactDOM from "react-dom";
import React, { useState, Component } from "react";
import { CabinetEditor } from "./cabinet/cabinet";
import './styles/styles';
import { CutListEditor } from "./cutlist/cutlist";
import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cabinet">Cabinet</Link>
          <Link to="/cutlist">Cutlist</Link>
        </nav>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/cabinet">
            <CabinetEditor />
          </Route>
          <Route path="/cutlist" render={routeProps => {
              return (<CutListEditor {...routeProps.location.state}/>)
            }}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);