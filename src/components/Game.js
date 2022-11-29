import React from 'react';
import Die from './Die';

export default function Game(props) {

    const { 
        dice, 
        gameState, 
        setGameState, 
        hold, 
        rollDice, 
        resetGame 
        } 
    = props;

    const diceComponentArray = dice.map((die) => (
        <Die 
            key={die.id} 
            dieObject={die} 
            gameState={gameState}
            hold={hold} 
        />
    ));

    function gameStateButtonLogic() {
        switch (gameState) {
            case 'playing':
                rollDice();
                break;
            case 'setup':
                setGameState('playing');
                break;
            case 'tenzies':
                resetGame();
                break;
            default:
        };
    };

    function renderButtonText() {
        switch (gameState) {
            case 'playing':
                return 'Roll';
            case 'setup':
                return 'Start';
            case 'tenzies':
                return 'New Game';
            default:
        };
    };

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
                onClick={gameStateButtonLogic}
            > 
                {renderButtonText()}
            </button>
        </div>
    );
};