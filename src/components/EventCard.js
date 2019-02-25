import React from 'react';
import { ReactComponent as Logo } from '../images/logo-coloredCsakis2019.svg';

export default function EventCard({ eventTitle, description = [] }) {
  return (
    <div className="event-card">
      <div className="logo">
        <Logo className="image" />
        <h1>{eventTitle}</h1>
      </div>
      <div className="content">
        <h2>
          CHAKIS <span className="event-title">{eventTitle}</span>
        </h2>
        <h3> Mar 31 @ 4p</h3>
        <p>{description}</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
}
