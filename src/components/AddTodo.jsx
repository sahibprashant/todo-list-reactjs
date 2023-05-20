import React, { useState } from 'react'
import { todoContext } from '../context/Context';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const { state, setState } = todoContext();

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addTodo() {
    const todoItem = {
      id: new Date().getTime().toLocaleString(),
      title: input,
      isDone: false,
    }
    setState([...state, todoItem]);
    setInput('');
  }

  return (
    <>
      <form
        className='addTodoForm'
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}>
        <input
          className='todoInput'
          type='input'
          placeholder='Enter todo item'
          name='todoText'
          value={input}
          onChange={handleInput}
          required
        />
        <input
          className='addBtn'
          type="submit"
          name="addTodoButton"
          value={'Add Todo'}
        />
      </form>
    </>
  )
}

export default AddTodo