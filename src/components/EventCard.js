import React from 'react';
import { ReactComponent as Logo } from '../images/logo-coloredCsakis2019.svg';

export default function EventCard({ title, content = [] }) {
  return (
    <div className="event-card">
      <div className="logo">
        <Logo className="image" />
        <h1>délután</h1>
      </div>
      <div className="content">
        <h2>CHAKIS Délután</h2>
        <h3> Mar 31 @ 4p</h3>
        <p>
          Join us for an afternoon of worship, teaching and fellowship.
          Childcare is provided, and lectures will be in Hungarian.
        </p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
}
