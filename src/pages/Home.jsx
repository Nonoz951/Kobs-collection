import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-white p-0 m-0'>
        <Header />
        <div className='flex'>
          <div className='w-[20%] border-[1px] border-r'>
            <Sidebar />
          </div>
          <div className='w-[80%]'>
            <Outlet/>
          </div>
          </div>
    </div>
  )
}

export default Home