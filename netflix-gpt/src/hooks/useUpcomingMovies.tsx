import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpcomingMoviesHook = () => {

  //fetch data from tmdb API and update store
  const dispatch = useDispatch();
  const Upcoming = useSelector((store: {movies?: {Upcoming:any}}) => store?.movies?.Upcoming);

  const getMoviesData = async() => {
    const res = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
    const data = await res.json();
    dispatch(addUpComingMovies(data.results));
    console.log(data);
  };

  useEffect(()=>{
    if(!Upcoming){
      getMoviesData();
    }
  },[])

}

export default useUpcomingMoviesHook;