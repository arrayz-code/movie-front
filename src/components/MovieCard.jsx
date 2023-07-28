import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, genre, image } = movie;

  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
