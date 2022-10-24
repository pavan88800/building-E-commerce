import './App.css'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './Pages/Register'
import { ToastContainer } from 'react-toastify'
function App () {
  return (
    <BrowserRouter>
      <Routes path='/*'>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route index path='login' element={<Login />} />
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App
