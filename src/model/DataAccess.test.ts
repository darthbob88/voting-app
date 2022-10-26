import { castBallot, createPoll, retrievePoll, retrievePollList } from "./DataAccess";
import { testBallot, testPoll } from "./Poll";

// TODO: Remove this once I setup proper data storage.
beforeEach(() => {
    localStorage.clear();
})

describe("Data Access Layer", () => {
    test("Creating new poll should return poll ID", () => {

        const result = createPoll(testPoll);
        expect(result).toEqual(testPoll.ID);
    })

    test("Creating new poll should update list of poll IDs", () => {

        createPoll(testPoll);

        const result = retrievePollList();
        expect(result).toContain(testPoll.ID);
    })

    test("Creating new poll should throw error if existing poll has same ID", () => {

        createPoll(testPoll);

        expect(() => createPoll(testPoll)).toThrow()
    })

    test("Creating and retrieving new poll should return the same object", () => {

        createPoll(testPoll);
        const result = retrievePoll(testPoll.ID);
        expect(result).toEqual(testPoll);
    })

    test("Casting ballot should update the poll", () => {

        createPoll(testPoll);
        let result = retrievePoll(testPoll.ID);
        expect(result?.ballots).toHaveLength(0);

        castBallot(testBallot, testPoll.ID);
        result = retrievePoll(testPoll.ID);
        expect(result?.ballots).toHaveLength(1);
        expect(result?.ballots).toContainEqual(testBallot);

    })

    xtest("Should not be able to cast ballot after poll expiration", () => {
        createPoll(testPoll);
        let result = retrievePoll(testPoll.ID);
        expect(result?.ballots).toHaveLength(0);

        const expiredBallot = { ...testBallot, timestamp: Date.now() };
        expect(() => castBallot(expiredBallot, testPoll.ID)).toThrow();

    })
})