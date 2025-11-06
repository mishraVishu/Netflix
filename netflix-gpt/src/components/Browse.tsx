import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingHook();

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