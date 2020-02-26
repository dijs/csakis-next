import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { collect } from 'react-recollect';
import classnames from 'classnames';
import content from '../content';

function Language({ pathname, lang, close }) {
  let to =
    lang === 'en' ? pathname.replace('en', 'hu') : pathname.replace('hu', 'en');
  if (to === '/') {
    to = lang === 'en' ? '/hu' : '/en';
  }
  return (
    <Link className="language" to={to} onClick={close}>
      {lang === 'en' ? 'Magyar' : 'English'}
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
    <div className={classnames('nav', { open: store.open })}>
      <Link to={`/${lang}/`} onClick={close}>
        Home
      </Link>
      <Link className="event-menu" to={`/${lang}/tabor`} onClick={close}>
        Tabor
      </Link>
      <Language pathname={pathname} lang={lang} close={close} />
    </div>
  );
}

export default withRouter(collect(Nav));
