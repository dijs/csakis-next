import React from 'react';
import { useRouter } from 'next/router';
import Logo from '../components/Logo';
import FeaturedText from '../components/FeaturedText';
import Footer from '../components/Footer';
import Album from '../components/Album';
import EventCard from '../components/EventCard';
import content from '../content';
import Link from 'next/link';

export default function Home() {
  const { locale } = useRouter();
  const _ = content(locale);

  return (
    <div>
      <div className="home-header section">
        <Logo lang={locale} />
      </div>
      <div className="home-text section">
        <FeaturedText {..._.homeFeatured} />
        <div className="event-buttons">
          <Link href={`/${locale}/tabor`}>
            <button className="tabor">{_.taborTitle}</button>
          </Link>
        </div>
      </div>
      <div className="home-events section">
        <h2> {_.homeEventTitle} </h2>
        <EventCard
          {..._.homeEventTwo}
          monthNumber={7}
          startDay={26}
          endDay={30}
        />
      </div>
      <Footer />
    </div>
  );
}
