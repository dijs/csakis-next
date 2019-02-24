import React from 'react';
import Logo from '../components/Logo';
import Countdown from '../components/Countdown';
import FeaturedText from '../components/FeaturedText';
import Bios from '../components/Bios';

export default function Delutan() {
  return (
    <div>
      <div className="app">
        <div className="delutan-header section">
          <Logo />
          <Countdown fromDate="3/31/2019" />
          <FeaturedText
            title="What is Csakis Delutan?"
            subtitle="Praise - Sermon - Fellowship"
            content="We rarely have an opportunity to build our marriages. Often we get cought up in the daily toil of tasks and we do not have quality time with our spouse and/or our children. This afternoon event is dedicated to helping fostor this quality time and growth. It will be organised quarterly in Vigadó. During the lectures, we will provide separate supervision for children, where we teach them about the love of God through biblical stories."
          />
        </div>
        <div className="delutan-bio section">
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
          <button>Remove Me</button>
        </div>
      </div>
    </div>
  );
}
