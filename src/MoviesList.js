import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const MoviesList = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        movies.map((movie, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              maxWidth: '300px',
              textAlign: 'center',
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: '300px', height: '300px', borderRadius: '8px',objectFit:'cover' }}
            />
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.releaseYear}</p>
            <a href={movie.trailer} target="_blank">Trailer Link</a>
          </div>
        ))
      )}
    </div>
  );
};
export default MoviesList;