import React, { useState, useEffect, useRef } from 'react';

export default function Timer(props) {

    const { gameState, updateScoreboard } = props;
    const [ time, setTime ] = useState(0);
    const intervalId = useRef(0);
    let formattedTime = (time / 10).toFixed(1);
   
    useEffect(() => {
        if (gameState === 'setup') setTime(0);
        if (gameState === 'playing') startTimer();
        if (gameState === 'tenzies') {
            endTimer();
            updateScoreboard(formattedTime);
        };
    }, [gameState]);

    function startTimer() {
        intervalId.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 100);
    };

    function endTimer() {
        clearInterval(intervalId.current);
    };

    return (
        <div className='timer'>
            {formattedTime}
        </div>
    );
};