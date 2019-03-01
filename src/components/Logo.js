import React from 'react';
import { ReactComponent as Img } from '../images/logo-coloredCsakis2019withCircle.svg';
import { Link } from 'react-router-dom';

export default function Logo({ title }) {
  return (
    <header className="logo">
      <Link to="/">
        <Img />
      </Link>
      {title ? <h1>{title}</h1> : null}
    </header>
  );
}
