import React from 'react';
import Logo from '../components/Logo';
import Countdown from '../components/Countdown';
import FeaturedText from '../components/FeaturedText';
import Bios from '../components/Bios';

export default function Tabor() {
  return (
    <div className="app">
      <div className="tabor-header section">
        <Logo />
        <Countdown fromDate="3/31/2019" />
        <FeaturedText
          title="What is the Csakis Tabor?"
          subtitle="In Essence: Family Camp"
          content="Lets escape."
        />
        <button> REGISTER </button>
      </div>
      <div className="tabor-bio section">
        <Bios
          title="Meet the Speakers"
          bios={[
            {
              content:
                'Pellentesque blandit metus vitae metus convallis mattis. Integer ac risus eu dolor.',
              image: '//placehold.it/100',
              alt: 'name of speaker'
            },
            {
              content:
                'Convallis mattis. Integer ac risus eu dolor. Yep okay that is the one.',
              image: '//placehold.it/100',
              alt: 'name of speaker 2'
            }
          ]}
        />
        <FeaturedText />
      </div>
    </div>
  );
}
