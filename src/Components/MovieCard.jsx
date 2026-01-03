
function MovieCard({movie}){
    function onFavoriteClick(){
        alert("clicked")
    }
    return (
      <div className="w-[16rem] bg-zinc-800 hover:bg-zinc-900 p-4 border-1 rounded-xl text-white">
        <div className="relative">
          <img src={movie.poster_url} alt={movie.title} />
          <button className="absolute top-2  right-2" onClick={onFavoriteClick}>
            ♥️
          </button>
          <div className=""></div>
        </div>
        <div className="">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    );
}
export default MovieCard