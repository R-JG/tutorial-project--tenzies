import React from 'react';
import Die from './Die';

export default function Game(props) {

    const { dice, tenzies, hold, rollDice, resetGame } = props;

    const diceComponentArray = dice.map((die) => (
        <Die 
          key={die.id} 
          dieObject={die} 
          hold={hold} 
        />
    ));

    return (
        <div className='game'>
            <div className='text'>
                <h1>Tenzies</h1>
                <p>
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </p>
            </div>
            <div className='dice-container'>
                {diceComponentArray}
            </div>
            <button 
                className='button--roll' 
                onClick={tenzies ? resetGame : rollDice}
            > 
                {tenzies ? 'New Game' : 'Roll'}
            </button>
        </div>
    );
};