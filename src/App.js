import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Delutan from './pages/Delutan';
import Tabor from './pages/Tabor';
import Nav from './components/Nav';
import NavToggle from './components/NavToggle';

const withLang = Page => ({
  match: {
    params: { lang }
  }
}) => <Page lang={lang || 'hu'} />;

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
              path="/:lang?/delutan"
              component={withLang(Delutan)}
              exact
            />
            <Route
              title="Tabor"
              path="/:lang?/tabor"
              component={withLang(Tabor)}
              exact
            />
            <Route
              title="Home"
              path="/:lang"
              component={withLang(Home)}
              exact
            />
            <Route component={withLang(Home)} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
