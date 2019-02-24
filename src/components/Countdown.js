import React from 'react';

const min = 1000 * 60;
const hour = min * 60;
const day = hour * 24;
const week = day * 7;

export default function Countdown({ fromDate }) {
  let diff = Math.max(new Date(fromDate) - new Date(), 0);
  const weeks = Math.floor(diff / week);
  diff -= weeks * week;
  const days = Math.floor(diff / day);
  diff -= days * day;
  const hours = Math.floor(diff / hour);
  diff -= hours * hour;
  const mins = Math.floor(diff / min);
  return (
    <div className="countdown">
      <div className="weeks">
        <p>{weeks.toString().padStart(2, '0')}</p>
        <label>Weeks</label>
      </div>
      <div className="days">
        <p>{days.toString().padStart(2, '0')}</p>
        <label>Days</label>
      </div>
      <div className="hours">
        <p>{hours.toString().padStart(2, '0')}</p>
        <label>Hours</label>
      </div>
      <div className="mins">
        <p>{mins.toString().padStart(2, '0')}</p>
        <label>Mins</label>
      </div>
    </div>
  );
}
