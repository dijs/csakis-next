import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import FeaturedText from './components/FeaturedText';
import Bios from './components/Bios';

export default function App() {
  return (
    <div className="app">
      <div className="section">
        <Header />
        <FeaturedText />
        <Countdown fromDate="3/31/2019" />
        <Bios
          title="Meet the Speakers"
          bios={[
            {
              content:
                'Pellentesque blandit metus vitae metus convallis mattis. Integer ac risus eu dolor.',
              image: '//placehold.it/200',
              alt: 'name of speaker'
            },
            {
              content:
                'Convallis mattis. Integer ac risus eu dolor. Yep okay that is the one.',
              image: '//placehold.it/300',
              alt: 'name of speaker 2'
            }
          ]}
        />
        <FeaturedText />
        <button>Remove Me</button>
      </div>
    </div>
  );
}
