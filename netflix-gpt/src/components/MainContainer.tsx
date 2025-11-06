import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

interface RootMovies {
    movies: {
        nowPlayingMovies: any[] // Use a more specific type if available, e.g., Movie[]
    }
}

const MainContainer = () => {
    const movies = useSelector((store: RootMovies) => store.movies?.nowPlayingMovies);

    if (!movies) return null;

    const mainMovie = movies[0];
    console.log(mainMovie);

    const { id, original_title, overview } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;