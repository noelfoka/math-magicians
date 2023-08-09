import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: 0,
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(event) {
    if (!event.target.value) return;
    const { total, next, operation } = calculate(
      this.state,
      event.target.value,
    );
    this.setState({ total, next, operation });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculator">
        <div className="cal-answer">
          {next ? (
            <div className="answer">{next}</div>
          ) : (
            <div className="answer">{total}</div>
          )}
        </div>
        <button type="button" value="AC" onClick={this.clickEvent}>
          AC
        </button>
        <button type="button" value="+/-" onClick={this.clickEvent}>
          +/-
        </button>
        <button type="button" value="%" onClick={this.clickEvent}>
          %
        </button>
        <button
          className="sign"
          type="button"
          value="÷"
          onClick={this.clickEvent}
        >
          ÷
        </button>
        <button type="button" value="7" onClick={this.clickEvent}>
          7
        </button>
        <button type="button" value="8" onClick={this.clickEvent}>
          8
        </button>
        <button type="button" value="9" onClick={this.clickEvent}>
          9
        </button>
        <button
          className="sign"
          type="button"
          value="x"
          onClick={this.clickEvent}
        >
          x
        </button>
        <button type="button" value="4" onClick={this.clickEvent}>
          4
        </button>
        <button type="button" value="5" onClick={this.clickEvent}>
          5
        </button>
        <button type="button" value="6" onClick={this.clickEvent}>
          6
        </button>
        <button
          className="sign"
          type="button"
          value="-"
          onClick={this.clickEvent}
        >
          -
        </button>
        <button type="button" value="1" onClick={this.clickEvent}>
          1
        </button>
        <button type="button" value="2" onClick={this.clickEvent}>
          2
        </button>
        <button type="button" value="3" onClick={this.clickEvent}>
          3
        </button>
        <button
          className="sign"
          type="button"
          value="+"
          onClick={this.clickEvent}
        >
          +
        </button>
        <button
          className="number zero"
          type="button"
          value="0"
          onClick={this.clickEvent}
        >
          0
        </button>
        <button type="button" value="." onClick={this.clickEvent}>
          .
        </button>
        <button
          className="assign"
          type="button"
          value="="
          onClick={this.clickEvent}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
