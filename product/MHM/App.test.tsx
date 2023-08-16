import React from 'react';
import {render} from '@testing-library/react-native';
import {it, expect} from "@jest/globals"
import App from '../App';

it('renders correctly', () => {
  const { getByText } = render(<App />);

  //const number0 = getByText('0');
  //expect(number0).toBeDefined();

  const number1 = getByText('1');
  expect(number1).toBeDefined();

  const number2 = getByText('2');
  expect(number2).toBeDefined();

  const number3 = getByText('3');
  expect(number3).toBeDefined();

  const number4 = getByText('4');
  expect(number4).toBeDefined();

  const number5 = getByText('5');
  expect(number5).toBeDefined();

  const number6 = getByText('6');
  expect(number6).toBeDefined();

  const number7 = getByText('7');
  expect(number7).toBeDefined();

  const number8 = getByText('8');
  expect(number8).toBeDefined();

  const number9 = getByText('9');
  expect(number9).toBeDefined();

  const addition = getByText('+');
  expect(addition).toBeDefined();

  const subtraction = getByText('-');
  expect(subtraction).toBeDefined();

  const multiplication = getByText('*');
  expect(multiplication).toBeDefined();
  
  const division = getByText('/');
  expect(division).toBeDefined();
  
  const equal = getByText('=');
  expect(equal).toBeDefined();
  
  const clean = getByText('R');
  expect(clean).toBeDefined();
});