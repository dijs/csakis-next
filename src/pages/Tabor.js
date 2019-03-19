import React from 'react';
import Logo from '../components/Logo';
import Countdown from '../components/Countdown';
import FeaturedText from '../components/FeaturedText';
import Bios from '../components/Bios';
import Footer from '../components/Footer';
import Details from '../components/Details';
import Location from '../components/Location';
import BonusPastorLogo from '../images/bonus-pastor.png';
import content from '../content';

function Register({ text }) {
  return (
    <a
      className="register"
      target="_blank"
      rel="noopener noreferrer"
      href="https://goo.gl/forms/ZZa9zxQz4thEaaHI2"
    >
      <button>{text} </button>
    </a>
  );
}

export default function Tabor({ lang }) {
  const _ = content(lang);
  return (
    <div className="app">
      <div className="tabor-header section">
        <Logo title={_.taborTitle} />
        <Countdown lang={lang} fromDate={_.taborDate} />
        <FeaturedText {..._.taborFeatured} />
        <Register text={_.taborRegister} />
      </div>
      <div className="partner section">
        <img src={BonusPastorLogo} alt="bonus-pastor-logo" />
        <h2>Partner</h2>
      </div>
      <div className="tabor-bio section">
        <Bios {..._.taborBios} />
        <FeaturedText />
      </div>
      <div className="tabor-location section">
        <Location {..._.taborLocation} images={_.taborLocationImages} />
      </div>
      <div className="tabor-details section">
        <Details {..._.taborDetails} images={_.taborDetailImages} />
        <Register text={_.taborRegister} />
      </div>
      <Footer />
    </div>
  );
}
