import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movieObj=>{
        return (
          <div>
              <h3>Name: {movieObj.title}</h3>
              <h5>Time: {movieObj.time}</h5>
              <ul>
                {movieObj.genres.map(genre=><li>{genre}</li>)}
              </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
