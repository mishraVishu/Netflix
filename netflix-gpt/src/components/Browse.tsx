import Header from "./Header";
import useNowPlayingHook from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMoviesHook from "../hooks/usePopularMovies";
import useTopRatedHook from "../hooks/useTopRatedMovies";
import useUpcomingMoviesHook from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

interface RootStore {
  showGPTSearch:boolean
}

const Browse = () => {
  const showGPTSearch = useSelector((store: RootStore) => store.gpt.showGPTSearch);

  useNowPlayingHook();
  usePopularMoviesHook();
  useTopRatedHook();
  useUpcomingMoviesHook();

  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      {showGPTSearch ? 
      ( <GPTSearch /> ) :
      (<>
        <MainContainer />
        <SecondaryContainer />
      </>)
      }
    </>
  )
}

export default Browse