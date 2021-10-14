import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter';

let getByTestId;

beforeEach(() => {
  render(<Counter />);

  getByTestId = screen.getByTestId;
});

describe('Counter Tests', () => {
  test('should render header with correct text', () => {
    const headerEl = getByTestId('header');

    expect(headerEl.textContent).toBe('My Counter');
  });

  test('counter should initially start with 0', () => {
    const counterEl = getByTestId('counter');
    expect(counterEl.textContent).toBe('0');
  });

  test('input contains initial value of 1', () => {
    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe('1');
  });

  test('Add button renders with plus(+) sign', () => {
    const addBtn = getByTestId('add-btn');

    expect(addBtn.textContent).toBe('+');
  });

  test('Subtract button renders with minus(-) sign', () => {
    const subtractBtn = getByTestId('subtract-btn');

    expect(subtractBtn.textContent).toBe('-');
  });

  test('should change input value correctly', () => {
    const inputEl = getByTestId('input');

    expect(inputEl.value).toBe('1');

    fireEvent.change(inputEl, {
      target: { value: 5 },
    });

    expect(inputEl.value).toBe('5');
  });

  test('click the plus button, adds 1 to counter', () => {
    const addBtn = getByTestId('add-btn');
    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe('0');

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe('1');
  });

  test('click the subtract button, subtracts 1 from counter', () => {
    const subtractBtn = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe('0');

    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe('-1');
  });

  test('update counter value with input value after plus button is clicked', () => {
    const addBtn = getByTestId('add-btn');
    const inputEl = getByTestId('input');
    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe('0');

    fireEvent.change(inputEl, { target: { value: '5' } });

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe('5');
  });
  test('update counter value with input value after subtract button is clicked', () => {
    const subtractBtn = getByTestId('subtract-btn');
    const inputEl = getByTestId('input');
    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe('0');

    fireEvent.change(inputEl, { target: { value: '5' } });

    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe('-5');
  });

  test('adding and subtracting gives the correct value', () => {
    const subtractBtn = getByTestId('subtract-btn');
    const addBtn = getByTestId('add-btn');
    const inputEl = getByTestId('input');
    const counterEl = getByTestId('counter');

    fireEvent.change(inputEl, { target: { value: '10' } });

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe('20');

    fireEvent.change(inputEl, { target: { value: '5' } });

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe('30');
  });

  test('counter contains correct className', () => {
    const subtractBtn = getByTestId('subtract-btn');
    const addBtn = getByTestId('add-btn');
    const inputEl = getByTestId('input');
    const counterEl = getByTestId('counter');

    expect(counterEl.className).toBe('');

    fireEvent.change(inputEl, { target: { value: '50' } });

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe('');

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe('green');

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe('green');

    fireEvent.click(subtractBtn);

    fireEvent.click(subtractBtn);

    expect(counterEl.className).toBe('');

    fireEvent.click(subtractBtn);

    fireEvent.click(subtractBtn);

    expect(counterEl.className).toBe('');

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(counterEl.className).toBe('red');
  });
});
