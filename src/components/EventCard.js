import React from 'react';
import { ReactComponent as Logo } from '../images/logo-coloredCsakis2019.svg';
import { Link } from 'react-router-dom';

export default function EventCard({
  eventTitle,
  eventDate,
  buttonText,
  description,
  buttonLink = []
}) {
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
        <h3> {eventDate}</h3>
        <p>{description}</p>
        <Link to={buttonLink}>
          <button>{buttonText} </button>
        </Link>
      </div>
    </div>
  );
}
