import React, { useEffect, useState } from 'react'
import GenreList from '../Component/GenreList';
import GlobalAPI from '../Services/GlobalAPI';
import Banner from '../Component/Banner';
import TrendingGames from '../Component/TrendingGames';
import GamesByGenreId from '../Component/GamesByGenreId';
Banner

const Home = () => {
  const[allGameList,setAllGameList]=useState()
  const[gameListByGenres,setGameListByGenres]= useState([]);
  const[selectedGenresName,setSelectedGenresName]=useState('Action');

  useEffect(()=>{
    getAllGamesList();
    getGameListByGenreId(4)
  },[])
  const getAllGamesList= ()=>{
    GlobalAPI.getAllGames.then((resp)=>{
//console.log(resp.data.results);
setAllGameList(resp.data.results);
//setGameListByGenres(resp.data.results);
    })
  }

  const getGameListByGenreId=(id)=>{
    console.log(id);
    GlobalAPI.getGenreListByGenreId(id).then((resp)=>{
      //console.log("gamelist by genreid :", resp.data.results);
      setGameListByGenres(resp.data.results);
    })

  }
  return (

    <div className='grid grid-cols-4 px-5'>
  
    <div className='hidden md:block'>
      <GenreList 
      genereId={(genereId)=>getGameListByGenreId(genereId)}
      selectedGenresName={(name)=>setSelectedGenresName(name)}/>
    </div>

    <div className='col-span-4 md:col-span-3'>
      {allGameList?.length>0&&gameListByGenres.length>0?
      <div>
      <Banner gameBanner={allGameList[0]} />
      <TrendingGames gameList={allGameList}/>
      <GamesByGenreId gameList={gameListByGenres}
      selectedGenresName={selectedGenresName}/>
      </div>
      :null}
      
      
    </div>
    </div>
  )
}

export default Home;