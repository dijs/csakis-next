import React from 'react';
import Logo from '../components/Logo';
import Countdown from '../components/Countdown';
import FeaturedText from '../components/FeaturedText';
import Bios from '../components/Bios';
import content from '../content';

export default function Delutan({ lang }) {
  const _ = content(lang);
  return (
    <div>
      <div className="app">
        <div className="delutan-header section">
          <Logo />
          <Countdown fromDate={_.delutanDate} />
          <FeaturedText
            title={_.delutanFeaturedTextTitle}
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
        </div>
      </div>
    </div>
  );
}
