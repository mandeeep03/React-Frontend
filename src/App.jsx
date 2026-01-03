import MovieCard from "./Components/MovieCard"


function App() {
  

  return (
    <>
      <MovieCard
        movie={{
          url: "https://uk.pinterest.com/fabmovieposters/avatar-movie-posters-artwork/",
          title: "Avatar",
          realease_date:2-2-20
        }}
      />
    </>
  );
}

export default App
