import { React, useState } from 'react';
import Die from './components/Die';

export default function App() {

  const [ diceNumbers, setDiceNumbers ] = useState(createDiceNumbers());

  function createDiceNumbers() {
    const diceNumbers = [];
    for (let i = 0; i < 10; i++) {
      diceNumbers.push(Math.floor(Math.random() * 6 + 1));
    };
    return diceNumbers;
  };

  function rollDice() {
    setDiceNumbers((prevDiceNumbers) => {
      return createDiceNumbers();
    });
  };

  const diceArray = diceNumbers.map((number) => (
    <Die number={number} />
  ));

  return (
    <main>
        <div className='die-container'>
          {diceArray}
        </div>
        <button className='button--roll' onClick={rollDice}>Roll</button>
    </main>
  );
};