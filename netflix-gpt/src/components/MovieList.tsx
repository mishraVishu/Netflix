import MovieCard from "./MovieCard";

interface Movie {
    poster_path: string;
    // add other properties if needed
}

interface movieListProps {
    title: string,
    movies: Movie[]
}

const MovieList = ({title, movies}: movieListProps) => {

    return (
        <div>
        <h1 className="text-3xl text-white px-[3%] py-3">{title}</h1>
        <div className="flex overflow-x-scroll px-[3%]">
            <div className="flex gap-4">
                {movies?.map(movie => <MovieCard path={movie.poster_path}/>)}
            </div>
        </div>
        </div>
    )
}

export default MovieList ;