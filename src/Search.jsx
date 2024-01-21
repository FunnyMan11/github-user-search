// Search.jsx

import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="px-2 py-1 mr-2 rounded text-gray-900"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
