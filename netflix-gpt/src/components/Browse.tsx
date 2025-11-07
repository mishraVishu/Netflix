import Header from "./Header";
import useNowPlayingHook from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMoviesHook from "../hooks/usePopularMovies";
import useTopRatedHook from "../hooks/useTopRatedMovies";
import useUpcomingMoviesHook from "../hooks/useUpcomingMovies";

const Browse = () => {

  useNowPlayingHook();
  usePopularMoviesHook();
  useTopRatedHook();
  useUpcomingMoviesHook();

  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer />
    </>
  )
}

export default Browse