import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div>
      <h3>
        <b>404</b>: Could not find page
        <br />
        <Link to="/">Go Home</Link>
      </h3>
    </div>
  );
}
