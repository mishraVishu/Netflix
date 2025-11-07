import { useSelector } from "react-redux";
import MovieList from "./MovieList";

interface RootMovies {
    movies: {
        nowPlayingMovies: any[], // Use a more specific type if available, e.g., Movie[]
        popularMovies: any[],
        topRated : any[],
        Upcoming : any[]
    }
}

const SecondaryContainer = () => {
  const movies = useSelector((store: RootMovies) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store: RootMovies) => store.movies.popularMovies);
  const topRated = useSelector((state : RootMovies) => state.movies.topRated);
  const upcoming = useSelector(( state : RootMovies) => state.movies.Upcoming)
  console.log(movies);

  return (
    <div className="bg-black">
      <div className="-mt-[25%] relative z-30">
        <MovieList title={"Now Playing"} movies={movies}/>
        <MovieList title={"Top Rated"} movies={topRated}/>
        <MovieList title={"Popular"} movies={popularMovies}/>
        <MovieList title={"Upcoming"} movies={upcoming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;