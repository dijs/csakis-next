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
        <h4>{weeks.toString().padStart(2, '0')}</h4>
        <label>Weeks</label>
      </div>
      <div className="days">
        <h4>{days.toString().padStart(2, '0')}</h4>
        <label>Days</label>
      </div>
      <div className="hours">
        <h4>{hours.toString().padStart(2, '0')}</h4>
        <label>Hours</label>
      </div>
      <div className="mins">
        <h4>{mins.toString().padStart(2, '0')}</h4>
        <label>Mins</label>
      </div>
    </div>
  );
}
