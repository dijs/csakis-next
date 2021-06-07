import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import { StoreContext } from './Store';

// Use portal to render outside of rest of app
// Add blur overlay to rest of page...
function Nav() {
  const { open, setOpen } = useContext(StoreContext);
  const { pathname, locale } = useRouter();

  const close = () => setOpen(false);

  return (
    <div className={classnames('nav-container', { open })} onClick={close}>
      <div className={classnames('nav')}>
        <Link href={`/${locale}/`} onClick={close}>
          Home
        </Link>
        <Link className="event-menu" href={`/${locale}/tabor`} onClick={close}>
          Tabor
        </Link>
        <Link className="language" href={pathname} locale="hu" onClick={close}>
          Magyar
        </Link>
        <Link className="language" href={pathname} locale="en" onClick={close}>
          English
        </Link>
      </div>
    </div>
  );
}

export default Nav;
