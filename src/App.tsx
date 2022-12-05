import React from 'react';
import './App.css';
import CastBallot from './components/CastBallot/CastBallot';
import NewPoll from './components/NewPoll/NewPoll';
import PollListing from './components/PollListing/PollListing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PollListing />
        <NewPoll />
        <CastBallot pollID='best-fruit' />
      </header>
    </div>
  );
}

export default App;
