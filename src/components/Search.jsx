import React from 'react';

export const Search = ({ search, setSearch }) => {
  return (
    <div className="searc">
      <h2>Pesquisar:</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </div>
  );
};
