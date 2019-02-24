import React from 'react';
import { ReactComponent as Logo } from '../images/logo-whiteCsakis2019.svg';
import { ReactComponent as Calendar } from '../icons/calendar.svg';
import { ReactComponent as Location } from '../icons/location.svg';
import { ReactComponent as Facebook } from '../icons/facebook.svg';

export default function FeaturedText() {
  return (
    <div className="footer">
      <Logo className="logo" />
      <div className="icons">
        <Calendar />
        <Location />
        <Facebook />
      </div>
    </div>
  );
}
