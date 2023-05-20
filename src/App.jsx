import './App.css'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TaskList from './components/TaskList'
import Status from './components/Status'

function App() {
  return (
    <div className='App'>
      <Header />
        <div className='todo-list-app'>
          <AddTodo />
          <Status />
          <TaskList />
        </div>
    </div>
  )
}

export default App
