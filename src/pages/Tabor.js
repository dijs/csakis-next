import React from 'react';
import Logo from '../components/Logo';
import Countdown from '../components/Countdown';
import FeaturedText from '../components/FeaturedText';
import Bios from '../components/Bios';
import Footer from '../components/Footer';
import Details from '../components/Details';
import Location from '../components/Location';
import BonusPastorLogo from '../images/bonus-pastor.png';
import MannaLogo from '../images/manna-logo.jpg';
import content from '../content';

function Register({ text }) {
  return (
    <a
      className="register"
      target="_blank"
      rel="noopener noreferrer"
      href="https://forms.gle/JVyuUMWJxD8sLuHN9"
    >
      <button>{text} </button>
    </a>
  );
}

export default function Tabor({ lang = 'hu' }) {
  const _ = content(lang);
  return (
    <div className="app">
      <div className="tabor-header section">
        <Logo lang={lang} title={_.taborTitle} />
        <Countdown lang={lang} fromDate={_.taborDate} />
        <FeaturedText {..._.taborFeatured} />
        <Register text={_.taborRegister} />
      </div>
      <div className="partner section">
        <h2>{_.partnerTitle}</h2>
        <img src={BonusPastorLogo} alt="bonus-pastor-logo" />
        <img src={MannaLogo} alt="manna-association-logo" />
      </div>
      <div className="tabor-bio section">
        <Bios {..._.taborBios} />
      </div>
      <div classname="tabor-location-video">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/7uOUv9TYGaI?autoplay=1 "
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowfullscreen
        ></iframe>
      </div>
      <div className="tabor-location section">
        <Location {..._.taborLocation} images={_.taborLocationImages} />
      </div>
      <div className="tabor-details section">
        <Details {..._.taborDetails} images={_.taborDetailImages} />
        <Register text={_.taborRegister} />
      </div>
      <div className="foto section">
        <Details {..._.twentyTaborPhoto} images={_.twentyTaborImages} />
        <Details {..._.nineteenTaborPhoto} images={_.nineteenTaborImages} />
      </div>
      <Footer />
    </div>
  );
}
