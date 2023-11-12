import React from 'react';
import { MovieContainer, MovieImage, MovieInfo, MovieTitle, MovieRating } from './movie.style';

function Movie({ title, poster_path, vote_average, overview }) {
  return (
    <MovieContainer>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieRating>{vote_average}</MovieRating>
      </MovieInfo>
      <div className="movie-description">
        <div className='text'>
          {title}
          <p>{overview}</p>
        </div>
      </div>
    </MovieContainer>
  );
}

export default Movie;
