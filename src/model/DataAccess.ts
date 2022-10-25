import { Ballot, Poll } from "./Poll";

/*
 * Using local storage, just so I don't have to set up
 * Firebase until I'm more confident in the data structures. 
 */
//TODO: Set up Firebase, or whatever other data storage I decide to use.

export const createPoll = (newPoll: Poll) => {
    if (localStorage.getItem(newPoll.ID) != null) {
        throw new Error(`Invalid poll ${newPoll.ID}`);
    }
    localStorage.setItem(newPoll.ID, JSON.stringify(newPoll));
    return newPoll.ID;
}

export const retrievePoll = (pollID: string): Poll | null => {
    const jsonBlob = localStorage.getItem(pollID);
    if (jsonBlob == null) {
        throw new Error(`Invalid poll ${pollID}`);
    }

    return JSON.parse(jsonBlob);

}

export const retrievePollList = (): string[] => {
    return Object.keys(localStorage);
}

export const castBallot = (newBallot: Ballot, pollID: string) => {
    const poll = retrievePoll(pollID);
    if (poll == null) {
        throw new Error(`Invalid poll ${pollID}`);
    }
    poll.ballots.push(newBallot);
    localStorage.setItem(poll.ID, JSON.stringify(poll));
}