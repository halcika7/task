import { useState } from 'react';

import './index.css';

const UiElement = () => {
  const [direction, setDirection] = useState('normal');

  const changeDirection = () =>
    setDirection(dir => (dir === 'normal' ? 'reverse' : 'normal'));

  return (
    <div className="spinner__wrapper">
      <span className={`spinner__span ${direction}`} />
      <button
        className="spinner__button"
        type="button"
        onClick={changeDirection}
      >
        Click Me
      </button>
    </div>
  );
};

export default UiElement;
