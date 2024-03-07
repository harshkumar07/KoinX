import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Performance from './Components/Performance';
import Sentiments from './Components/Sentiments';
import Sidebar from './Components/Sidebar';
import Bitcoin from './Components/Bitcoin';
import Token from './Components/Token';
import Teams from './Components/Teams';
import CoinCarousel from './Components/CoinCarousel'
import Trending from './Components/Trending';
import SidebarNew from './Components/SidebarNew';

function App() {

  return (
    <div className='bg-slate-100 w-full h-full'>
      <Navbar/>
      <div className='grid grid-cols-4'>
      <div className='s:col-span-4 lg:col-span-3 drop-shadow-md'><Cards/></div>
      <div className='s:hidden lg:block lg:col-span-1 drop-shadow-md'><Sidebar/></div>
      <div className='s:col-span-4 lg:col-span-3 drop-shadow-md'><Performance/></div>
      <div className='s:hidden lg:block lg:col-span-1 drop-shadow-md relative bottom-44'><Trending/></div>
      <div className='s:col-span-4 lg:col-span-3 drop-shadow-md'><Sentiments/></div>
      <div className='s:col-span-4 lg:col-span-3 drop-shadow-md'><Bitcoin/></div>
      <div className='s:col-span-4 lg:col-span-3 drop-shadow-md'><Token/></div>
      <div className='s:col-span-4 lg:col-span-3 drop-shadow-md'><Teams/></div>
      {/* <div className='s:col-span-4 s:grid s:grid-cols-1 p-auto lg:hidden s:justify-center'></div> */}
      
      <div className='s:col-span-4 lg:col-span-4 drop-shadow-md '><CoinCarousel/></div>
      <div className='s:col-span-4 s:w-full s:flex md:justify-around md:flex-row s:justify-center s:my-auto s:flex-col lg:hidden'>
        <div className='drop-shadow-md s:my-auto max-w-96!important min-w-96 s:flex s:flex-col s:m-0!important'><Sidebar/></div>
        <div className='drop-shadow-md s:my-auto max-w-96!important min-w-96'><Trending/></div>
      </div>
      </div>
    </div>
  );
}

export default App;
