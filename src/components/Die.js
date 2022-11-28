import React from 'react';

export default function Die(props) {
    const { id, value, isHeld } = props.dieObject;
    const { hold } = props;
    return (
        <div 
            className={`die ${isHeld ? 'held' : ''}`}
            onClick={() => hold(id)}
        >
            <div className='number'>{value}</div>
        </div>
    );
};