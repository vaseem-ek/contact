import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Dashbod from './pages/Dashbod'
import { Routes,Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'



function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dash' element={<Dashbod/>} />
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
