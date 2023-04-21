import './App.css';
import React, { useState, useEffect} from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [prevAnswer, setPrevAnswer] = useState('');

  const handleClick = (button) => {
    if (button === '=') {
      const answer = evaluate(input);
      setInput(answer);
      setPrevAnswer(answer);
    } else if (button === 'C') {
      setInput('');
    } else if (button === 'ANS') {
      setInput(prevInput => prevInput + prevAnswer);
    } else {
      setInput(prevInput => prevInput + button);
    }
  }

  const handleButtonPress = (button) => {
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

  const handleKeyPress = (event) => {
    const key = event.key;
    if (/^[0-9()\-+*/.^]$/.test(key)) {
      handleButtonPress(key);
    } else if (key === 'Enter') {
      handleButtonPress('=');
    } else if (key === 'Backspace') {
      setInput(prevInput => prevInput.slice(0, -1));
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  })

  const buttons = [
    '(', ')', '√', '^',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '.',
    '0', '+', '-', 'ANS',
    '=', 'C',
  ];

  const keyboardButtons = () => {
    return buttons.map(button => (
      <button key={button} onClick={() => handleClick(button)}>{button}</button>
    ));
  }

  const renderButtons = () => {
    return buttons.map(button => (
      <button key={button} onClick={() => handleClick(button)}>{button}</button>
    ));
  }

  return (
    <div className="calculator">
      <input className="display" type="text" value={input}/>
      <div className="buttons">{renderButtons()} {keyboardButtons}</div>
    </div>
  );
};

export default Calculator;
