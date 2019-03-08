import React from 'react';
import Logo from '../components/Logo';
import Countdown from '../components/Countdown';
import FeaturedText from '../components/FeaturedText';
import Bios from '../components/Bios';
import Details from '../components/Details';
import Footer from '../components/Footer';
import content from '../content';

export default function Delutan({ lang }) {
  const _ = content(lang);
  /*

  */
  return (
    <div>
      <div className="app">
        <div className="delutan-header section">
          <Logo title={_.delutanTitle} />
          <Countdown lang={lang} fromDate={_.delutanDate} />
          <FeaturedText {..._.delutanFeatured} />
        </div>
        <div className="delutan-bio section">
          <Bios {..._.delutanBios} />
        </div>
        <div className="delutan-details section">
          <Details {..._.delutanDetails} images={_.delutanDetailImages} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
