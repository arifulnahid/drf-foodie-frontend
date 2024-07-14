import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../header/Navbar'
import AuthProvider from '../../authContext/authProvider'

export default function Home() {
  return (
    <AuthProvider>
      <div>
        <Menu/>
        <div className='p-4'>
          <div className='min:h-screen'>
          <Outlet/>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
