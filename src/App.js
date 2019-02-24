import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';

export default function App() {
  return (
    <div className="app">
      <div className="section">
        <Header />
        <button>Button</button>
        <Countdown fromDate="3/1/2019" />
      </div>
    </div>
  );
}
