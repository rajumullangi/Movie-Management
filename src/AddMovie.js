import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
import './AddMovie.css'

const AddMovie = () => {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [image, setImage] = useState('');
  const [trailer,setTrailer]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre && releaseYear && image && trailer) {
      addMovie({ title, genre, releaseYear, image, trailer});
      setTitle('');
      setGenre('');
      setReleaseYear('');
      setImage('');
      setTrailer('');
    }
  };

  return (
    <div className='main-container'>
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} className='moviesform'>
      <input
        type="text"
        className='input-1'
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        // style={{ marginRight: '10px' }}
      />
      <input
        className='input-1'
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
        // style={{ marginRight: '10px' }}
      />
      <input
        className='input-1'
        type="number"
        placeholder="Release Year"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        required
        // style={{ marginRight: '10px' }}
      />
      <input
        className='input-1'
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        // style={{ marginRight: '10px' }}
      />
      <input
        className='input-1'
        type="text"
        placeholder="Trailer Link"
        value={trailer}
        onChange={(e) => setTrailer(e.target.value)}
        required
        // style={{ marginRight: '10px' }}
      />
      <button type="submit" className='movies-btn'>Add Movie</button>
    </form>
    </div>
  );
};
export default AddMovie;
