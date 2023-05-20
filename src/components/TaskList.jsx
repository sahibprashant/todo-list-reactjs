import React from 'react'
import { todoContext } from '../context/Context'
import TodoItem from './TodoItem';

const TaskList = () => {
  const { state, setState } = todoContext();

  function handleCheck(value, item) {
    let tasks = state.map((i) => {
      if (i.id === item.id) {
        i.isDone = value;
      }
      return i;
    })
    setState(tasks);
  }

  function handleRemove(item){
    //select all items remaining current item
    let newlist = state.filter((i) => i.id !== item.id);
    setState(newlist);
  }

  return (
    <div className='taskList'>
      {state.map((item, index) => {
        return (
          <TodoItem
            key={index}
            data={item}
            onCheck={(value) => { handleCheck(value, item) }}
            onRemove={() => {handleRemove(item)}}
          />
        )
      })}
    </div>
  )
}

export default TaskList