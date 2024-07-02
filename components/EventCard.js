import React from 'react';
import Logo from '../images/logo-coloredCsakis2019.svg';
import Link from 'next/link';

export default function EventCard({
  eventTitle,
  eventDate,
  buttonText,
  buttonTextRegister,
  description,
  buttonLink,
  buttonLinkRegister
}) {
  return (
    <div className="event-card">
      <div className="logo">
        <Logo className="image" />
        <h1>{eventTitle}</h1>
      </div>
      <div className="content">
        <h2>
          CSAKIS <span className="event-title">{eventTitle}</span>
        </h2>
        <h3> {eventDate}</h3>
        <p>{description}</p>
        <Link href={buttonLink}>
          <button>{buttonText}</button>
        </Link>
        <Link href={buttonLinkRegister}>
          <button>{buttonTextRegister}</button>
        </Link>
      </div>
    </div>
  );
}
