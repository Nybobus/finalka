import React from 'react'
import './App.scss'
import Home from './pages/Home'
import Header from './components/Header/Header'
import ExchangePage from './pages/ExchangePage'
import AdminPage from './pages/AdminPage'
import Login from './pages/Login';
import SignUP from './pages/SignUP';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkPage from './pages/WorkPage'
import HelpPage from './pages/HelpPage'
import CapablePage from './pages/CapablePage'
import GeoPage from './pages/GeoPage'
import PeoplePage from './pages/PeoplePage'
import Profile from './pages/ProfilePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx'


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
      <Route path="/Works" element={<WorkPage />} />
      <Route path="/Help" element={<HelpPage />} />
      <Route path="/Capable" element={<CapablePage />} />
      <Route path="/Geo" element={<GeoPage />} />
      <Route path="/People" element={<PeoplePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      
    </Routes>
    </>
  )
}

export default App