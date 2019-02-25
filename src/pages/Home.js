import React from 'react';
import Logo from '../components/Logo';
import FeaturedText from '../components/FeaturedText';
import Footer from '../components/Footer';
import Album from '../components/Album';
import EventCard from '../components/EventCard';
import content from '../content';

export default function Home({ lang }) {
  const _ = content(lang);
  return (
    <div>
      <div className="home-header section">
        <Logo />
      </div>
      <div className="home-text section">
        <FeaturedText {..._.homeFeatured} />
        <div className="event-buttons">
          <button className="delutan">Délután</button>
          <button className="tabor">Tábor</button>
        </div>
      </div>
      <div className="home-photos section">
        <h2> Photo Gallery </h2>
        <Album albumId="1916057938672576" />
      </div>
      <div className="home-events section">
        <h2> Upcoming Events </h2>
        <EventCard {..._.homeEventOne} />
        <EventCard {..._.homeEventTwo} />
      </div>
      <Footer />
    </div>
  );
}
