import { useSelector } from "react-redux"
import MovieList from "./MovieList";

interface rootStore {
  gpt:{
    gptMovies:[],
    gptResults:[]
  }
}

const GPTMovieSuggestion = () => {
  const gpt = useSelector((store:rootStore) => store.gpt);

  const { gptMovies, gptResults } = gpt;

  return (
    gptMovies && <div>
      {gptMovies.map((movie,index) => <MovieList key={index} title={movie} movies={gptResults[index]}/>)}
    </div>
  )
}

export default GPTMovieSuggestion