// import React from 'react';
import { useRouter } from 'next/router';
import Logo from '../components/Logo';
import FeaturedText from '../components/FeaturedText';
import Footer from '../components/Footer';
import Album from '../components/Album';
import EventCard from '../components/EventCard';
import content from '../content';
// import Link from 'next/link';

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
        {/* <FeaturedText {..._.homeSurvey} />
        <Link
          className="survey"
          href="https://docs.google.com/forms/d/1q8MyRm774KDw_q8X98G7hS6y6GtyLHBmgJ-MFSSe8Sk/viewform?edit_requested=true"
        >
          <button>Survey</button>
        </Link> */}
      </div>
      <div className="home-events section">
        <h2> {_.homeEventTitle} </h2>
        <EventCard
          {..._.homeEventOne}
          monthNumber={6}
          startDay={8}
          // closed
          endDay={12}
          href="https://forms.gle/kPi6Lz8NdY3sML1Z7"
        />
        <EventCard
          {..._.homeEventTwo}
          monthNumber={7}
          startDay={4}
          // closed
          endDay={8}
          href="https://forms.gle/ezsMvjdmZndYrS3M6"
        />
        <EventCard
          {..._.homeEventThree}
          monthNumber={7}
          startDay={25}
          endDay={29}
          href="https://forms.gle/Wec1ZHeTDTt3CT2f7"
        />
      </div>
      <Album />
      <Footer />
    </div>
  );
}
