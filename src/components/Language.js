import React from 'react';
import { Link, withRouter, matchPath } from 'react-router-dom';

function Language({ history, close }) {
  const match = matchPath(history.location.pathname, {
    path: '/:lang?/:page?'
  });
  const nextLang = match.params.lang === 'en' ? 'hu' : 'en';
  const nextTo = `/${nextLang}/${match.params.page || ''}`;
  const nextLangName = match.params.lang === 'en' ? 'Magyar' : 'English';
  return (
    <Link to={nextTo} onClick={close}>
      {nextLangName}
    </Link>
  );
}

export default withRouter(Language);
