import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/UI/Navbar'

function layout() {
  return (
    <div>
        <Navbar/>

        <Outlet/>
    </div>
  )
}

export default layout