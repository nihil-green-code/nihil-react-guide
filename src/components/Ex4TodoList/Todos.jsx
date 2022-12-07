import React from 'react';

export default function Todos({ todos, setTodos }) {
  function deleteTodo(id) {
    const filterTodos = todos.filter((item) => item.id !== id);

    setTodos(filterTodos);
  }

  return (
    <>
      <div className='todo-list'>
        {todos.map((item) => (
          <div key={item.id} className='todo-item'>
            <div>{item.title}</div>
            <div>{item.content}</div>
            <div>
              <button onClick={() => deleteTodo(item.id)}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
