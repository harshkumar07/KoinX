import React, { useEffect, useState } from 'react'
import TradingViewWidget from './TradingView'
import bitcoin from '../assets/bitcoin.png'
import axios from 'axios'
import Performance from './Performance'
import { MdArrowDropUp  } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Card() {

    const [bitData, setBitData] = useState(null);
      // useEffect(() => {
      //     const fetchData = async () => {
      //       try {
      //         const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true");
      //         const bitcoinData = response.data?.bitcoin;
      
      //         if (bitcoinData) {
      //           const { inr, usd, usd_24h_change } = bitcoinData;
      //           setBitData({ name: 'Bitcoin', inr, usd, usd_24h_change });
      //         }
      //       } catch (error) {
      //         console.error("Error fetching Bitcoin data:", error);
      //       }
      //     };
      
      //     fetchData();
      //   }, []);


  return (
    <div className=' s:w-full bg-white rounded-lg p-3 pt-6 '>
        <div className='overflow-hidden'>
        <div className='flex gap-3 my-auto'>
        <div className='my-auto'><img className='w-8 h-8 ml-4 my-auto' src={bitcoin} /></div>
        <div className='text-xl my-auto font-semibold'>Bitcoin</div>
        <div className='font-light my-auto'>BTC</div>
        <div className='my auto bg-slate-500 text-white p-2 ml-7 px-3 rounded-md'>Rank #1</div>
        </div>

        <div className='ml-3'>
        {bitData && (
  <div>
    <div className='flex gap-3 p-1'>
      <p className='my-auto text-3xl font-bold'>${bitData.usd.toLocaleString()}</p>
      <p className={`flex gap-1 my-auto px-1 py-.5 rounded-sm font-semibold ${bitData.usd_24h_change < 0 ? 'text-red-800 bg-red-100' : 'text-green-800 bg-green-100'}`}>
      <div className='my-auto'>
            {bitData.usd_24h_change < 0 ? <IoMdArrowDropdown className='my-auto'/> : <MdArrowDropUp className='my-auto'/>}
    </div>
  <div className='my-auto'>{bitData.usd_24h_change.toFixed(2)}%</div>
    </p>
      <p className='my-auto text-slate-400'>(24H)</p>
    </div>
    <div>
      <p className='text-xl p-1 pb-2 font-semibold'>₹{bitData.inr.toLocaleString()}</p>
    </div>
  </div>    
        )}
            </div>
      <TradingViewWidget className='pt-3'/> 
      </div>
      {/* <Performance className='bg-slate-100'/> */}
    </div>
     
  )
}

export default Card
