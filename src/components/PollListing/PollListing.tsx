import React, { useState } from 'react';
import { retrievePollList } from '../../model/DataAccess';
import { Poll, testPoll } from '../../model/Poll';

import styles from "./PollListing.module.css";

function PollListing() {
    const pollList = retrievePollList();
    return (
        <div>
            <h2>List of Polls</h2>
            <h4>Does not currently work</h4>
            <ul>
                {pollList.map(poll => <li key={poll} ><a href={poll}>{poll}</a> </li>)}
            </ul>
        </div>
    );
}

export default PollListing;