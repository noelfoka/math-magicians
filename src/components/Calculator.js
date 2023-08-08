import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <div className="cal-answer">
      <div className="answer">0</div>
    </div>
    <button type="button" value="AC">
      AC
    </button>
    <button type="button" value="+/-">
      +/-
    </button>
    <button type="button" value="%">
      %
    </button>
    <button className="sign" type="button" value="/">
      /
    </button>
    <button type="button" value="7">
      7
    </button>
    <button type="button" value="8">
      8
    </button>
    <button type="button" value="9">
      9
    </button>
    <button className="sign" type="button" value="x">
      x
    </button>
    <button type="button" value="4">
      4
    </button>
    <button type="button" value="5">
      5
    </button>
    <button type="button" value="6">
      6
    </button>
    <button className="sign" type="button" value="-">
      -
    </button>
    <button type="button" value="1">
      1
    </button>
    <button type="button" value="2">
      2
    </button>
    <button type="button" value="3">
      3
    </button>
    <button className="sign" type="button" value="+">
      +
    </button>
    <button className="zero" type="button" value="0">
      0
    </button>
    <button type="button" value=".">
      .
    </button>
    <button className="assign" type="button" value="=">
      =
    </button>
  </div>
);

export default Calculator;
