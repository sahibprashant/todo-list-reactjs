import './App.css'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TaskList from './components/TaskList'
import Status from './components/Status'

function App() {
  return (
    <div className='App'>
      <Header />
      <AddTodo />
      <TaskList />
      <Status />
    </div>
  )
}

export default App
