import React from 'react';
import content from '../content';

export default function Countdown({ lang, taborDate }) {
  const _ = content(lang);
  return (
    <div className="date hide">
      <h2>{_.homeEventTwo.eventDate}</h2>
    </div>
  );
}
