import React from 'react';
import { tvDummy } from '../tvDummy';
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Tv() {
  return (
    <div>
      <ul>
        {tvDummy.results.map(show => (
          <li key={show.id}>
            <h2 className=' font-bold'>{show.name}</h2>
            <img
                src={IMG_BASE_URL + show.poster_path}
                alt={show.title}
                className='w-40 h-auto'
            />
            <p>평점: {show.vote_average}</p>
            <p>{show.overview}</p>
            <hr className="my-4 border-t border-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tv;
