import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

const Layout = () => {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout
