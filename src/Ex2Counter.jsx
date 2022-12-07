import React from 'react';
import { useState } from 'react';
import Buttons from './components/Ex2/Buttons';

export default function Ex2Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={increaseCount}>올리기</button>
      <button onClick={decreaseCount}>내리기</button> */}
      <Buttons setCount={setCount} />
    </>
  );
}
