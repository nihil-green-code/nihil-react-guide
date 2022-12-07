import React from 'react';

export default function Buttons({ setCount }) {
  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  function decreaseCount() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <button onClick={increaseCount}>올리기</button>
      <button onClick={decreaseCount}>내리기</button>
    </>
  );
}
