import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingHook = () => {

  //fetch data from tmdb API and update store
  const dispatch = useDispatch();

  const getMoviesData = async() => {
    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
    console.log(data);
  };

  useEffect(()=>{
    getMoviesData();
  },[])

}

export default useNowPlayingHook;