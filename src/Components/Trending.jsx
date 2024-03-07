import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

function TrendingCoins() {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
        const trendingCoins = response.data.coins.slice(0, 3);
        const formattedCoinsData = trendingCoins.map((coin) => ({
          symbol: coin.item.symbol.toUpperCase(),
          name: coin.item.name,
          img: coin.item.large,
          changePercentage: coin.item.data.price_change_percentage_24h.usd.toFixed(2),
        }));

        setCoinsData(formattedCoinsData);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  return (
    <div className='bg-white text-black w-full rounded-md text-lg font-medium justify-start p-5 px-4 mx-auto max-w-80'>
      <div className='text-xl font-bold'>Trending Coins (24h)</div>
      <div className="mt-4 w-full pr-2">
         {coinsData.map((coin, index) => (
          <div key={index}>
            <div className='flex justify-between w-full my-auto py-2'>
              <div className='flex pr-2 my-auto gap-0.5 text-base w-full text'>
                <img src={coin.img} alt={coin.name} className="w-8 h-8 rounded-full my-auto" />
                <h3 className="my-auto pl-1">{coin.name}</h3>
                <p className="my-auto">({coin.symbol})</p>
              </div>
             <div className={`my-auto w-20 flex gap-0 rounded-md p-.5 px-1 flex-shrink-0 ${coin.changePercentage > 0 ? 'bg-green-200' : 'bg-red-200'}`}>
                 {coin.changePercentage > 0 ? 
                 <TiArrowSortedUp className='my-auto mt-1 text-green-600'/> : 
                 <TiArrowSortedDown className='my-auto mt-1 text-red-600'/>
                 }
             <p className={`my-auto text-base ${coin.changePercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>{coin.changePercentage}%</p>
           </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCoins;
