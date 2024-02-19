
import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './Loginbutton'; 

export default function Header() {
  return (
    <div className='bg-[#112839]'>
      <div className="mx-auto flex items-center justify-between h-16 max-w-6xl">
        
        <div className="flex">
          <Link className="flex items-center" to="/">
            <img
              className="w-38 h-5"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>
          <ul className="flex ml-4">
            <li className="px-2 mr-3.5">
              <Link className="no-underline text-white font-semibold" to="/movie">
                영화
              </Link>
            </li>
            <li className="px-2 mr-3.5">
              <Link className="no-underline text-white font-semibold" to="/tv">
                TV 프로그램
              </Link>
            </li>
            <li className="px-2 mr-3.5">
              <Link className="no-underline text-white font-semibold" to="/person">
                인물
              </Link>
            </li>
          </ul>
        </div>
        <LoginButton />
      </div>
    </div>
  );
}
