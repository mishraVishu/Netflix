import { IMG_URL } from "../utils/constants";

interface MovieCardProps {
    path: string;
}

const MovieCard = ({ path }: MovieCardProps) => {
  return (
    <div className="w-40">
        <img src={IMG_URL + path} alt="movie image"/>
    </div>
  )
}

export default MovieCard