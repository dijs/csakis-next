import React from 'react';
import Logo from '../components/Logo';
import Countdown from '../components/Countdown';
import FeaturedText from '../components/FeaturedText';
import Bios from '../components/Bios';
import Footer from '../components/Footer';
import content from '../content';

export default function Tabor({ lang }) {
  const _ = content(lang);
  return (
    <div className="app">
      <div className="tabor-header section">
        <Logo title={_.taborTitle} />
        <Countdown lang={lang} fromDate={_.taborDate} />
        <FeaturedText {..._.taborFeatured} />
        <button> {_.taborRegister} </button>
      </div>
      <div className="tabor-bio section">
        <Bios {..._.taborBios} />
        <FeaturedText />
      </div>
      <div className="tabor-location section">
        <h2> Where </h2>
      </div>
      <div className="tabor-details section">
        <h2> What </h2>
      </div>
      <Footer />
    </div>
  );
}
