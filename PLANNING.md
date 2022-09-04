# Planning/Architecture

This is just going to be kind of a scratch-pad for notes on how it'll work.

## Modules

* Data access layer; encapsulation so the code that generates a ballot doesn't have to care if it's connecting to Firebase, a SQL DB, or whatever.
* Plugin(s) for electoral systems. This will need to be able to handle
  * Generating a ballot from options- On the one hand, this probably should be separate, to make it properly platform agnostic. On the other, the code for generating an approval-voting ballot in React should probably be attached to the code for processing an approval-voting poll.
  * Generating results from cast ballots.
* Code for creating a poll including options. This may need to be attached to cloud blob storage or smth, for uploading images.

## Expected Workflow

1. User creates poll, by selecting method and naming options.
   * This will involve uploading that data to a DB.
2. TBD.