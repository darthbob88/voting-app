import React, { useState } from 'react';
import { createPoll } from '../../model/DataAccess';
import { Poll, testPoll } from '../../model/Poll';

import styles from "./NewPoll.module.css";

function NewPoll() {
    /*  ID: string,
    name: string,
    creator: string,
    creation: number,
    expiration: number,
    method: string,
    candidates: string[],
    */

    const [newPoll, setNewPoll] = useState<Poll>(testPoll);

    // TODO: This should be derived from the set of plugins available.
    const methodOptions = [{ value: "FPTP", name: "First past the post" }, { value: "IRV", name: "Instant runoff vote" }]

    const createNewPoll = () => {
        const pollID = newPoll.name.toLocaleLowerCase().replace(/\s/, '-');

        const creator = "darthbob88@gmail.com";
        // TODO: Get some better way to do this. Probably integrate with Firebase, to set it as part of the data access createPoll function?

        let creation = new Date().getTime();
        var result = new Date();
        result.setDate(result.getDate() + 1);

        let mangledPoll = { ...newPoll, ID: pollID, creation, expiration: result.getTime(), creator };


        createPoll(mangledPoll);

        // TODO: Navigate from here to the home page. That'll have to wait until this is separate from the home page.
    }
    return (
        <form><h3>New Poll Form</h3>
            <label><input type="text"
                onChange={(evt) =>
                    setNewPoll({ ...newPoll, name: evt.target.value })
                }
                value={newPoll.name} /> Please enter a name for your poll</label>


            { // TODO: Get this working with a date picker.
            /* <label><input type="date"
                onChange={(evt) =>
                    setNewPoll({ ...newPoll, expiration: evt.target.value })
                }
                value={newPoll.expiration} /> Please enter an expiration date for your poll</label> */}
            {/* //TODO: Turn this into a dynamic list as with the questions/clues from RevealCluesQuiz */}
            <label className={styles.label}><input type="text"
                onChange={(evt) =>
                    setNewPoll({ ...newPoll, candidates: evt.target.value.split(",") })
                }
                value={newPoll.candidates} /> Please enter a comma-separated list of candidates for your poll</label>
            <label><select value={newPoll.method} onChange={(evt) => setNewPoll({ ...newPoll, method: evt.target.value })}>
                {
                    methodOptions.map(method => <option value={method.value}>{method.name}</option>)
                } </select> Please enter a name for your poll</label>

            <div>Current value of newPoll: {JSON.stringify(newPoll)}</div>

            <button onClick={() => createNewPoll()}>Create poll</button>
        </form>
    );
}

export default NewPoll;