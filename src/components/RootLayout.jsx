import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className='h-screen bg-white'>
      <Outlet />
    </div>
  )
}

export default RootLayout
