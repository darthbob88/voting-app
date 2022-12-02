import { useState } from 'react';
import { retrievePoll } from '../../model/DataAccess';

import styles from "./CastBallot.module.css";

type BallotProps = { pollID: string };

function CastBallot({ pollID }: BallotProps) {

    // But how do I type this for, say, IRV, where it needs a list of how each
    // candidate is ranked?
    // TODO: Work out how to type this.
    const [selectedOption, setSelectedOption] = useState<string>();

    const poll = retrievePoll(pollID);
    if (null == poll) {
        return <div>Invalid poll ID {pollID}</div>;
    }


    const renderBallot = (options: string[], method: string) => {
        if (method === "FPTP") {
            return <div className={styles.ballot}>
                {options.map(option => <label key={option}> <input

                    type="radio"
                    name="ballot"
                    value={option}
                    onChange={() => setSelectedOption(option)}
                    checked={selectedOption === option} />{option}</label>)}
            </div>
        }
    }

    const castBallot = () => {

    }

    return (
        <form><h3>Ballot for {poll.name}</h3>
            {renderBallot(poll.candidates, poll.method)}

            <div>Current value of ballot: {JSON.stringify(selectedOption)}</div>

            <button onClick={() => castBallot()}>Cast Ballot</button>
        </form>
    );
}

export default CastBallot;