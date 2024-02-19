import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/movie';

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <img className="w-72 h-112  mr-8" src={IMG_BASE_URL + state.poster_path} alt="영화 포스터 이미지" />
        <div>
          <div className="text-4xl font-bold">{title}</div>
        </div>
      </div>
    </div>
  );
}
