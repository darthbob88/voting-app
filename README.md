# ElectionLibrary

This will be an app/library implementing various election methods in React/Typescript, comparable to <https://civs1.civs.us/> or <https://www.condorcet.vote/>, except made by me. Will support at least first-past-the-post and instant runoff voting, and hopefully plugin extensibility for other methods. Must also note the downsides of various methods from [Building A Better Ballot](https://ncase.me/ballot/) and  [Simulating alternate voting systems](https://www.youtube.com/watch?v=yhO6jfHPFQU).

## Built Using

* [React](https://reactjs.org/)
* [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started)
* [Typescript](https://www.typescriptlang.org/)
* [Firebase](https://firebase.google.com/)
  
## Development Roadmap (Subject to Change)

* Create my own poll(s) and ballots using FPTP voting
* Add capacity to create poll using approval voting, and thus the ability to use different voting methods.
* Add capacity and UX for user to create polls, including selecting method and image/text for options.
* Extract functionality to library, sufficient for user to create their own poll on their own site/service.

### Planned Voting Methods

* First-past-the-post voting, AKA the usual method in American elections. Everybody casts a vote for the one (1) candidate they support most, and whoever has the biggest pile of votes wins.

  Pros:

  * Simple to understand and implement.

  Cons:

  * Vulnerable to splitting the vote if there are more than two options; if the election goes 30% for one person, 30% for another, and 40% for a third, the third person will win despite being opposed by 60% of the voters.

* Approval voting. Similar to FPTP above, but voters can select multiple candidates.

  Pros:

  * Simple to understand and implement.

  Cons:

  * No guarantee that any winner will actually be supported by a majority.

* Instant runoff voting. Each voter ranks candidates by their preference, A-B-C or whatever they prefer. Ballots are tallied, and if any candidate doesn't have a majority/sufficient plurality, the lowest candidate is dropped and their ballots get applied to the second-/third-/etc-ranked choice on the ballot.

  Pros:

  * Largely protected against vote-splitting. If 3% of the ballots are for A with B ranked second, 48% are for B, and 49% are for C, A will get dropped from contention and the ballots will be applied to B, giving them the victory.

  Cons:

  * New and unfamiliar.
  * Liable to pick candidate without majority support. If the votes are split 30-30-40, with no second choices, nobody gets a majority.
  * Still vulnerable to spoilers, if a 3rd candidate is able to take votes from the likely winner. Suppose there are three candidates A/B/C, where C is aligned with A and opposed to B. If 29 ballots rank the candidates A-B-C, 31 rank them C-A-B, and 40 rank them B-A-C, candidate A will be dropped and their votes applied to B, giving B a victory 69-31. However, if C did not run, then A would win 60-40. Likewise, if some of the C supporters decided to vote A-C-B, then C would be dropped in the first round and A would win.
