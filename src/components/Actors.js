import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actorObj=>{
        return (
          <div>
              <h3>Name: {actorObj.name}</h3>
              <h5>Movies:</h5>
              <ul>
                {actorObj.movies.map(movie=><li>{movie}</li>)}
              </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
