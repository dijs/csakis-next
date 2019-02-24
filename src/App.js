import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Delutan from './pages/Delutan';
import Tabor from './pages/Tabor';
import Nav from './components/Nav';
import NavToggle from './components/NavToggle';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Nav />
          <NavToggle />
          <Switch>
            <Route
              title="Delutan"
              path="/delutan"
              component={() => <Delutan />}
              exact
            />
            <Route
              title="Tabor"
              path="/tabor"
              component={() => <Tabor />}
              exact
            />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
