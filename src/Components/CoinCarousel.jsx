import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const YouMayLike = () => {
  const [youMayLikeCoins, setYouMayLikeCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(response => response.json())
      .then(data => {
        const trendingCoins = data.coins.map(coin => ({
          coin_id: coin.item.coin_id,
          symbol: coin.item.symbol,
          small: coin.item.small,
          data: {
            price: coin.item.data.price,
            price_change_percentage_24h: coin.item.data.price_change_percentage_24h,
            sparkline: coin.item.data.sparkline
          }
        }));
        setYouMayLikeCoins(trendingCoins);
        // console.log(trendingCoins);
      })
      .catch(error => console.error('Error fetching trending coins:', error));
  }, []);

  return (
    <div className='w-full mt-4 bg-white'>
      <div className='p-7 rounded-lg  '>
          <div className='text-xl font-bold p-4 pb-6'>You May Also Like</div>
          
          <CoinCarousel className="mt-4 w-3/12s:full s:overflow-scroll s:overflow-y-hidden flex gap-8" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} coins={youMayLikeCoins} />
        
          <div className='text-xl font-bold p-4 py-6'>Trending Coins</div>
       
          <CoinCarousel className="mt-4 w-3/12s:full s:overflow-scroll s:overflow-y-hidden flex gap-8" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} coins={youMayLikeCoins} />
          
      </div>
    </div>
  );
};

const CoinCarousel = ({ coins }) => {

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    
    arrows: true,
    className: 'slides',
    dots: false,
    prevArrow: <button className="slick-next bg-slate-900 absolute left-3 top-1/2 transform -translate-y-1/2!important z-1!important">Previous</button>,
    nextArrow: <button className=" slick-prev bg-slate-900 absolute right-3 top-1/2 transform -translate-y-1/2!important z-1!important">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  // Add these styles directly to your JSX component
  const YourComponent = () => {
    return (
      <div>
        {/* Your component JSX */}
        <style>
          {`
            .slick-prev {
              left: 3%;
              z-index: 1;
            }
  
            .slick-next {
              right: 3%;
              z-index: 1;
            }
          `}
        </style>
      </div>
    );
  };
  
  
  
  
  return (
    <Slider {...settings}>
      {coins.map((coin, index) => (
        <div key={index}>
          <div className="p-2 gap-6 border border-slate-200 shadow-lg rounded-xl h-auto">
            <div className='flex gap-6 '>
              <div><img src={coin.small} alt={coin.symbol} className='s:w-10 s:h-10 rounded-full my-auto' /></div>
              <div className='my-auto'>{coin.symbol}</div>
              <div className="my-auto" style={{ color: coin.data.price_change_percentage_24h.usd > 0 ? 'green' : 'red' }}>{coin.data.price_change_percentage_24h.usd > 0 ? '+' : ''}{coin.data.price_change_percentage_24h.usd.toFixed(2)}%</div>
            </div>
            <div className='p-2 h-2'>{/[<>\\/]/.test(coin.data.price) ? 'Invalid data' : coin.data.price} </div>
            <div className='mt-6 w-full flex justify-center'><img src={coin.data.sparkline} alt="Price Graph" /></div>
          </div>
        </div>
      ))}
    </Slider>
  );

};

export default YouMayLike;
