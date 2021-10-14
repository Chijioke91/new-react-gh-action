import { useState } from 'react';
import styles from './counter.module.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState(1);

  const onChange = (e) => setInputVal(e.target.value);

  const add = () => setCounter(+counter + +inputVal);
  const subtract = () => setCounter(+counter - +inputVal);

  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2
        data-testid="counter"
        className={
          counter >= 100 ? styles.green : counter <= -100 ? styles.red : ''
        }
      >
        {counter}
      </h2>
      <button data-testid="subtract-btn" onClick={subtract}>
        -
      </button>
      <input
        type="number"
        data-testid="input"
        value={inputVal}
        onChange={onChange}
        className={styles.center}
      />
      <button data-testid="add-btn" onClick={add}>
        +
      </button>
    </div>
  );
}
