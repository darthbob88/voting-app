import { FormEvent, useState } from 'react';
import { castBallot, retrievePoll } from '../../model/DataAccess';
import { Ballot } from '../../model/Poll';

import styles from "./CastBallot.module.css";

type BallotProps = { pollID: string };

function CastBallot({ pollID }: BallotProps) {

    // But how do I type this for, say, IRV, where it needs a list of how each
    // candidate is ranked?
    // TODO: Work out how to type this.
    const [selectedOption, setSelectedOption] = useState<string[]>([]);

    const poll = retrievePoll(pollID);
    if (null == poll) {
        return <div>Invalid poll ID {pollID}</div>;
    }


    const renderBallot = (options: string[], method: string) => {
        if (method === "FPTP") {
            // return <div className={styles.ballot}>
            //     {options.map(option => <label key={option}> <input
            //         type="radio"
            //         name="ballot"
            //         value={option}
            //         onChange={() => setSelectedOption(option)}
            //         checked={selectedOption === option} />{option}</label>)}
            // </div>
        } else
            if (method === "IRV") {
                // TODO: It'd be real cool if this could be drag'n'drop.
                return (<div className={styles.ballot}>
                    {options.map((item, index) => <div className='singleOption' key={index}>
                        <label>Your choice for option {index + 1}
                            <select value={selectedOption[index]} onChange={(evt) => setSelectedOption(prevSelected => {
                                var newArray = [...prevSelected]; newArray[index] = evt.target.value; return newArray;
                            })}>
                                <option selected disabled>Please select a candidate</option>
                                {options.map(candidate => <option key={candidate} value={candidate}>{candidate}</option>)}
                            </select>
                        </label>
                    </div>)}
                </div>);
            } else {
                return null;
            }
    }

    // TODO: This should redirect the user back to the home/poll page, and give some indication that we've cast a ballot.
    const submitBallot = (event: FormEvent) => {
        event.preventDefault()
        // TODO: Fix this to properly create a ballotID, voterID, etc.
        let newBallot: Ballot = { ballotID: "butts", voterID: "butts", votes: selectedOption, timestamp: Date.now(), pollID: pollID };
        castBallot(newBallot, pollID);
    }

    return (
        <form onSubmit={(event) => submitBallot(event)}><h3>Ballot for {poll.name}</h3>
            {renderBallot(poll.candidates, poll.method)}

            <div>Current value of ballot: {JSON.stringify(selectedOption)}</div>
            <div>Poll method is {poll.method}, options are {JSON.stringify(poll.candidates)}</div>

            {/* TODO: Disable the button until the ballot is valid. */}
            <button onClick={(event) => submitBallot(event)}>Cast Ballot</button>
        </form>
    );
}

export default CastBallot;