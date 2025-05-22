import './App.css'
import  {
  Dashboard,
  AddTask
} from './pages'

function App() {
  return (
    <>
        <Dashboard />
        <AddTask name='task name' description='task description' />
    </>
  )
}

export default App
