import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Aquí puedes implementar la lógica para filtrar las películas en base al término de búsqueda
  // Por ahora, simplemente actualizamos el valor del input de búsqueda
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar películas"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;

