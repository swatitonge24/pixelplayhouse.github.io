import React, { useEffect } from 'react'

const GamesByGenreId = ({gameList,selectedGenresName}) => {

    useEffect(()=>{
        console.log("GameList",gameList);

    },[]);
  return (
    <div>
        <h2 className='font-bold text-[30px] mt-5 dark:text-white'>{selectedGenresName}</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>

        {gameList.map((item)=>(
            <div className= 'bg-[#76a8f75e] p-2 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer '>
            
            <img src={item.background_image} className='w-full h-[70%] rounded-lg object-cover'/>
            <h2 className='font-semibold text-[20px] dark:text-white'>{item.name}
            <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'> {item.metacritic}</span></h2>
            <h2 className='text-gray-500  dark:text-gray-200 '> ⭐{item.rating} 🔥{item.suggestions_count}</h2>

            </div>
        ))}
        
    </div>
    </div>
   
  )
}

export default GamesByGenreId