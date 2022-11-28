import { React, useState } from 'react';
import { nanoid } from 'nanoid'
import Die from './components/Die';

export default function App() {

  const [ dice, setDice ] = useState(createDice());

  function createDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      dice.push({
        id: nanoid(),
        value: randomNumber, 
        isHeld: false
      });
    };
    return dice;
  };

  function rollDice() {
    setDice((prevDice) => {
      return createDice();
    });
  };

  function hold(dieId) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return (dieId === die.id) 
        ? {...die, isHeld: true} 
        : die; 
      });
    });
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