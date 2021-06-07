import React from 'react';
import Img from '../images/logo-coloredCsakis2019withCircle.svg';

export default function Logo({ lang, title }) {
  return (
    <header className="logo">
      <a href={`/${lang}`}>
        <Img />
      </a>
      {title ? <h1>{title}</h1> : null}
    </header>
  );
}
