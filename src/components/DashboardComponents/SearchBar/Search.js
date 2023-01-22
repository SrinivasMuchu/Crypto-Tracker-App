import React from 'react';
import './Search.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Search({ search, handleChange }) {
  return (
    <div className="search-flex">
      <SearchSharpIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
