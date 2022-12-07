import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function Ex3WordRelay() {
  const [word, setWord] = useState('');
  const [preWord, setPreWord] = useState('기찻길');
  const [message, setMessage] = useState('단어를 입력하세요');

  const inputRef = useRef();
  const countRef = useRef(0);

  function onChangeInput(e) {
    setWord(e.target.value);
  }

  function onClickButton() {
    if (word[0] === preWord[preWord.length - 1]) {
      countRef.current++;
      setMessage('성공!');
      setPreWord(word);
      setWord('');
    } else {
      setMessage('실패!');
      setWord('');
    }

    inputRef.current.focus();
  }

  return (
    <>
      <div>{message}</div>
      <div>성공: {countRef.current} 이전 단어 : {preWord}</div>
      <input type="text" ref={inputRef} value={word} onChange={onChangeInput} />
      <button onClick={onClickButton}>제시</button>
    </>
  );
}
