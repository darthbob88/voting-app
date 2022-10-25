import { castBallot, createPoll, retrievePoll, retrievePollList } from "./DataAccess";
import { Ballot } from "./Poll";

// TODO: Remove this once I setup proper data storage.
beforeEach(() => {
    localStorage.clear();
})

describe("Data Access Layer", () => {
    test("Creating new poll should return poll ID", () => {
        const newPoll = {
            ID: "pollID",
            name: "pollName",
            creator: "pollCreator",
            creation: Date.now(),
            expiration: Date.now(),
            method: "FPTP",
            candidates: ["apple", "orange", "banana"],
            ballots: []
        };
        const result = createPoll(newPoll);
        expect(result).toEqual(newPoll.ID);
    })

    test("Creating new poll should update list of poll IDs", () => {
        const newPoll = {
            ID: "pollID",
            name: "pollName",
            creator: "pollCreator",
            creation: Date.now(),
            expiration: Date.now(),
            method: "FPTP",
            candidates: ["apple", "orange", "banana"],
            ballots: []
        };
        createPoll(newPoll);

        const result = retrievePollList();
        expect(result).toContain(newPoll.ID);
    })

    test("Creating new poll should throw error if existing poll has same ID", () => {
        const newPoll = {
            ID: "pollID",
            name: "pollName",
            creator: "pollCreator",
            creation: Date.now(),
            expiration: Date.now(),
            method: "FPTP",
            candidates: ["apple", "orange", "banana"],
            ballots: []
        };
        createPoll(newPoll);

        expect(() => createPoll(newPoll)).toThrow()
    })

    test("Creating and retrieving new poll should return the same object", () => {
        const newPoll = {
            ID: "pollID",
            name: "pollName",
            creator: "pollCreator",
            creation: Date.now(),
            expiration: Date.now(),
            method: "FPTP",
            candidates: ["apple", "orange", "banana"],
            ballots: []
        };
        createPoll(newPoll);
        const result = retrievePoll(newPoll.ID);
        expect(result).toEqual(newPoll);
    })

    test("Casting ballot should update the poll", () => {
        const newPoll = {
            ID: "pollID",
            name: "pollName",
            creator: "pollCreator",
            creation: Date.now(),
            expiration: Date.now(),
            method: "FPTP",
            candidates: ["apple", "orange", "banana"],
            ballots: []
        };
        createPoll(newPoll);
        let result = retrievePoll(newPoll.ID);
        expect(result?.ballots).toHaveLength(0);

        const newBallot: Ballot = { ballotID: "ballotID", voterID: "voterID", pollID: "pollID", votes: [1, 2, 3, 4] }
        castBallot(newBallot, newPoll.ID);
        result = retrievePoll(newPoll.ID);
        expect(result?.ballots).toHaveLength(1);
        expect(result?.ballots).toContainEqual(newBallot);

    })
})