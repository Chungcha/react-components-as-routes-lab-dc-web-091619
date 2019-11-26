import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(directorObj=>{
        return (
          <div>
              <h3>Name: {directorObj.name}</h3>
              <h5>Movies:</h5>
              <ul>
                {directorObj.movies.map(movie=><li>{movie}</li>)}
              </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
