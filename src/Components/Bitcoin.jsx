import React from 'react'
import img1 from '../assets/Screenshot 2024-03-06 152023.png'
import img2 from '../assets/Screenshot 2024-03-06 152148.png'

function Bitcoin() {
  return (
    <div className='s:w-full p-2  max-h-max'>
    <div className='p-7 bg-white rounded-lg  '>
      <div className='font-bold text-2xl'>About Bitcoin</div>
      <div className='font-bold text-xl mt-4'>What is Bitcoin?</div>
      <div className=' text-slate-800 py-2'>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</div>
      <hr className='font-bold py-1 mt-2'/>
      <div className='font-bold text-xl'>Lorem ipsum dolor sit amet</div>
      <div className=' text-slate-800 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident, repellendus dignissimos voluptas, harum adipisci labore pariatur assumenda maiores error autem asperiores dolore exercitationem sed fuga laudantium. Molestiae dolores minus nesciunt alias velit tenetur corporis id in, quia perferendis quibusdam libero eius, odit error impedit et optio officia voluptate ex iure? Unde provident modi aspernatur quas. Praesentium consequatur explicabo tempora, assumenda, repudiandae magni doloribus architecto soluta quasi nisi animi est?</div>
      <div className=' text-slate-800 py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores expedita velit laborum molestiae ea saepe numquam perferendis harum temporibus quos deserunt delectus voluptates non quo quasi, modi eaque, doloribus qui dolore perspiciatis! Pariatur suscipit possimus totam magni fuga vel deserunt tenetur aliquid, beatae necessitatibus eum quod molestias quas atque vitae odit rem nesciunt ut obcaecati harum placeat eveniet molestiae ipsa? Excepturi nulla voluptas dolores accusamus. Molestiae voluptates totam minus.</div>
      <div className=' text-slate-800 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur et aut quis! Expedita in veniam repudiandae, corrupti molestias aut quam exercitationem temporibus perspiciatis. Neque molestiae commodi dolorem reprehenderit quos sint et inventore eos debitis iusto. Laborum et a excepturi. Quaerat delectus nisi pariatur eaque, et error perferendis nostrum mollitia dolorem quasi. Qui, beatae commodi voluptatum veniam assumenda labore nihil iure ex quibusdam. Ipsam consectetur cum enim nulla aspernatur aliquam soluta?</div>
      <hr className='font-bold py-1 mt-2'/>
      <div className='font-bold text-xl mt-2'>Already Holding Bitcoin?</div>
      {/*  */}
      <div className='flex s:flex-col c:flex-row w-full gap-6 py-6 text-white'>
        <div className='bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 p-3 flex gap-8 rounded-xl md:w-6/12  min-w-16'>
            <div><img src={img1} className='w-32 h-32 rounded-md'/></div>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col s:text-lg sm:text-2xl font-bold align-left'>
                <div>Calculate your</div>
                <div>Profits</div>
                </div>
                <div className='pb-1'>
                    <button className='text-black bg-white s:p-1 s:px-1.5 sm:p-1.5 sm:px-2.5  rounded-md font-bold'>Check Now</button>
                </div>
            </div> 
        </div>
        {/*  */}
        <div className='bg-gradient-to-br from-orange-500 via-red-500 to-red-600 p-3 flex gap-8 rounded-lg md:w-6/12 '>
            <div><img src={img2} className='w-32 h-32 rounded-md'/></div>
            <div className='flex flex-col justify-between'>
            <div className='flex flex-col s:text-lg sm:text-2xl font-bold align-left'>
                <div>Calculate your</div>
                <div>Profits</div>
                </div>
                <div className='pb-1'>
                    <button className='text-black bg-white s:p-1 s:px-1.5 sm:p-1.5 sm:px-2.5  rounded-md font-bold'>Check Now</button>
                </div>
            </div> 
        </div>
        {/*  */}
        

      </div>
      <hr className='font-bold py-1 mt-2'/>
        <div className=' text-slate-800 py-2'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, atque?</div>
    </div>
    </div>
  )
}

export default Bitcoin
