import React from 'react'
import Layout from './components/pages/Layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage  from "./components/pages/Home"
import Contact from './components/pages/Contact'
import LoginReg from './components/pages/auth/LoginReg'
import { ResetEmail } from './components/pages/auth/ResetEmail'
import { ResetPassword } from './components/pages/auth/ResetPassword'
import { DashBoard } from './components/pages/DashBoard'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element = {<HomePage/>}/>
          <Route path='contact' element = {<Contact/>}/>
          <Route path='login' element = {<LoginReg/>}/>
          <Route path='resetemail' element = {<ResetEmail/>}/>
          <Route path='resetpassword' element = {<ResetPassword/>}/>
          <Route path='dashboard' element = {<DashBoard/>}/>
          
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
