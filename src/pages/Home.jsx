import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulando carga de películas desde la API
  useEffect(() => {
    fetchMoviesFromAPI()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  const fetchMoviesFromAPI = async () => {
    // Lógica para obtener las películas desde la API
    // Aquí debes realizar la solicitud real a tu backend para obtener la lista de películas
    // Por ahora, simplemente devolvemos un array de películas simuladas
    return [
      {
        id: 1,
        title: 'Título de la Película 1',
        genre: 'Género 1',
        image: 'imagen_url_1.jpg',
      },
      {
        id: 2,
        title: 'Título de la Película 2',
        genre: 'Género 2',
        image: 'imagen_url_2.jpg',
      },
      // Agregar más películas aquí...
    ];
  };

  return (
    <div>
      <h1>Página principal de películas</h1>
      <SearchBar />
      {loading ? <p>Cargando...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
