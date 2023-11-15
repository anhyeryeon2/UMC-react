import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate(); //추가

  const handleLoginClick = () => {
    setIsLogin(true);
    navigate('/login');// 추가 
  };

  const handleLogoutClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="flex items-center"> 
      <div className="w-24"> 
      <button
        onClick={isLogin ? handleLogoutClick : handleLoginClick}
        className="bg-white text-black font-bold py-1 px-3 rounded-lg w-full
                    hover:bg-yellow-500 hover:text-white"
        >
        {isLogin ? '로그아웃' : '로그인'}
        </button>

      </div>
      <div className="w-32 ml-2"> 
        <span className='text-white'>
          {isLogin ? '환영합니다!' : '로그인해주세요!'}
        </span>
      </div>
    </div>
  );
}

export default LoginButton;
