import React, { useState, useRef } from 'react';
import { IoMenu } from "react-icons/io5";
import logo from '../assets/brand-logo.svg';
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    setMenuOpen(!menuOpen);
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <div className='flex justify-between p-2 pt-3 px-4 font-semibold bg-white drop-shadow-md '>
        <div><img className='h-12 w-19 relative s:bottom-0 md:bottom-1 left-3 scale-110' src={logo} alt="Logo" /></div>
        <div className='flex s:hidden gap-3 md:flex md:gap-6'>
          <div className='p-2'>Crypto Taxes</div>
          <div className='p-2'>Free tools</div>
          <div className='p-2'>Resource Center</div>
          <div ><button className='bg-blue-600 text-white px-3 p-2 rounded-md'>Get Started</button></div>
        </div>      
        <button className='s:flex md:hidden my-auto' onClick={showNavbar}>
          {menuOpen ? <IoMdClose className='w-8 h-8' /> : <IoMenu className='w-8 h-8' />}
        </button>
      </div>

      <div className={`md:hidden flex flex-col w-5/12 h-screen z-10 absolute right-0 font-semibold bg-white drop-shadow-md  ${menuOpen ? 'transition-all' : 'hidden'}`} ref={navRef}>
        <div className='mx-auto flex-col flex gap-5 mt-6 pr-4 font-lg'>
          <div className='p-2'>Crypto Taxes</div>
          <div className='p-2'>Free tools</div>
          <div className='p-2'>Resource Center</div>
          <div className='p-1'><button className='text-white bg-blue-600 px-2.5 py-1.5 rounded-md'>Get Started</button></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
