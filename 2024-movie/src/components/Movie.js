import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Fragment>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            title,
            year,
            summary,
            poster,
            genres,
          },
        }}
      >
        <img
          src={poster}
          alt={title}
          title={title}
          className="movie__img"
        ></img>
        <div className="movie__data">
          <h2 className="movie__title">{title}</h2>
          <strong className="movie__year">{year}</strong>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="movie__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </Fragment>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;