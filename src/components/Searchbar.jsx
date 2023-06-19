const Searchbar = ({ keyword, setKeyword }) => {
  return (
    <div className="searchbar">
      <input
        type="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keywords"
        className="searchbar-input"
      />
    </div>
  );
};

export default Searchbar;
