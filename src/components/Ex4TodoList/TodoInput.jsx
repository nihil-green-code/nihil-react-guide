import React, { useState } from 'react';
import { useRef } from 'react';

export default function TodoInput({ setTodos }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const idRef = useRef(3);
  const titleRef = useRef();

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function onClickTodos(e) {
    e.preventDefault();

    if (!(title && content)) {
      return;
    }

    setTodos((prev) => [
      ...prev, {
        id: idRef.current++,
        title,
        content,
      }
    ]);
    setTitle('');
    setContent('');
    titleRef.current.focus();
  }

  return (
    <>
      <form className='todo-input'>
        <input
          type="text"
          placeholder='제목'
          value={title}
          onChange={onChangeTitle}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder='내용'
          value={content}
          onChange={onChangeContent}
        />
        <button onClick={onClickTodos}>추가</button>
      </form>
    </>
  );
}
