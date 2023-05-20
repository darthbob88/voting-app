import { retrievePoll } from '../../model/DataAccess';
import { Ballot } from '../../model/Poll';

import styles from "./PollResults.module.css";

type BallotProps = { pollID: string };

function PollResults({ pollID }: BallotProps) {

    const poll = retrievePoll(pollID);
    if (null == poll) {
        return <div>Invalid poll ID {pollID}</div>;
    }


    const renderResults = (ballots: Ballot[], method: string, options: string[]) => {
        if (method === "FPTP") {
            const result = new Map<string, number>();
            options.forEach(option => result.set(option, 0));
            let curLeader = options[0];
            ballots.reduce((acc, cur) => {
                const choice = cur.votes as string;
                if (!options.includes( choice))
                    throw new Error(`Invalid ballot: ${choice} is not a valid option`);
                    
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
            return <div className={styles.ballot}> A series of dropdown menus to select the first/second/third/etc candidates</div>
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