import React from 'react';

export default function Die(props) {
    const { id, value, isHeld } = props.dieObject;
    const { gameState, hold } = props;
    return (
        <div 
            className={`die ${isHeld ? 'held' : ''}`}
            onClick={(gameState !== 'setup') && (() => hold(id))}
        >
            <div className='number'>{(gameState !== 'setup') && value}</div>
        </div>
    );
};