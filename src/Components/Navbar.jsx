import React from 'react'
import { IoMenu } from "react-icons/io5";
import logo from '../assets/brand-logo.svg'

function Navbar() {
  return (
    <div className='flex justify-between p-2 pt-3 px-4 font-semibold bg-white drop-shadow-md '>
      <div><img className='h-12 w-19 relative s:bottom-0 md:bottom-1 left-3 scale-110' src={logo}/></div>
      <div className='flex s:hidden gap-3 md:flex md:gap-6'>
        <div className='p-2'>Crypto Taxes</div>
        <div className='p-2'>Free tools</div>
        <div className='p-2'>Resource Center</div>
        <div ><button className='bg-blue-600 text-white px-3 p-2 rounded-md'>Get Started</button></div>
      </div>
      <button className='s:flex md:hidden my-auto'><IoMenu className=' w-8 h-8 '/></button>
    </div>
  )
}
export default Navbar
