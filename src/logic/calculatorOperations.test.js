import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';
import operate from './operate';

describe('Conduct simple operations', () => {
  const number1 = 9;
  const number2 = 3;
  let addition;
  let subtraction;
  let multiplication;
  let division;
  let cantDivide;
  let modulusOperator;

  beforeEach(() => {
    addition = operate(number1, number2, '+');
    subtraction = operate(number2, number1, '-');
    multiplication = operate(number1, number2, 'x');
    division = operate(number1, number2, '÷');
    cantDivide = operate(number2, 0, '÷');
    modulusOperator = operate(number1, number2, '%');
  });

  it('should click number to display', () => {
    render(<Calculator />);
    const number = screen.getByTestId('cal-answer');
    userEvent.click(screen.getByText('2'));
    expect(number.innerHTML).toMatch('2');
  });

  it('should perform an addition', () => {
    expect(addition).toBe('12');
  });

  it('should perform a subtraction', () => {
    expect(subtraction).toBe('-6');
  });

  it('should perform a multiplication', () => {
    expect(multiplication).toBe('27');
  });

  it('should perform a division', () => {
    expect(division).toBe('3');
  });

  it('should check for not dividing by 0', () => {
    expect(cantDivide).toBe("Can't divide by 0.");
  });

  it('should check for modulus of a number', () => {
    expect(modulusOperator).toBe('0');
  });
});
