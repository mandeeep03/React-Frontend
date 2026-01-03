import { useState } from "react";
function Search() {
  const [seachQuery, setSeachQuery] = useState("");
  function handleSearchMovie(e) {
    e.preventDefault();
    alert(seachQuery);
    setSeachQuery("");
  }
  return (
    <>
      <div className="flex justify-center text-base">
        <form onSubmit={handleSearchMovie}>
          <input
            type="text"
            placeholder="Search For movies ...."
            value={seachQuery}
            onChange={(e) => {
              setSeachQuery(e.target.value);
            }}
            className="border-1 rounded-xl px-2 mx-2"
          />
          <button type="submit" className="border-1 rounded-xl px-2">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
export default Search;
