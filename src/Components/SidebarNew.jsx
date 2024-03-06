import React from 'react';
import Sidebar from './Sidebar';
import Trending from './Trending';

function SidebarNew() {
  return (
    <div className='flex justify-center w-full'>
      <div className='mx-auto'>
        <Sidebar />
        <Trending />
      </div>
    </div>
  );
}

export default SidebarNew;
