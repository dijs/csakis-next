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

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default function App() {
  return (
    <React.Fragment>
      <Router basename="/csakis-next">
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
              path="/"
              component={() => <Home lang="hu" />}
              exact
            />
            <Route
              title="Home"
              path="/en"
              component={() => <Home lang="en" />}
              exact
            />
            <Route
              title="Home"
              path="/hu"
              component={() => <Home lang="hu" />}
              exact
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
