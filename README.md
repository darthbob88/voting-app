# ElectionLibrary

This will be an app/library implementing various election methods in React/Typescript, comparable to <https://civs1.civs.us/> or <https://www.condorcet.vote/>, except made by me. Will support at least first-past-the-post and instant runoff voting, and hopefully plugin extensibility for other methods. Must also note the downsides of various methods from [Building A Better Ballot](https://ncase.me/ballot/) and  [Simulating alternate voting systems](https://www.youtube.com/watch?v=yhO6jfHPFQU).

## Built Using

* [React](https://reactjs.org/)
* [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started)
* [Typescript](https://www.typescriptlang.org/)
* [Firebase](https://firebase.google.com/)
  
## Development Roadmap (Subject to Change)

v0.1 Create my own poll(s) and ballots using FPTP voting
v0.2 Add capacity to create poll using IRV voting, and thus the ability to use different voting methods.
v0.6 Add capacity and UX for user to create polls, including selecting method and image/text for options.
v1.0 Extract functionality to library, sufficient for user to create their own poll on their own site/service.
