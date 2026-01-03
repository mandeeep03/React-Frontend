import MovieCard from "../Components/MovieCard";
import { useState } from "react";
import movies from "../Assets/data";

function Home() {
    const [seachQuery,setSeachQuery] = useState("")
    function handleSearchMovie(e) {
    e.preventDefault()
    alert(seachQuery)
    setSeachQuery("")
    }
    return (
      <>
      
        <div className="flex gap-4 flex-wrap justify-around  bg-zinc-900 p-8">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>

        
      </>
    );
}
export default Home;
