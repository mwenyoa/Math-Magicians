import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="calculator-container d-flex flex-d-c">
        <div className="calculator-output d-flex j-content-flex-end">0</div>
        <div className="d-flex flex-d-c">
          <div className="d-flex">
            <button type="button" className="operator operatorTop">AC</button>
            <button type="button" className="operator operatorTop">+/-</button>
            <button type="button" className="operator operatorTop">%</button>
            <button type="button" className="operator operatorTop operatorRight  divide">➗</button>
          </div>
          <div className="d-flex">
            <button type="button" className="operand" data="7">7</button>
            <button type="button" className="operand" data="8">8</button>
            <button type="button" className="operand" data="9">9</button>
            <button type="button" className="operator operatorRight" data="x">x</button>
          </div>
          <div className="d-flex">
            <button type="button" className="operand" data="4">4</button>
            <button type="button" className="operand" data="5">5</button>
            <button type="button" className="operand" data="6">6</button>
            <button type="button" className="operator operatorRight">-</button>
          </div>
          <div className="d-flex">
            <button type="button" className="operand" data="1">1</button>
            <button type="button" className="operand" data="2">2</button>
            <button type="button" className="operand" data="3">3</button>
            <button type="button" className="operator operatorRight" data="+">+</button>
          </div>
          <div className="calculator-bottom d-flex">
            <button type="button" className="operand btn-zero">0</button>
            <button type="button" className="operand btn-zero">.</button>
            <button type="button" className="operand btn-equal operatorRight">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
