import React from 'react';

export default function Die(props) {
    const { number } = props;
    return (
        <div className='die'>
            <div className='number'>{number}</div>
        </div>
    );
};