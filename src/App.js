import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import './index.css'

const App = () => {
  return (
    <div className='w-full h-screen bg-white p-0 m-0'>
      <Header/>
        <div className='w-[20%] boder-[1px] border-r'>
            <Sidebar />
        </div>
    </div>
  )
}

export default App