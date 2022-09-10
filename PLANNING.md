# Planning/Architecture

This is just going to be kind of a scratch-pad for notes on how it'll work.

## Modules

* Data access layer; encapsulation so the code that generates a ballot doesn't have to care if it's connecting to Firebase, a SQL DB, or whatever.
* Plugin(s) for electoral systems. This will probably just be the Strategy pattern, and will need to be able to handle
  * Generating a ballot from options- On the one hand, this probably should be separate, to make it properly platform agnostic and work with Vue/Svelte/Angular/whatever. On the other, the code for generating the HTML/JSX/other markup for an approval-voting ballot should probably be attached to the code for processing an approval-voting poll.
  * Generating results from cast ballots.
* Code for creating a poll including options. This may need to be attached to cloud blob storage or smth, for uploading images.

## Expected Workflow

1. User creates poll, by selecting method and naming the poll and options.
   * This will involve uploading that data to a DB.
   * Poll data structure at this point will be {
    poll ID,
    name,
    creator,
    creation date,
    expiration date,
    method,
    candidates[],
    ballots[]
   }
2. Users will cast ballots in the poll.
   * This will require properly generating the ballot based on the election method, taking the poll name, option, and candidates to produce the correct ballot structure, ranked/single choice/multiple choice.
   * Ballot data structure will depend on the chosen election method, which is why this will probably have to be either document DB like Firestore, or possibly just stored as a JSON blob.
   * Will definitely have {
    ballot ID,
    voter ID (possibly hashed to keep things anonymous),
    reference to the poll (will be used as a foreign if this is stored in a non-document DB),
    [whatever goes on with the candidates],
   }
3. At some point, users can see results from the poll, either via a button/URL or after the expiration date of the poll.
   * This will require some method `process_election(ballots/poll_ID) => chosen_candidate` on the plugin for each election method, along with some way to select the correct plugin for a given poll.
