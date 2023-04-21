import './App.css';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (button) => {
    if (button === '=') {
      setInput(evaluate(input));
    } else if (button === 'C') {
      setInput('');
    } else if (button === 'ANS') {
      setInput(prevInput => prevInput);
    } else {
      setInput(prevInput => prevInput + button);
    }
  }

  const buttons = [
    '(', ')', '√', '^',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '.',
    '0', '+', '-', 'ANS',
    '=', 'C',
  ];

  const renderButtons = () => {
    return buttons.map(button => (
      <button key={button} onClick={() => handleClick(button)}>
        {button}
      </button>
    ));
  }

  return (
    <div className="calculator">
      <input className="display" type="text" value={input}/>
      <div className="buttons">{renderButtons()}</div>
    </div>
  );
};

export default Calculator;
