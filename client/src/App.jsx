import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Login from './component/Login'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App
