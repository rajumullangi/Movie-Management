import React from 'react';
import { MovieProvider } from './MovieContext';
import MoviesList from './MoviesList';
import AddMovie from './AddMovie';

const App = () => {
  return (
    <MovieProvider>
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Cinema App</h1>
        <AddMovie />
      </div>
      <div className='images-list'>
        <MoviesList />
      </div>
    </MovieProvider>
  );
};

export default App;