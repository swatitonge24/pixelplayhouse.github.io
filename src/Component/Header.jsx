
import React, { useContext, useEffect, useState } from 'react';
import { HiMoon,HiOutlineMagnifyingGlass ,HiSun} from "react-icons/hi2";
import { ThemeContext } from './Context/ThemeContext';


const Header = () => {
  const [toggle,setToggle] = useState(false);
  const{theme,setTheme} =useContext(ThemeContext)

  useEffect(()=>{
//console.log("Theme",theme);
  },[]);
  return (
    <div className='flex items-center p-3'>
      <img src=" https://as2.ftcdn.net/v2/jpg/04/84/54/27/1000_F_484542754_jgieJTzn3cVmwltZzXWDLjJyen3MtFzf.jpg"
      width={60} height={60}/>

<div className='flex bg-slate-300 p-2 w-full items-center mx-3 rounded-full'>
<HiOutlineMagnifyingGlass />
  <input type="text" placeholder='Search Games' className=' px-2 bg-transparent outline-none ' />
</div>
<div>
{theme == 'light' ?
<HiMoon className='text {35px} bg-slate-200 text-black p-1 rounded-full cursor-pointer' 
onClick={()=>{setTheme('dark');localStorage.setItem('theme','dark')}}/>

:<HiSun className='text {35px} bg-slate-200 text-black p-1 rounded-full cursor-pointer' 
onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}}/>
  }
</div>
</div>
  )
}

export default Header;