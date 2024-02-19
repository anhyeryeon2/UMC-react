import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-8">
        해당 페이지를 찾지 못했습니다.
      </h1>
      <p className="text-2xl text-gray-600 mb-8">
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </p>
      <button
        onClick={() => navigate('/')}
        className="text-2xl text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        메인 페이지로 이동
      </button>
    </div>
  );
}
