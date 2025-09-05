import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import LeadForm from './components/Leadform/LeadForm';
import LeadList from './components/Leadlist/LeadList';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lead-form' element={<LeadForm />} />
        <Route path='/lead-list' element={<LeadList />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
        <ToastContainer position='top-center' theme="colored" />
    </>
  )
}

export default App