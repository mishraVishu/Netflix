import { useRef } from "react";
import openAI from "../utils/open";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTResults } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getGPTMovies = async (movieName: string) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  }

  const handleGPTSearch = async () => {
    // Call OpenAI immediately on button click
    const gptQuery =
      "Act as a movie recommendation System and suggest movie name for " +
      searchText?.current?.value +
      " Give only 5 names at a time. Give me a comma seperated list. Example: Gadar, Sholey, Koi mil gya"+ "Not in any other format";

    const gptResult = await openAI.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
    console.log(gptResult.choices);

    const content = gptResult?.choices?.[0]?.message?.content;
    const gptMovies = content ? content.split(",") : [];
    console.log(gptMovies);

    const promiseData = gptMovies.map(movie => getGPTMovies(movie)); 

    const resolvedDataFromTMDB = await Promise.all(promiseData);
    console.log(resolvedDataFromTMDB);

    dispatch(addGPTResults({gptMovies:gptMovies,TMDBData:resolvedDataFromTMDB}));
  };

  return (
    <div className="flex justify-center items-center">
      <form className="p-1 m-2 bg-black w-1/2 rounded-lg" onSubmit={e => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-lg w-[50%]  sm:w-[60%] md:w-[70%] l:w-[75%] xl:w-[80%]"
          placeholder="What would you like to watch today ?"
        />
        <button className="p-4 bg-red-700 text-white rounded-lg" onClick={handleGPTSearch} type="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

