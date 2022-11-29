import React from 'react';
import { nanoid } from 'nanoid';

export default function Scoreboard(props) {

    const { scoreboardData } = props;

    const scoreArray = scoreboardData.map((score) => (
        <div key={nanoid()}>{score}</div>
    ));

    return (
        <div className='scoreboard'>
            {scoreArray}
        </div>
    );
};