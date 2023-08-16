import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [answer, setAnswer] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickEvent = (event) => {
    if (!event.target.value) return;
    const { total, next, operation } = calculate(answer, event.target.value);
    setAnswer({ total, next, operation });
  };

  const { total, next } = answer;

  return (
    <div className="aside" data-testid="cal-answer">
      <h2>LET&#39;S DO SOME MATHS!</h2>
      <div className="calculator">
        <div className="cal-answer">
          {next ? (
            <div className="answer">{next}</div>
          ) : (
            <div className="answer">{total}</div>
          )}
        </div>
        <button type="button" value="AC" onClick={clickEvent}>
          AC
        </button>
        <button type="button" value="+/-" onClick={clickEvent}>
          +/-
        </button>
        <button type="button" value="%" onClick={clickEvent}>
          %
        </button>
        <button className="sign" type="button" value="÷" onClick={clickEvent}>
          ÷
        </button>
        <button type="button" value="7" onClick={clickEvent}>
          7
        </button>
        <button type="button" value="8" onClick={clickEvent}>
          8
        </button>
        <button type="button" value="9" onClick={clickEvent}>
          9
        </button>
        <button className="sign" type="button" value="x" onClick={clickEvent}>
          x
        </button>
        <button type="button" value="4" onClick={clickEvent}>
          4
        </button>
        <button type="button" value="5" onClick={clickEvent}>
          5
        </button>
        <button type="button" value="6" onClick={clickEvent}>
          6
        </button>
        <button className="sign" type="button" value="-" onClick={clickEvent}>
          -
        </button>
        <button type="button" value="1" onClick={clickEvent}>
          1
        </button>
        <button type="button" value="2" onClick={clickEvent}>
          2
        </button>
        <button type="button" value="3" onClick={clickEvent}>
          3
        </button>
        <button className="sign" type="button" value="+" onClick={clickEvent}>
          +
        </button>
        <button
          className="number zero"
          type="button"
          value="0"
          onClick={clickEvent}
        >
          0
        </button>
        <button type="button" value="." onClick={clickEvent}>
          .
        </button>
        <button
          className="assign"
          type="button"
          value="="
          onClick={clickEvent}
          data-testid="answer"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
