import { useState } from 'react';

import './index.css';

let row = 10;

const arr = new Array(10)
  .fill([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .map((start, i) => {
    if (i === 0) return start;

    const newArray = start.map(val => val + row);
    row += 10;
    return newArray;
  });

const getPortion = (i, j) => arr[`${i}`].slice(j - 1, j + 2);

const errorMessage = number =>
  `Number (${number}) doesn't have 8 surrounding numbers`;

const ArrayTask = () => {
  const [number, setNumber] = useState(1);
  const [sum, setSum] = useState(null);
  const [error, setError] = useState('');

  const onNumberChange = e => {
    const { value } = e.target;
    const parsed = parseInt(value || 0, 10);

    if (error) setError('');

    if (sum) setSum(null);

    if (!parsed || parsed < 0) return setNumber(1);

    if (parsed > 100) return setNumber(100);

    return setNumber(parsed);
  };

  const findSum = () => {
    if (number < 11 || number > 90) return setError(errorMessage(number));

    const secondDigit = number.toString()[1];
    const j = secondDigit === '0' ? 9 : parseInt(secondDigit, 10) - 1;

    if ([0, 9].includes(j)) return setError(errorMessage(number));

    const num = Math.floor((number / 100) * 10);
    const i = number % 10 === 0 ? num - 1 : num;

    const result = [
      ...getPortion(i - 1, j),
      ...getPortion(i, j),
      ...getPortion(i + 1, j),
    ].reduce((a, b) => a + b, 0);

    return setSum(result);
  };

  return (
    <section className="array-task__section">
      <h3 className="array-task__h3">Choose number (1 - 100)</h3>
      <label htmlFor="number" className="array-task__label">
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={onNumberChange}
        />
      </label>
      <button className="array-task__button" type="button" onClick={findSum}>
        OK
      </button>
      {error && <p className="array-task__p array-task__error">{error}</p>}
      {sum && (
        <p className="array-task__p">
          Sum of 8 surrounding numbers including {number} is {sum}
        </p>
      )}
    </section>
  );
};

export default ArrayTask;
