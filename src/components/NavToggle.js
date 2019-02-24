import React from 'react';
import { collect } from 'react-recollect';
import { ReactComponent as ThreeDotMenu } from '../icons/three-dot-menu.svg';
import { ReactComponent as DeleteEx } from '../icons/delete-ex.svg';

function NavToggle({ store }) {
  return (
    <div
      className="nav-toggle"
      onClick={() => {
        store.open = !store.open;
      }}
    >
      {store.open ? <DeleteEx className="x" /> : <ThreeDotMenu />}
    </div>
  );
}

export default collect(NavToggle);
