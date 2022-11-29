import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';
import Timer from './components/Timer';
import Confetti from 'react-confetti';


export default function App() {

    const [ dice, setDice ] = useState(createDice());
    const [ tenzies, setTenzies ] = useState(false);

    useEffect(() => {
        const firstDieNumber = dice[0].value;
        const allEqualAndHeld = dice.every((die) => 
            (die.value === firstDieNumber && die.isHeld));
        if (allEqualAndHeld) {
            setTenzies(true);
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
        setTenzies(false);
    };

    return (
        <main>
            {tenzies && <Confetti />}
            <Scoreboard />
            <Game 
                dice={dice} 
                tenzies={tenzies}
                hold={hold}
                rollDice={rollDice}
                resetGame={resetGame}
            />
            <Timer />
        </main>
    );
};