import React from 'react';
import { dummy } from '../movieDummy';
import Movie from '../components/movie';

function Movies(props) {
    return (
    <div className="bg-gray-900">
      <div className="flex flex-wrap justify-center">
        {dummy.results.map((item) => (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
            key={item.id}
          />
        ))}
      </div>
    </div>
    );
}

export default Movies;