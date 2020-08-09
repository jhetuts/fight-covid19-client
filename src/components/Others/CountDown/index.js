import React, { useEffect, useState } from "react";

import "./countdown.css";

const CountDown = ({
  timeLimit,
  countDown,
  setCountDown,
  reachedLimit,
  gameOver,
}) => {
  const [counter, setCounter] = useState(timeLimit);
  useEffect(() => {
    if (gameOver) {
      return setCounter(timeLimit);
    }

    let timer;

    clearTimeout(timer);

    if (counter > -1) {
      timer = setTimeout(() => {
        setCounter(counter - 1);
        setCountDown(counter);

        if (counter === 0) {
          setCountDown(null);
          reachedLimit();
        }
      }, 1000);
    }

    return () => {
      if (gameOver) clearTimeout(timer);
    };
  }, [counter, gameOver]);
  return countDown === 0 ? (
    <div></div>
  ) : (
    <div className="Countdown">{countDown}</div>
  );
};
export default CountDown;
