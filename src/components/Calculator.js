import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const { total, next, operation } = state;

  const handleClick = ((e) => {
    setState((state) => ({
      ...state,
      ...calculate(state, e.target.value),
    }));
  });

  return (
    <div className="calculator-container d-flex flex-d-c">
      <div className="calculator-output d-flex j-content-flex-end">
        {total}
        {operation}
        {next}
      </div>
      <div className="d-flex flex-d-c">
        <div className="d-flex">
          <button type="button" className="operator operatorTop" value="AC" onClick={handleClick}>AC</button>
          <button type="button" className="operator operatorTop" value="+/-" onClick={handleClick}>+/-</button>
          <button type="button" className="operator operatorTop" value="%" onClick={handleClick}>%</button>
          <button type="button" className="operator operatorTop operatorRight" value="÷" onClick={handleClick}>÷</button>
        </div>
        <div className="d-flex">
          <button type="button" className="operand" value="7" onClick={handleClick}>7</button>
          <button type="button" className="operand" value="8" onClick={handleClick}>8</button>
          <button type="button" className="operand" value="9" onClick={handleClick}>9</button>
          <button type="button" className="operator operatorRight" value="x" onClick={handleClick}>x</button>
        </div>
        <div className="d-flex">
          <button type="button" className="operand" value="4" onClick={handleClick}>4</button>
          <button type="button" className="operand" value="5" onClick={handleClick}>5</button>
          <button type="button" className="operand" value="6" onClick={handleClick}>6</button>
          <button type="button" className="operator operatorRight" value="-" onClick={handleClick}>-</button>
        </div>
        <div className="d-flex">
          <button type="button" className="operand" value="1" onClick={handleClick}>1</button>
          <button type="button" className="operand" value="2" onClick={handleClick}>2</button>
          <button type="button" className="operand" value="3" onClick={handleClick}>3</button>
          <button type="button" className="operator operatorRight" value="+" onClick={handleClick}>+</button>
        </div>
        <div className="calculator-bottom d-flex">
          <button type="button" className="operand btn-zero" value="0" onClick={handleClick}>0</button>
          <button type="button" className="operand btn-zero" value="." onClick={handleClick}>.</button>
          <button type="button" className="operand btn-equal operatorRight" value="=" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
