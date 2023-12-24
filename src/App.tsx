import React from 'react';
import './App.css';
import CastBallot from './components/CastBallot/CastBallot';
import NewPoll from './components/NewPoll/NewPoll';
import PollListing from './components/PollListing/PollListing';
import PollResults from './components/PollResults/PollResults';

function App() {

  // TODO: Fix this before actually deploying it.
  localStorage.setItem("best-fruit", JSON.stringify({
    "ID": "best-fruit",
    "name": "Best Fruit",
    "creator": "darthbob88@gmail.com",
    "creation": 1668465233437,
    "expiration": 1668551633437,
    "method": "FPTP",
    "candidates": [
      "apple",
      "orange",
      "banana",
      "mango"
    ],
    "ballots": [
      {
        "ballotID": "butts",
        "votes": "apple",
        "timestamp": 1670282960239,
        "pollID": "best-fruit",
        "voterID": "butts"
      },
      {
        "ballotID": "butts",
        "voterID": "butts",
        "votes": "orange",
        "timestamp": 1671854055125,
        "pollID": "best-fruit"
      },
      {
        "ballotID": "butts",
        "voterID": "butts",
        "votes": "mango",
        "timestamp": 1671854347738,
        "pollID": "best-fruit"
      },
      {
        "ballotID": "butts",
        "voterID": "butts",
        "votes": "mango",
        "timestamp": 1671854350413,
        "pollID": "best-fruit"
      },
      {
        "ballotID": "butts",
        "voterID": "butts",
        "votes": "orange",
        "timestamp": 1671854352933,
        "pollID": "best-fruit"
      },
      {
        "ballotID": "butts",
        "voterID": "butts",
        "votes": "mango",
        "timestamp": 1671854367541,
        "pollID": "best-fruit"
      }
    ]
  }));
  localStorage.setItem("best-pet", JSON.stringify({
    "ID": "best-pet",
    "name": "Best Pet",
    "creator": "darthbob88@gmail.com",
    "creation": 1703207900702,
    "expiration": 1703294300702,
    "method": "IRV",
    "candidates": [
      "dog",
      "cat",
      "goldfish",
      "hamster"
    ],
    "ballots": []
  }))

  return (
    <div className="App">
      <header className="App-header">
        <PollListing />
        <NewPoll />
        <CastBallot pollID='best-fruit' />
        <PollResults pollID='best-fruit' />
      </header>
    </div>
  );
}

export default App;
