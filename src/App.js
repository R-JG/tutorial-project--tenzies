import { React, useState } from 'react';
import { nanoid } from 'nanoid'
import Die from './components/Die';

export default function App() {

  const [ dice, setDice ] = useState(createDice());

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

  const diceComponentArray = dice.map((die) => (
    <Die 
      key={die.id} 
      dieObject={die} 
      hold={hold} 
    />
  ));


  return (
    <main>
        <div className='dice-container'>
          {diceComponentArray}
        </div>
        <button className='button--roll' onClick={rollDice}>Roll</button>
    </main>
  );
};