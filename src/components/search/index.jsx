export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        defaultValue={0}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
