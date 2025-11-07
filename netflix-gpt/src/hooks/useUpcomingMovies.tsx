import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpcomingMoviesHook = () => {

  //fetch data from tmdb API and update store
  const dispatch = useDispatch();

  const getMoviesData = async() => {
    const res = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
    const data = await res.json();
    dispatch(addUpComingMovies(data.results));
    console.log(data);
  };

  useEffect(()=>{
    getMoviesData();
  },[])

}

export default useUpcomingMoviesHook;