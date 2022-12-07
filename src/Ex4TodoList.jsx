import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TodoInput from './components/Ex4TodoList/TodoInput';
import Todos from './components/Ex4TodoList/Todos';
import todoData from './data/ex4_todos';

export default function Ex4TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos((prev) => [
      ...prev,
      ...todoData,
    ]);
  }, []);

  return (
    <>
      <TodoInput setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}
