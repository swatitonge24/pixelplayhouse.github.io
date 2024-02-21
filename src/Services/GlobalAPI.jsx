import axios from "axios";

const API_KEY ="68d17e0988f34fb498618ba42d346ccc";
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+API_KEY);
const getAllGames=axiosCreate.get('/games?key='+API_KEY);
const getGenreListByGenreId=(id)=>axiosCreate.get('/games?key='+API_KEY+'&genres='+id);

export default{
    getGenreList,
    getAllGames,
    getGenreListByGenreId
}
