import React from 'react';
import Logo from '../images/logo-coloredCsakis2019.svg';
import Link from 'next/link';
import { RegistrationButton } from './Register';

export default function EventCard({
  eventTitle,
  eventDate,
  buttonText,
  buttonTextRegister,
  description,
  buttonLink,
  buttonLinkRegister,
  monthNumber,
  startDay,
  endDay,
  href, 
  closed
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
        <RegistrationButton
          href={href} 
          monthNumber={monthNumber}
          startDay={startDay}
          endDay={endDay}
          closed={closed}
        />
      </div>
    </div>
  );
}
