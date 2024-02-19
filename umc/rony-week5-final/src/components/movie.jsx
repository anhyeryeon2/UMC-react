import React, { useState } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, poster_path, vote_average, overview }) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const MouseIn = () => {
    setIsHovered(true);
  };

  const MouseOut = () => {
    setIsHovered(false);
  };

  const onClickImg = () => {
    navigate(`/movie/${title}`, {
      state: { title, poster_path, vote_average, overview }
    });
  };

  return (
    <div
      className={`bg-blue-950 w-40 h-full p-0 m-3 relative cursor-pointer ${
        isHovered ? 'filter brightness-70' : ''
      }`}
      onMouseEnter={MouseIn}
      onMouseLeave={MouseOut}
      onClick={onClickImg}
    >
      <img
        src={IMG_BASE_URL + poster_path}
        alt={title}
        className="w-full h-50"
      />
      <div className="text-white p-2 h-20 text-sm">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      {isHovered && (
        <div
          className="absolute top-0 left-0 bg-black p-2 w-full h-full flex flex-col justify-center items-center opacity-70 overflow-auto"
          style={{ maxHeight: '100%' }}
        >
          <div className="text-white text-sm p-2">
            <p>{overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movie;
