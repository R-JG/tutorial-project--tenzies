import React from 'react';
import { nanoid } from 'nanoid';

export default function Scoreboard(props) {

    const { scoreboardData } = props;

    const scoreArray = scoreboardData.map((score) => (
        <div className='score' key={nanoid()}>{score}</div>
    ));

    return (
        <div className='scoreboard'>
            <div className='title'>High Scores:</div>
            <hr/>
            {scoreArray}
        </div>
    );
};