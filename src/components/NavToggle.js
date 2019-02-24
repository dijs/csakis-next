import React from 'react';
import { collect } from 'react-recollect';

function NavToggle({ store }) {
  return (
    <div
      className="nav-toggle"
      onClick={() => {
        store.open = !store.open;
      }}
    >
      {store.open ? '-' : '+'}
    </div>
  );
}

export default collect(NavToggle);
