import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.value),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container d-flex flex-d-c">
        <div className="calculator-output d-flex j-content-flex-end">
          {total}
          {operation}
          {next}
        </div>
        <div className="d-flex flex-d-c">
          <div className="d-flex">
            <button type="button" className="operator operatorTop" value="AC" onClick={this.handleClick}>AC</button>
            <button type="button" className="operator operatorTop" value="+/-" onClick={this.handleClick}>+/-</button>
            <button type="button" className="operator operatorTop" value="%" onClick={this.handleClick}>%</button>
            <button type="button" className="operator operatorTop operatorRight" value="÷" onClick={this.handleClick}>÷</button>
          </div>
          <div className="d-flex">
            <button type="button" className="operand" value="7" onClick={this.handleClick}>7</button>
            <button type="button" className="operand" value="8" onClick={this.handleClick}>8</button>
            <button type="button" className="operand" value="9">9</button>
            <button type="button" className="operator operatorRight" value="x" onClick={this.handleClick}>x</button>
          </div>
          <div className="d-flex">
            <button type="button" className="operand" value="4" onClick={this.handleClick}>4</button>
            <button type="button" className="operand" value="5" onClick={this.handleClick}>5</button>
            <button type="button" className="operand" value="6" onClick={this.handleClick}>6</button>
            <button type="button" className="operator operatorRight" value="-" onClick={this.handleClick}>-</button>
          </div>
          <div className="d-flex">
            <button type="button" className="operand" value="1" onClick={this.handleClick}>1</button>
            <button type="button" className="operand" value="2" onClick={this.handleClick}>2</button>
            <button type="button" className="operand" value="3" onClick={this.handleClick}>3</button>
            <button type="button" className="operator operatorRight" value="+" onClick={this.handleClick}>+</button>
          </div>
          <div className="calculator-bottom d-flex">
            <button type="button" className="operand btn-zero" value="0" onClick={this.handleClick}>0</button>
            <button type="button" className="operand btn-zero" value="." onClick={this.handleClick}>.</button>
            <button type="button" className="operand btn-equal operatorRight" value="=" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
