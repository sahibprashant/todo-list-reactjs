import React from 'react'
import { todoContext } from '../context/Context'
import TodoItem from './TodoItem';

const TaskList = () => {
  const { state, dispatch } = todoContext();

  function handleCheck(value, todoItem) {
    dispatch({
      type: 'TODO_COMPLETE', payload: {
        item: todoItem,
        checked: value
      }
    });
  }

  function handleRemove(item) {
    dispatch({ type: 'TODO_REMOVE', payload: item });
  }

  return (
    <div className='taskList'>
      {state.map((item, index) => {
        return (
          <TodoItem
            key={index}
            data={item}
            onCheck={(value) => { handleCheck(value, item) }}
            onRemove={() => { handleRemove(item) }}
          />
        )
      })}
    </div>
  )
}

export default TaskList