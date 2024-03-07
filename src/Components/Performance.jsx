import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
function Performance() {
  return (
    <div className=' s:w-full p-2  '>
      <div className='flex flex-start gap-6 text-slate-600 pl-3 text-lg s:full s:overflow-scroll s:overflow-y-hidden' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div>Overview</div>
      <div>Fundamentals</div>  
      <div className='text-nowrap' ><span>New Insights</span> </div>    
      <div>Sentiments</div>  
      <div>Team</div>  
      <div>Technicals</div>  
      <div>Tokenomics</div>  
      </div>
      <hr className='font-bold pb-2 '/>
       <div className='bg-white rounded-md p-7 s:w-full lg:full'>


        {/* Performance */}


        <h1 className='text-2xl font-bold pb-2'>Performance</h1>

        <div className='grid grid-cols-4 py-4 px-4 w-full s:text-xs sm:text-sm md:text-normal'>
          <div className='col-span-1'><div className='flex flex-col gap-2 text-slate-600'><div className='text-nowrap text-left '>Today's-Low</div><div className='text-nowrap text-left font-semibold'>46,930.22</div></div></div>
          <div className='col-span-2 my-auto'> <div className="s:w-10/12 md:w-full  mx-auto h-2 flex justify-center my-auto  overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <input type="range" min="0" max="100" value="45" className="w-full my-auto opacity-0 cursor-pointer" /></div></div>
          <div className='col-span-1'><div className='flex flex-col gap-2 text-slate-500'><div className='text-right text-nowrap'>Today's-High</div><div className='text-right text-nowrap font-semibold'>49,343.83</div></div></div>
          
          <div className='col-span-1 mt-6'><div className='flex flex-col gap-2 text-slate-600'><div className='text-nowrap text-left'>52W Low</div><div className='text-nowrap text-left font-semibold'>16,930.22</div></div></div>
          <div className='col-span-2  my-auto '> <div className="s:w-10/12  md:w-full mx-auto  h-2 flex justify-center my-auto  overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <input type="range" min="0" max="100" value="45" className="w-full my-auto opacity-0 cursor-pointer" /></div></div>
          <div className='col-span-1 mt-6'><div className='flex flex-col gap-2 text-slate-600'><div className='text-right text-nowrap'>52W High</div><div className='text-right text-nowrap font-semibold'>49,743.82</div></div></div>
    </div>
    {/* Fundamentals */}
 
    <div>
        <div className='flex my-auto gap-2 text-xl text-slate-600 font-bold py-3'>Fundamentals
            <div className='my-auto'><CiCircleInfo className='my-auto fill-slate-500 font-bold'/></div>
        </div>
      <div className='c:flex s:justify-between w-full pb-8 s:text-xs sm:text-sm md:text-normal  s:overflow-scroll s:overflow-y-hidden' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
  {/* First Column */}
  <div className='s:flex-col s:w-full sm:flex flex-col w-2/4'>
    <div className='flex justify-between p-4'>
      <div className='text-left text-slate-800 text-nowrap'>Bitcoin Price</div>
      <div className='text-right font-semibold text-nowrap'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left text-slate-800 text-nowrap'>25h Low / 24h high</div>
      <div className='text-right font-semibold text-nowrap'>$16,382.07 / $16,874.12</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left text-slate-800 text-nowrap'>7d Low / 7d high</div>
      <div className='text-right font-semibold text-nowrap'>$16,382.07 / $16,874.12</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left text-slate-800 text-nowrap'>Trading Volume</div>
      <div className='text-right font-semibold text-nowrap'>$23,249,202,782</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4 text-nowrap'>
      <div className='text-left text-slate-800 text-nowrap'>Market Cap Rank </div>
      <div className='text-right font-semibold text-nowrap'>#1</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
  </div>
  <div className="s:none sm:w-24 "></div>
  {/* Second Column */}
  <div className='s:flex-col s:w-full md:flex flex-col w-2/4'>
    <div className='flex justify-between p-4 '>
      <div className='text-left text-slate-800 text-nowrap'>Market Cap</div>
      <div className='text-right font-semibold text-nowrap'>$323,570,209,047</div>
    </div>
    <div className='border-t border-gray-300 w-full '></div>
    <div className='flex justify-between p-4'>
      <div className='text-left text-slate-800 text-nowrap'>Market Cap Dominance</div>
      <div className='text-right font-semibold text-nowrap'>38.343%</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div> 
    <div className='flex justify-between p-4'>
      <div className='text-left text-slate-800 text-nowrap'>Volume / Market Cap</div>
      <div className='text-right font-semibold text-nowrap'>0.0718</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-1'>
      <div className='text-left text-slate-800 my-auto px-3 text-nowrap'>All-Time High</div>
      <div className='text-left font-semibold'><div><div className='flex flex-col justify-end text-nowrap'><div className='flex gap-2 justify-end'><div className='text-left text-nowrap'>$69,044.77</div><div className='text-red-500 text-nowrap'>-75.6%</div></div><div className='text-slate-600 text-nowrap'>Nov 10, 2021 (about 1 year)</div></div></div></div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-1'>
      <div className='text-left text-slate-800 my-auto px-3 text-nowrap'>All-Time Low</div>
      <div className='text-left font-semibold text-nowrap'><div><div className='flex flex-col justify-end text-nowrap'><div className='flex gap-2 justify-end text-nowrap'><div className='text-left text-nowrap'>$67.81</div><div className='text-green-500 text-nowrap'>24729.1%</div></div><div className='text-slate-600 text-nowrap'>Jul 6, 2013 (over 9 year)</div></div></div></div>

    </div>
    <div className='border-t border-gray-300 w-full'></div>
  </div>
</div>
  
    </div>    
        </div> 
    </div>
  )
}

export default Performance;
