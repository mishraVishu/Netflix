import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedHook = () => {

  //fetch data from tmdb API and update store
  const dispatch = useDispatch();
  const topRated = useSelector((store?: {movies?: {topRated: any}}) => store?.movies?.topRated);

  const getMoviesData = async() => {
    const res = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
    console.log(data);
  };

  useEffect(()=>{
    if(!topRated){
      getMoviesData();
    }
  },[])

}

export default useTopRatedHook;