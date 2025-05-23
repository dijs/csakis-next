import React from 'react';
import { useRouter } from 'next/router';
import Logo from '../components/Logo';
import Date from '../components/Date';
import Countdown from '../components/Countdown';
import FeaturedText from '../components/FeaturedText';
import Bios from '../components/Bios';
import Footer from '../components/Footer';
import Details from '../components/Details';
import Location from '../components/Location';
import content from '../content';
import Register from '../components/Register';

export default function Tabor() {
  const { locale } = useRouter();
  const _ = content(locale);
  return (
    <div className="app">
      <div className="tabor-header section">
        <Logo lang={locale} title={_.taborTitle} />
        <Date lang={locale} fromDate={_.taborDate} />
        <div className="hide">
          <Countdown lang={locale} fromDate={_.taborDate} />
        </div>
        <FeaturedText {..._.taborFeatured} />
        {/* <Register /> */}
      </div>
      <div className="partner section">
        <h2>{_.partnerTitle}</h2>
        <img src="bonus-pastor.png" alt="bonus-pastor-logo" />
        <img src="manna-logo.jpg" alt="manna-association-logo" />
      </div>
      <div className="tabor-bio section">
        <Bios {..._.taborBios} />
      </div>
      <div className="tabor-location-video">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/6gJYmRxuelg?si=jQ9RrgZxNliGb2VG"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
        ></iframe>
      </div>
      <div className="tabor-details section hide ">
        <div className="">
          <Details {..._.taborDetails} />
          {/* <Register /> */}
        </div>
      </div>
      <div className="foto section hide ">
        <Details
          {..._.twentyThreeEnTaborPhoto}
          images={_.twentyThreeEnTaborImages}
        />
        <Details
          {..._.twentyThreeHuTaborPhoto}
          images={_.twentyThreeHuTaborImages}
        />
        <Details {..._.twentyTwoTaborPhoto} images={_.twentyTwoTaborImages} />
        <Details {..._.twentyOneTaborPhoto} images={_.twentyOneTaborImages} />
        <Details {..._.twentyTaborPhoto} images={_.twentyTaborImages} />
        <Details {..._.nineteenTaborPhoto} images={_.nineteenTaborImages} />
      </div>
      <Footer />
    </div>
  );
}
