import React from 'react'
import TradingViewWidget from './TradingView'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from './Card'
import img1 from '../assets/Screenshot_2024-03-05_192140-removebg-preview.png'

function Cards() {
  return (
    <div className='p-2 w-full h-full mb-2'>
     <p className='text-slate-700 pl-4 pb-4 font-semibold'>
      Cryptocurrencies <span className='tracking-tight font-semibold'>&gt;&gt;</span>
      <span className='text-black font-semibold'> Bitcoin</span>
    </p>
    <Card/>
    </div>
  )
}

export default Cards
