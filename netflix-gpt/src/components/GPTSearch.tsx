import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <div className="bg-black h-screen">
     <GPTSearchBar />
     <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch