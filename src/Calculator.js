import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (number) => {
    if (display === '0' || shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleDecimal = () => {
    if (shouldResetDisplay) {
      setDisplay('0.');
      setShouldResetDisplay(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (operator) => {
    if (equation === '') {
      setEquation(display + operator);
    } else if (shouldResetDisplay) {
      setEquation(equation.slice(0, -1) + operator);
    } else {
      calculateResult();
      setEquation(display + operator);
    }
    setShouldResetDisplay(true);
  };

  const calculateResult = () => {
    if (equation === '') return;

    try {
      const result = eval(equation + display);
      if (!isFinite(result)) {
        setDisplay('Error');
        setEquation('');
      } else {
        setDisplay(String(parseFloat(result.toFixed(8))));
        setEquation('');
      }
    } catch (error) {
      setDisplay('Error');
      setEquation('');
    }
    setShouldResetDisplay(true);
  };

  const handleEquals = () => {
    calculateResult();
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setShouldResetDisplay(false);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="equation">{equation}</div>
        <div className="current-value">{display}</div>
      </div>
      
      <div className="buttons-grid">
        <button className="button clear" onClick={handleClear}>
          AC
        </button>
        <button className="button operator" onClick={() => handleOperator('/')}>
          ÷
        </button>
        <button className="button operator" onClick={() => handleOperator('*')}>
          ×
        </button>
        
        <button className="button number" onClick={() => handleNumber('7')}>
          7
        </button>
        <button className="button number" onClick={() => handleNumber('8')}>
          8
        </button>
        <button className="button number" onClick={() => handleNumber('9')}>
          9
        </button>
        <button className="button operator" onClick={() => handleOperator('-')}>
          -
        </button>
        
        <button className="button number" onClick={() => handleNumber('4')}>
          4
        </button>
        <button className="button number" onClick={() => handleNumber('5')}>
          5
        </button>
        <button className="button number" onClick={() => handleNumber('6')}>
          6
        </button>
        <button className="button operator" onClick={() => handleOperator('+')}>
          +
        </button>
        
        <button className="button number" onClick={() => handleNumber('1')}>
          1
        </button>
        <button className="button number" onClick={() => handleNumber('2')}>
          2
        </button>
        <button className="button number" onClick={() => handleNumber('3')}>
          3
        </button>
        <button className="button equals" onClick={handleEquals}>
          =
        </button>
        
        <button className="button number zero" onClick={() => handleNumber('0')}>
          0
        </button>
        <button className="button number" onClick={handleDecimal}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;