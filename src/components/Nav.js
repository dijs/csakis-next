import React from 'react';
import { Link } from 'react-router-dom';
import { collect } from 'react-recollect';
import classnames from 'classnames';
import Language from './Language';

// Use portal to render outside of rest of app
// Add blur overlay to rest of page...

function Nav({ store }) {
  const close = () => (store.open = false);
  return (
    <div className={classnames('nav', { open: store.open })}>
      <Link to="./" onClick={close}>
        Home
      </Link>
      <Link to="./delutan" onClick={close}>
        Delutan
      </Link>
      <Link to="./tabor" onClick={close}>
        Tabor
      </Link>
      <Language close={close} />
    </div>
  );
}

export default collect(Nav);
