import React, { useEffect, useState } from 'react'
import { todoContext } from '../context/Context'

const Status = () => {
  const [finished, setFinished] = useState(0);
  const { state } = todoContext();

  useEffect(() => {
    let num = state.reduce((acc, curr) => acc + (curr.isDone ? 1 : 0), 0);
    setFinished(num);
  }, [state])

  return (
    <div className='statusContainer'>
      <span>Total Tasks: {state.length}</span>
      <span>Completed: {finished}</span>
    </div>
  )
}

export default Status