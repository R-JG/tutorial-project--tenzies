import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';
import Timer from './components/Timer';
import Confetti from 'react-confetti';


export default function App() {

    const [ dice, setDice ] = useState(createDice());
    const [ gameState, setGameState ] = useState('setup');
    const [ scoreboard, setScoreboard ] = useState([]);

    useEffect(() => {
        const firstDieNumber = dice[0].value;
        const allEqualAndHeld = dice.every((die) => 
            (die.value === firstDieNumber && die.isHeld));
        if (allEqualAndHeld) {
            setGameState('tenzies');
        };
    }, [dice]);

    function generateNewDie() {
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        return {
            id: nanoid(),
            value: randomNumber, 
            isHeld: false
        };
    };

    function createDice() {
        const dice = [];
        for (let i = 0; i < 10; i++) {
            dice.push(generateNewDie());
        };
        return dice;
    };

    function rollDice() {
        setDice((prevDice) => 
            prevDice.map((die) => {
                return (die.isHeld) 
                ? die 
                : generateNewDie();
            })
        );
    };

    function hold(dieId) {
        setDice((prevDice) => 
            prevDice.map((die) => {
                return (dieId === die.id) 
                ? {...die, isHeld: !die.isHeld} 
                : die; 
            })
        );
    };

    function resetGame() {
        setDice(createDice());
        setGameState('setup');
    };

    function updateScoreboard(newScore) {
        setScoreboard((prevScoreboard) => {
            return [...prevScoreboard, newScore];
        });
    };

    return (
        <main>
            {(gameState === 'tenzies') && <Confetti />}
            <Scoreboard 
                scoreboardData={scoreboard} 
            />
            <Game 
                dice={dice} 
                gameState={gameState}
                setGameState={setGameState}
                hold={hold}
                rollDice={rollDice}
                resetGame={resetGame}
            />
            <Timer 
                gameState={gameState}
                updateScoreboard={updateScoreboard} 
            />
        </main>
    );
};