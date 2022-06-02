import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Calculator from '../Calculator';
import calculate from '../../logic/calculate';

describe('User interaction', () => {
  test('simulate number', () => {
    render(<Calculator />);
    const num = screen.getByText('7');
    const output = screen.getByRole('none');
    fireEvent.click(num);
    expect(output.textContent).toBe('7');
  });

  test('simulate operation', () => {
    render(<Calculator />);
    const plusSymbol = screen.getByText('+');
    const output = screen.getByRole('none');
    fireEvent.click(plusSymbol);
    expect(output.textContent).toBe('0+');
  });

  test('simulate right answer', () => {
    render(<Calculator />);
    const num = screen.getByText('4');
    const num1 = screen.getByText('7');
    const operation = screen.getByText('+');
    const equalTo = screen.getByText('=');
    const answer = screen.getByRole('none');
    fireEvent.click(num);
    fireEvent.click(operation);
    fireEvent.click(num1);
    fireEvent.click(equalTo);
    expect(answer.textContent).toBe('11');
  });
});

describe('Validate calculate functionality', () => {
  const num = { total: null, next: null, operation: null };
  test('multiply', () => {
    let res = calculate(num, '5');
    res = calculate(res, 'x');
    res = calculate(res, '5');
    res = calculate(res, '=');
    expect(res.total).toBe('25');
  });

  test('addition', () => {
    let res = calculate(num, '5');
    res = calculate(res, '+');
    res = calculate(res, '5');
    res = calculate(res, '=');
    expect(res.total).toBe('10');
  });
  test('division', () => {
    let res = calculate(num, '5');
    res = calculate(res, '÷');
    res = calculate(res, '5');
    res = calculate(res, '=');
    expect(res.total).toBe('1');
  });
  test('modular', () => {
    let res = calculate(num, '3');
    res = calculate(res, '%');
    res = calculate(res, '2');
    res = calculate(res, '=');
    expect(res.total).toBe('1');
  });

  test('substraction', () => {
    let res = calculate(num, '5');
    res = calculate(res, '-');
    res = calculate(res, '5');
    res = calculate(res, '=');
    expect(res.total).toBe('0');
  });

  test('Divide by zero', () => {
    let res = calculate(num, '5');
    res = calculate(res, '÷');
    res = calculate(res, '0');
    res = calculate(res, '=');
    expect(res.total).toBe('Can\'t divide by 0.');
  });
});
