import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  // Aquí puedes obtener los detalles de la película con el ID desde la API o el estado global
  // Por ahora, simplemente devolvemos un contenido de ejemplo
  const movieDetails = {
    title: 'Título de la Película',
    genre: 'Género',
    image: 'imagen_url.jpg',
    synopsis: 'Sinopsis de la película...',
    // Agregar más detalles de la película aquí...
  };

  return (
    <div>
      <img src={movieDetails.image} alt={movieDetails.title} />
      <h1>{movieDetails.title}</h1>
      <p>Género: {movieDetails.genre}</p>
      <p>Sinopsis: {movieDetails.synopsis}</p>
      {/* Agregar más detalles aquí, como actores, directores, fecha de publicación, etc. */}
    </div>
  );
};

export default MovieDetails;
