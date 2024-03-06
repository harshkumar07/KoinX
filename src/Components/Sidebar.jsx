import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import img1 from '../assets/Screenshot_2024-03-05_192140-removebg-preview.png';

function Sidebar() {
  return (
    <div className='flex s:flex-row lg:flex-col gap-3 mt-10 pt-2 drop-shadow-md'>
      <div className='bg-blue-700 text-white w-full text-center justify-center p-8 px-6 rounded-md mx-auto max-w-72'>
        <div className='text-2xl font-bold'>Get Started with KoinX for FREE</div>
        <p className='pt-4 text-sm'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        <img className='w-40 h-40 mx-auto py-5' src={img1} alt="KoinX" />
        <button className='bg-white flex p-2 px-3 text-black rounded-lg my-auto md:text-sm lg:text-base font-semibold gap-2 mt-3 mx-auto'>
          Get Started for Free 
          <FaArrowRight className='my-auto' />
        </button>
      </div>
    </div>
  );
}
export default Sidebar;
