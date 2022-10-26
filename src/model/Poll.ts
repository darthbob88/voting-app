export type Poll = {
    ID: string,
    name: string,
    creator: string,
    creation: number,
    expiration: number,
    method: string,
    candidates: string[],
    ballots: Ballot[]
}

export const testPoll: Poll = {
    ID: "pollID",
    name: "pollName",
    creator: "pollCreator",
    creation: Date.now(),
    expiration: Date.now(),
    method: "FPTP",
    candidates: ["apple", "orange", "banana"],
    ballots: []
};

export type Ballot = {
    timestamp: number,
    ballotID: string,
    voterID: string,
    pollID: string,
    votes: any,
}

export const testBallot: Ballot = { timestamp: Date.now(), ballotID: "ballotID", voterID: "voterID", pollID: "pollID", votes: [1, 2, 3, 4] }
