import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Character.css";

function Character({ id, name, description, thumbnail, comics }) {
  const poster = `${thumbnail.path}.${thumbnail.extension}`;
  const comicNames = comics.items.map(comic => comic.name);

  return (
    <div className="character">
      <Link to={`/character/${id}`}>
        <img src={poster} alt={name} title={name} className="character__img" />
        <div className="character__data">
          <h2 className="character__name">{name}</h2>
          <p className="character__description">{description.slice(0, 180)}...</p>
          <ul className="character__comics">
            {comicNames.slice(0, 5).map((comic, index) => (
              <li key={index} className="character__comic">
                {comic}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }).isRequired,
  comics: PropTypes.shape({
    available: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default Character;
