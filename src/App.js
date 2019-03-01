import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Delutan from './pages/Delutan';
import Tabor from './pages/Tabor';
import Nav from './components/Nav';
import NavToggle from './components/NavToggle';
import NoMatch from './components/NoMatch';
import ScrollToTop from './components/ScrollToTop';

const withLang = Page => ({
  match: {
    params: { lang }
  }
}) => <Page lang={lang || 'hu'} />;

const withNav = Page => {
  return props => (
    <div>
      <Nav />
      <NavToggle />
      <Page {...props} />
    </div>
  );
};

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop>
          <div>
            <Switch>
              <Route
                title="Delutan"
                path="/:lang?/delutan"
                component={withLang(withNav(Delutan))}
                exact
              />
              <Route
                title="Tabor"
                path="/:lang?/tabor"
                component={withLang(withNav(Tabor))}
                exact
              />
              <Route
                title="Home"
                path="/:lang?"
                component={({
                  match: {
                    params: { lang }
                  }
                }) => {
                  if (lang !== undefined && lang !== 'en' && lang !== 'hu') {
                    return <NoMatch />;
                  } else {
                    return withNav(() => <Home lang={lang || 'hu'} />)();
                  }
                }}
                exact
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    </React.Fragment>
  );
}
