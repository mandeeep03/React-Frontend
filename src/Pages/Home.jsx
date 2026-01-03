import MovieCard from "../Components/MovieCard";
import { useState } from "react";

function Home() {
    const [seachQuery,setSeachQuery] = useState("")
  const movies = [
    { id: 1, title: "Inception", release_date: "2010-07-16" },
    { id: 2, title: "Interstellar", release_date: "2014-11-07" },
    { id: 3, title: "The Dark Knight", release_date: "2008-07-18" },
    { id: 4, title: "Parasite", release_date: "2019-05-30" },
    { id: 5, title: "Avengers: Endgame", release_date: "2019-04-26" },
    { id: 6, title: "Dune: Part Two", release_date: "2024-03-01" },
  ];
  function handleSearchMovie() {}
  return (
    <>
      <form onSubmit={handleSearchMovie}>
        <input type="text" placeholder="Search For movies ...." value={seachQuery} onChange={(e)=>{setSeachQuery(e.target.value);}} /> 
        <button type="submit">Search</button>
      </form>

      <div className="">
        {movies.map((movie) => (movie.title.toLowerCase().startsWith(seachQuery)&&
         ( <MovieCard movie={movie} key={movie.id} />)
        ))}
      </div>
    </>
  );
}
export default Home;
