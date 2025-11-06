import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

interface UseMovieTrailerProps {
    movieId: number,
    setTrailerId: (id: string) => void;
}

const useMovieTrailer = ({movieId, setTrailerId}: UseMovieTrailerProps) => {
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((res: object) => res.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerId(trailer?.key)
    };

    useEffect(() => {
        getMovieVideo();
    }, []);

}

export default useMovieTrailer