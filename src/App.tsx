import React from 'react';
import './App.css';
import NewPoll from './components/NewPoll/NewPoll';
import PollListing from './components/PollListing/PollListing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PollListing />
        <NewPoll />
      </header>
    </div>
  );
}

export default App;
