import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { collect } from 'react-recollect';
import classnames from 'classnames';

function Language({ pathname, lang, onClick }) {
  let to = '/';
  if (pathname === '/') {
    if (lang === 'en') {
      to = '/en';
    }
  } else {
    to = pathname.replace(/hu|en/, lang);
  }
  return (
    <Link className="language" to={to} onClick={onClick}>
      {lang === 'hu' ? 'Magyar' : 'English'}
    </Link>
  );
}

// Use portal to render outside of rest of app
// Add blur overlay to rest of page...
function Nav({
  store,
  location: { pathname },
  match: {
    params: { lang = 'hu' }
  }
}) {
  const close = () => (store.open = false);
  return (
    <div
      className={classnames('nav-container', { open: store.open })}
      onClick={close}
    >
      <div className={classnames('nav')}>
        <Link to={`/${lang}/`} onClick={close}>
          Home
        </Link>
        <Link className="event-menu" to={`/${lang}/tabor`} onClick={close}>
          Tabor
        </Link>
        <Language pathname={pathname} lang="hu" onClick={close} />
        <Language pathname={pathname} lang="en" onClick={close} />
      </div>
    </div>
  );
}

export default withRouter(collect(Nav));
