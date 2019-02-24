import React from 'react';
import { ReactComponent as Img } from '../images/logo-coloredCsakis2019.svg';

export default function Logo({ title }) {
  return (
    <header className="logo">
      <Img />
      {title ? <h1>{title}</h1> : null}
    </header>
  );
}
