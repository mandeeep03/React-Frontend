
function MovieCard({movie}){
    function onFavoriteClick(){
        alert("clicked")
    }
    return (
        <div className="">
        <div className="">
            <img src={movie.url} alt={movie.title} />
            <div className="">
            <button onClick={onFavoriteClick}>♥️</button>
            </div>
        </div>
        <div className="">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            
        </div>
        </div>
    );
}
export default MovieCard