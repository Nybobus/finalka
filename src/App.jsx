import React from 'react'
import Header from './components/Header/Header'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Contacts from './pages/Contacts'

const App = () => {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App