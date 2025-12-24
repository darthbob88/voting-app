import { retrievePoll } from '../../model/DataAccess';
import { Ballot } from '../../model/Poll';

import styles from "./PollResults.module.css";

type BallotProps = { pollID: string };

function PollResults({ pollID }: BallotProps) {

    const poll = retrievePoll(pollID);
    if (null == poll) {
        return <div>Invalid poll ID {pollID}</div>;
    }

    // TODO: If I ever get plugins working right, this will have to be attached to the plugins.
    const renderResults = (ballots: Ballot[], method: string, options: string[]) => {
        if (method === "FPTP") {
            const result = new Map<string, number>();
            options.forEach(option => result.set(option, 0));
            let curLeader = options[0];
            ballots.reduce((acc, cur) => {
                const choice = cur.votes as string;
                if (!options.includes(choice))
                    throw new Error(`Invalid ballot ID ${cur.ballotID}: ${choice} is not a valid option`);

                const currVal = acc.get(choice) ?? 0;
                acc.set(choice, currVal + 1);
                if (acc.has(curLeader) && currVal > (acc.get(curLeader) ?? 0)) {
                    curLeader = choice;
                }
                return acc;
            }, result);
            return <div className={styles.ballot}>
                Winner is {curLeader} with {result.get(curLeader)} votes out of {ballots.length}
                <br />
                Detailed result:
                <ol>
                    {
                        [...result.entries()].sort((a, b) => b[1] - a[1]).map(candidate => <li key={candidate[0]}>{candidate[0]} - {candidate[1]} votes</li>)
                    }
                </ol>
            </div>
        } else if (method === "IRV") {
            /*
            Map each candidate to a list of their ballots
            Track removed candidates with a Set
            while (there isn't a candidate with a strict majority of votes) {
                find the candidate with the fewest votes and add them to the Set of removed candidates
                Pull out their list of ballots and remove the losing candidates from each ballot
                Add ballots to their new top candidate, updating currentLeader as needed.
            }

            Possibility to consider: If we drop candidate D and apply their ballot to candidate C, what happens if somebody voted [C, D]?
            Need to fix selection for least-supported vote, so we don't drop the candidate with the most second-place votes.
            Could use a scoring system; 5pts for 1st candidate, 4/3/2 for 2/3/4th candidate, and 1pt afterwards.
            */
            const threshold = ballots.length / 2;
            const result = new Map<string, Ballot[]>();
            const droppedCandidates = new Set<string>();
            const score: { [key: string]: number } = {};

            ballots.forEach(singleBallot => {
                const firstChoice = singleBallot.votes[0] as string;
                // if (!result.has(firstChoice)) throw new Error(`Invalid ballot ID ${singleBallot.ballotID}: ${firstChoice} is not a valid option`);
                const firstChoiceBallots = result.get(firstChoice) ?? [];
                result.set(firstChoice, [...firstChoiceBallots, singleBallot]);

                let curScore = score[firstChoice] ?? 0;
                score[firstChoice] = curScore + 5;

                const secondChoice = singleBallot.votes[1];
                curScore = score[secondChoice] ?? 0;
                score[secondChoice] = curScore + 3;
            });

            let curLeader = options[0];
            let curLeaderLength = (result.get(curLeader) ?? []).length;
            let curLoser = curLeader;
            let curLoserLength = curLeaderLength;
            for (const [key, val] of result.entries()) {
                if (val.length <= curLoserLength && score[key] < score[curLoser]) {
                    curLoser = key;
                    curLoserLength = val.length;
                }
                if (val.length > curLeaderLength) {
                    curLeader = key;
                    curLeaderLength = val.length;
                }
            }

            while (curLeaderLength < threshold) {
                // Drop the current loser and transfer their ballots.
                droppedCandidates.add(curLoser);
                const transferredBallots = result.get(curLoser) ?? [];
                for (const singleBallot of transferredBallots) {
                    const cleanedBallot = singleBallot.votes.filter((option: string) => !droppedCandidates.has(option));
                    const newChoice = cleanedBallot[0];
                    const newChoiceBallots = result.get(newChoice) ?? [];
                    result.set(newChoice, [...newChoiceBallots, singleBallot]);
                }

                result.delete(curLoser);
                curLoserLength = threshold;
                curLoser = curLeader;

                for (const [key, val] of result.entries()) {
                    if (val.length <= curLoserLength && score[key] < score[curLoser]) {
                        curLoser = key;
                        curLoserLength = val.length;
                    }
                    if (val.length >= curLeaderLength) {
                        curLeader = key;
                        curLeaderLength = val.length;
                    }
                }

            }


            return <div className={styles.ballot}>
                <p>Winner: {curLeader}</p>
                <div>Ballots:
                    <ul>
                        {ballots.map(singleBallot => (<li key={singleBallot.ballotID}>{JSON.stringify(singleBallot)}</li>))}
                    </ul>
                </div>
            </div>
        } else {
            return null;
        }
    }



    return (
        <div>
            <h3>Results for {poll.name}</h3>
            {renderResults(poll.ballots, poll.method, poll.candidates)}
        </div>
    );
}

export default PollResults;