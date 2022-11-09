import React, { useState } from 'react';
import { createPoll } from '../../model/DataAccess';
import { Poll, testPoll } from '../../model/Poll';

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

    const createNewPoll = () => {
        const pollID = newPoll.name.toLocaleLowerCase().replace(/\s/, '-');

        const creator = "darthbob88@gmail.com";
        // TODO: Get some better way to do this. Maybe integrate with Firebase, to set it as part of the data access createPoll function?

        let creation = new Date().getTime();
        var result = new Date();
        result.setDate(result.getDate() + 1);

        let mangledPoll = { ...newPoll, ID: pollID, creation, expiration: result.getTime(), creator };


        createPoll(mangledPoll);
    }
    return (
        <form>
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
            <label><input type="text"
                onChange={(evt) =>
                    setNewPoll({ ...newPoll, name: evt.target.value })
                }
                value={newPoll.name} /> Please enter a name for your poll</label>
            <label><input type="text"
                onChange={(evt) =>
                    setNewPoll({ ...newPoll, name: evt.target.value })
                }
                value={newPoll.name} /> Please enter a name for your poll</label>
        </form>
    );
}

export default NewPoll;