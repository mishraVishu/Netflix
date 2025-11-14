import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingHook = () => {
  //fetch data from tmdb API and update store
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store: {movies?: {nowPlayingMovies?: any}} ) => store?.movies?.nowPlayingMovies);

  const getMoviesData = async() => {
    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?",API_OPTIONS);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
    console.log(data);
  };

  useEffect(()=>{
    if(!nowPlaying){
      getMoviesData();
    }
  },[])

}

export default useNowPlayingHook;