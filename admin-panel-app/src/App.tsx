
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.tsx'
import Employees from './Pages/Employees.tsx'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/employees" element={<Employees/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
