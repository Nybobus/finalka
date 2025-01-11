import React from 'react'
import './App.scss'
import Home from './pages/Home'
import Header from './components/Header/Header'
import ExchangePage from './pages/ExchangePage'
import AdminPage from './pages/AdminPage'
import Login from './pages/Login';
import SignUP from './pages/SignUP';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Header/>
    

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Exchange' element={<ExchangePage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUP />} />
    </Routes>
    </>
  )
}

export default App