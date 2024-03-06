import React from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import img1 from '../assets/Screenshot_2024-03-06_121542-removebg-preview.png'
import img2 from '../assets/Screenshot_2024-03-06_121606-removebg-preview.png'

function Sentiments() {
  return (
    <div className='s:w-full p-2  max-h-max'>
       <div className='p-7 bg-white rounded-lg  '>
      <div className='text-2xl font-bold'>Sentiments</div>
      <div className='text-xl pt-2 text-slate-500 font-bold flex gap-2 '>Key Events<div className='my-auto'><IoMdInformationCircle className='my-auto'/></div></div>
      <div className='flex gap-3 mt-4 s:overflow-scroll s:overflow-y-hidden' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className='bg-sky-200 rounded-lg p-4 h-max flex gap-2'><div className='w-48 h-max' ><img className='cover'src={img1}/></div> <div className='flex flex-col pb-2'><div className='font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, natus.</div><div className='text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam distinctio quae, aliquid explicabo quis harum, possimus corrupti enim excepturi dicta dolore! Sapiente ut, blanditiis quo neque omnis incidunt excepturi ullam!</div></div></div>
      <div className='bg-green-200 rounded-lg p-4 h-max flex gap-2'><div className='w-52 h-max'><img className='cover' src={img2}/></div> <div className='flex flex-col pb-2'><div className='font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, natus.</div><div className='text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam distinctio quae, aliquid explicabo quis harum, possimus corrupti enim excepturi dicta dolore! Sapiente ut, blanditiis quo neque omnis incidunt excepturi ullam!</div></div></div>
      </div>
      <div className='flex gap-2 text-slate-500 text-xl mt-6 font-semibold my-auto'>
        <div className='pb-2 my-auto'>Analyst Estimation</div>
        <div className='my-auto relative bottom-1'><IoMdInformationCircle className='my-auto'/></div>
      </div>

       <div className='flex s:mx-auto sm:mx-none  flex-start max-h-max s:gap-3 sm:gap-8 my-autos s:w-full s:overflow-scroll s:overflow-y-hidden content-center' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className='mt-3 ml-0'>
       <div className='s:p-6  max-h-max py-auto rounded-full my-auto w-24 h-24  bg-green-100 text-green-600 font-semibold flex items-center justify-center text-2xl'>76%</div>
       </div>



        <div className='my-auto flex flex-col s:gap-0.5 sm:gap-2  text-slate-600'>
        <div className='my-auto  text-base flex s:gap-3 sm-gap-6 w-96'><div>Buy</div> <div className=" s:w-1/3 sm:w-1/2 my-auto h-2 rounded-full bg-green-500"></div> <div>76%</div></div>
        <div className='my-auto  text-base flex s:gap-1.5 sm:gap-4 w-96'><div>Hold</div> <div className="s:w-8 my-auto flex h-2 rounded-full bg-slate-500"></div> <div>8%</div></div>
        <div className='my-auto  text-base flex s:gap-3 sm:gap-6 w-96'><div>Sell</div> <div className="s:w-16 my-auto h-2 rounded-full bg-red-500"></div> <div>16%</div></div>
        </div>
        </div> 

        
      </div>
    </div>
  )
}

export default Sentiments
