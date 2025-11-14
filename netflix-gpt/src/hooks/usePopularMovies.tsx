import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMoviesHook = () => {

  //fetch data from tmdb API and update store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store?: {movies?: {popularMovies : any}}) => store?.movies?.popularMovies)

  const getMoviesData = async() => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
    console.log(data);
  };

  useEffect(()=>{
    if(!popularMovies){
      getMoviesData();
    }
  },[])

}

export default usePopularMoviesHook;