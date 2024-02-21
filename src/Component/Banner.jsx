import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {

    useEffect(()=>{
        //console.log(gameBanner);

    },[])
  return (
    <div className='relative mt-10'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from bg-slate-900 to transparent w-full'>
            <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white px-2 p-1'>Get Now</button>
        </div>
<img src={gameBanner.background_image}
className='md:h-[390px] w-full object-cover rounded-xl'/>
    
    </div>
  )
}

export default Banner