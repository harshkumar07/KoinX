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


       {/* Performance  Detail -1*/}


       <div className='flex w-full justify-between py-4 px-2'>
    <div>
        <p className='text-nowrap'>Today's-low</p>
        <p className='text-nowrap'>46,930.22</p>
    </div>
    <div className='w-9/12 h-2 flex justify-center my-auto rounded-full overflow-hidden'> 
        <div className="w-5/6 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <input 
                type="range"
                min="0"
                max="100"
                value="45"
                className="w-full my-auto opacity-0 cursor-pointer" 
            />
        </div>
    </div>
    <div className="flex flex-col justify-end"> 
        <p className='text-right text-nowrap'>Today's-High</p> 
        <p className='text-right text-nowrap'>46,930.22</p> 
    </div>
</div>


         {/* Performance  Detail -2*/}


<div className='flex w-full justify-between py-4 px-2 '>
    <div>
        <p className='text-nowrap'>52W low</p>
        <p className='text-nowrap'>16,930.22</p>
    </div>
    <div className='w-9/12  h-2 flex justify-center my-auto rounded-full overflow-hidden'> 
        <div className="w-5/6 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <input 
                type="range"
                min="0"
                max="100"
                value="45"
                className="w-full my-auto opacity-0 cursor-pointer" 
            />
        </div>
    </div>
    <div className='flex flex-col justify-end'>
        <p className='text-right text-nowrap'>52W High</p>
        <p className='text-right text-nowrap'>46,73.83</p>
    </div>
</div>

    
    {/* Fundamentals */}
 
    <div>
        <div className='flex my-auto gap-2 text-xl text-slate-600 font-bold py-3'>Fundamentals
            <div className='my-auto'><CiCircleInfo className='my-auto fill-slate-500 font-bold'/></div>
        </div>
    {/* <table className='table-auto w-full mt-4 s:overflow-scroll s:overflow-y-hidden 'style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='text-gray-500 py-2'>Bitcoin</td>
              <td className='py-2'>$16,815.46</td>
              <td className='text-gray-500 py-2'>Market Cap</td>
              <td className='py-2'>$323,507,290,047</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='text-gray-500 py-2'>24h Low/24h High</td>
              <td className='py-2'>$16,382.46/$16,815.46</td>
              <td className='text-gray-500 py-2'>Market Cap Dominance</td>
              <td className='py-2'>38.343%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='text-gray-500 py-2'>7d Low/7d High</td>
              <td className='py-2'>$16,382.46/$16,815.46</td>
              <td className='text-gray-500 py-2'>Volume/Market Cap</td>
              <td className='py-2'>0.0718</td>
            </tr>
            <tr>
              <td className='text-gray-500 py-2'>Trading Volume</td>
              <td className='py-2'>$23,249,202,782</td>
              <td className='text-gray-500 py-2'>Market Cap Rank</td>
              <td className='py-2'>#1</td>
            </tr>
          </tbody>
        </table> */}



      <div className='sm:flex sm:justify-between w-full pb-8'>
  {/* First Column */}
  <div className='s:flex-col s:w-full sm:flex flex-col w-2/4'>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
  </div>
  <div className="s:none sm:w-24 "></div>
  {/* Second Column */}
  <div className='s:flex-col s:w-full sm:flex flex-col w-2/4'>
    <div className='flex justify-between p-4 '>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full '></div>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-right'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
    <div className='flex justify-between p-4'>
      <div className='text-left'>Bitcoin Price</div>
      <div className='text-left'>$16,815.46</div>
    </div>
    <div className='border-t border-gray-300 w-full'></div>
  </div>
</div>




    </div>

        
        </div> 

    </div>
  )
}

export default Performance
