import React, { useState } from 'react'
import { todoContext } from '../context/Context';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const { state, dispatch } = todoContext();

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addTodo() {
    dispatch({ type: 'TODO_ADD', payload: input });
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
          placeholder='Enter task here'
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