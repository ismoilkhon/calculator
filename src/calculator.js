// Import necessary libraries
import React, { useState } from 'react';
import './styles.css';

export function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  // Handle button click
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplayValue(eval(displayValue).toString()); // Evaluate the expression
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === 'C') {
      setDisplayValue(''); // Clear the display
    } else {
      setDisplayValue(displayValue + value); // Append value to the display
    }
  };

  // Calculator buttons
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="button"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
