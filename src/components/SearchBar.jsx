import React, { useState } from 'react';

const SearchBar = ({ search, setSearch }) => {

  return (
    <div className="flex gap-2 bg-white p-2 rounded-xl shadown-lg w-full">
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 min-w-0 px-4 py-3 outline-none text-gray-700"
      />
    </div>
  );
};

export default SearchBar;