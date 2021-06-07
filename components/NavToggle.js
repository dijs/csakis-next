import React, { useContext } from 'react';
import ThreeDotMenu from '../icons/three-dot-menu.svg';
import DeleteEx from '../icons/delete-ex.svg';
import { StoreContext } from './Store';

function NavToggle() {
  const { open, setOpen } = useContext(StoreContext);
  return (
    <div
      className="nav-toggle"
      onClick={() => {
        setOpen(!open);
      }}
    >
      {open ? <DeleteEx className="x" /> : <ThreeDotMenu />}
    </div>
  );
}

export default NavToggle;
