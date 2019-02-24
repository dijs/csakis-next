import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import FeaturedText from './components/FeaturedText';

export default function App() {
  return (
    <div className="app">
      <div className="section">
        <Header />
        <Countdown fromDate="3/1/2019" />
        <FeaturedText />
        <button>Remove Me</button>
      </div>
    </div>
  );
}
