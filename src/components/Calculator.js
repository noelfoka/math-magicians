import React, { useState } from 'react';
import Button from './Button';
import DisplayAnswer from './DisplayAnswer';
import './Calculator.css';

const Calculator = () => {
  const answer = useState('0');

  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div className="calculator">
      <DisplayAnswer answer={answer} />
      <Button value="AC" onClick={() => handleButtonClick('AC')} />
      <Button value="+/-" onClick={() => handleButtonClick('+/-')} />
      <Button value="%" onClick={() => handleButtonClick('%')} />
      <Button
        className="sign"
        value="/"
        onClick={() => handleButtonClick('/')}
      />
      <Button value="7" onClick={() => handleButtonClick('7')} />
      <Button value="8" onClick={() => handleButtonClick('8')} />
      <Button value="9" onClick={() => handleButtonClick('9')} />
      <Button
        className="sign"
        value="x"
        onClick={() => handleButtonClick('*')}
      />
      <Button value="4" onClick={() => handleButtonClick('4')} />
      <Button value="5" onClick={() => handleButtonClick('5')} />
      <Button value="6" onClick={() => handleButtonClick('6')} />
      <Button
        className="sign"
        value="-"
        onClick={() => handleButtonClick('-')}
      />
      <Button value="1" onClick={() => handleButtonClick('1')} />
      <Button value="2" onClick={() => handleButtonClick('2')} />
      <Button value="3" onClick={() => handleButtonClick('3')} />
      <Button
        className="sign"
        value="+"
        onClick={() => handleButtonClick('+')}
      />
      <Button
        className="zero"
        value="0"
        onClick={() => handleButtonClick('0')}
      />
      <Button value="." onClick={() => handleButtonClick('.')} />
      <Button
        className="sign"
        value="="
        onClick={() => handleButtonClick('=')}
      />
    </div>
  );
};

export default Calculator;
