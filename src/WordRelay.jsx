import { useState } from "react";

function WordRelay() {
  const [value, setValue] = useState('');
  const [words, setWords] = useState([]);
  const [message, setMessage] = useState('시작 단어를 입력하세요.');

  const lastWord = words[words.length - 1];
  const clearCount = words.length;

  const onChangeInput = (e) => {
    e.preventDefault();

    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (words.includes(value)) {
      setMessage('이미 사용된 단어입니다.');
    } else {
      if (words.length === 0) {
        setWords((prev) => [...prev, value]);
        setMessage('다음 단어를 입력하세요.');
      } else {
        if (value[0] === lastWord[lastWord.length - 1]) {
          setWords((prev) => [...prev, value]);
          setMessage('성공!');
        } else {
          setMessage('이전 단어의 끝 글자와 현재 단어의 첫 글자가 다릅니다!');
        }
      }
    }

    setValue('');
  };

  return (
    <>
      <div>
        <p>{message} {words.length !== 0 && (<>(이전 단어: {words[words.length - 1]})</>)}</p>
      </div>
      <div>{clearCount ? `${clearCount}회` : ''}</div>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={value} onChange={onChangeInput} />
        <button>제시</button>
      </form>
    </>
  );
}

export default WordRelay;
