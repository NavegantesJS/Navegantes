import React from 'react';

const Search = () => {
  return (
    <div className="container-search">
      <div className="group-field">
        <input type="text" placeholder="Ciudad de Origen" />
      </div>
      <div className="group-field">
        <input type="text" placeholder="Ciudad de Destino" />
      </div>
    </div>
  );
};

export default Search;
