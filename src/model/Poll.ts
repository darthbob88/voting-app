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

export type Ballot = {
    ballotID: string,
    voterID: string,
    pollID: string,
    votes: any,
}