import React from 'react'
import logo from '../assets/images/logo.png'

const SignUp = () => {
  return (
    <div className='w-full h-screen flex'>
        <div className="flex w-[50%] rounded-md">
            <img src={logo} className='w-full h-full object-cover' alt="logo"/>
        </div>

        <div className="flex w-[50%] items-center justify-center">
            <h1 className='text-3xl font-bold text-primary'>Register</h1>
        </div>
    </div>
  )
}

export default SignUp