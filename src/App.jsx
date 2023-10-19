// packages
import { Route, Routes } from 'react-router-dom'

// components 
import { Sidebar } from './components';
import { Home, Kanban, Todo, Pomodoro } from './pages'

const App = () => {
  return (
    <div className='App'>
      <div className="App__container">
        <div className="App__container__sidebar">
          <Sidebar />
        </div>
        <div className="App__container__app">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/Todo' element={<Todo />} />
            <Route path='/Pomodoro' element={<Pomodoro />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
