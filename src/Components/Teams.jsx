import React from 'react'
import img1 from '../assets/picture1.png'
import img2 from '../assets/picture2.png'
import img3 from '../assets/picture3.png'

function Teams() {
  return (
    <div className='s:w-full p-2  max-h-max'>
    <div className='p-7 bg-white rounded-lg  '>
        <div className='font-bold text-2xl'>Teams</div>
        {/* <div className='font-bold text-lg mt-4'>Initial Distribution</div> */}
       <div className=' text-slate-800 mt-4'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro repudiandae hic ea at mollitia aut sit praesentium aspernatur, est tempore? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, eos.</div>
        
        
        <div className='flex flex-col gap-3 mt-4'>
            {/*  */}
            <div className='w-full bg-blue-100  py-2 px-4 rounded-md my-auto h-full content-center'>
            <div className='flex s:flex-col s:items-center s:gap-2 sm:flex-row p-2 sm:gap-6 my-auto'>
                <div className='flex flex-col w-4/12  my-auto'>
                <div><img  className='rounded-md h-30 w-30'src={img1}/></div>
                <div>
                    <div className='mx-auto text-center font-bold pt-1 text-nowrap'>John Smith</div>
                    <div className='mx-auto text-xs text-center text-nowrap'>Designation here</div>
                </div>
                </div>
                <div className='mx-auto my-auto content-center h-full'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti dolore voluptatum placeat autem ipsum magni reiciendis necessitatibus ipsa, pariatur odio deserunt, itaque esse. Excepturi ipsum sunt, nihil asperiores laudantium ex corrupti sit voluptate labore nostrum, quas molestiae vel cupiditate modi voluptatem voluptatibus ad facilis quis adipisci perferendis in quasi!
                </div>
                </div>
            </div>
            {/*  */}
            <div className='w-full bg-blue-100  py-2 px-4 rounded-md my-auto h-full content-center'>
            <div className='flex s:flex-col s:items-center s:gap-2 sm:flex-row p-2 sm:gap-6 my-auto'>
                <div className='flex flex-col w-4/12  my-auto'>
                <div><img  className='rounded-md h-30 w-30'src={img2}/></div>
                <div>
                    <div className='mx-auto text-center font-bold pt-1 text-nowrap'>Elina Williams</div>
                    <div className='mx-auto text-xs text-center text-nowrap'>Designation here</div>
                </div>
                </div>
                <div className='mx-auto my-auto content-center h-full'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti dolore voluptatum placeat autem ipsum magni reiciendis necessitatibus ipsa, pariatur odio deserunt, itaque esse. Excepturi ipsum sunt, nihil asperiores laudantium ex corrupti sit voluptate labore nostrum, quas molestiae vel cupiditate modi voluptatem voluptatibus ad facilis quis adipisci perferendis in quasi!
                </div>
                </div>
            </div>
            {/*  */}
            <div className='w-full bg-blue-100  py-2 px-4 rounded-md my-auto h-full content-center'>
            <div className='flex s:flex-col s:items-center s:gap-2 sm:flex-row p-2 sm:gap-6 my-auto'>
                <div className='flex flex-col w-4/12  my-auto'>
                <div><img  className='rounded-md h-30 w-30'src={img3}/></div>
                <div>
                    <div className='mx-auto text-center font-bold pt-1 text-nowrap'>John Smith</div>
                    <div className='mx-auto text-xs text-center text-nowrap'>Designation here</div>
                </div>
                </div>
                <div className='mx-auto my-auto content-center h-full'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti dolore voluptatum placeat autem ipsum magni reiciendis necessitatibus ipsa, pariatur odio deserunt, itaque esse. Excepturi ipsum sunt, nihil asperiores laudantium ex corrupti sit voluptate labore nostrum, quas molestiae vel cupiditate modi voluptatem voluptatibus ad facilis quis adipisci perferendis in quasi!
                </div>
                </div>
            </div>
        </div>      
      </div>
    </div>
  )
}

export default Teams
