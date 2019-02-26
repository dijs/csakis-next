import React from 'react';
import { Link, withRouter, matchPath } from 'react-router-dom';

function getParams(pathname) {
  const match = matchPath(pathname, {
    path: '/:lang?/:page?'
  });
  const {
    params: { lang, page }
  } = match;
  if (!page && !lang) {
    return {
      lang: 'hu',
      page: undefined
    };
  }
  if (!page && lang) {
    if (['en', 'hu'].includes(lang)) {
      return { lang };
    }
    if (!['tabor', 'delutan'].includes(lang)) {
      return null;
    }
    return {
      lang: 'hu',
      page: lang
    };
  }
  return {
    lang,
    page
  };
}

function Language({ history, close }) {
  const params = getParams(history.location.pathname);
  if (!params) return null;
  const { lang, page } = params;
  const nextLang = lang === 'en' ? 'hu' : 'en';
  const nextTo = `/${nextLang}/${page || ''}`;
  const nextLangName = lang === 'en' ? 'Magyar' : 'English';
  return (
    <Link className="language" to={nextTo} onClick={close}>
      {nextLangName}
    </Link>
  );
}

export default withRouter(Language);
