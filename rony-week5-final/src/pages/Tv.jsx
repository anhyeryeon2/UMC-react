import React from 'react';
import { tvDummy } from '../tvDummy';
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Tv() {
  return (
    <div>
      <ul>
        {tvDummy.results.map(tv => (
          
          <li className="flex items-center mb-8">
              <img
                src={IMG_BASE_URL + tv.poster_path}
                alt={tv.name}
                className="w-40 h-auto mr-4"
              />
              <div>
                <h2 className='font-bold'>{tv.name}</h2>
                <p>평점: {tv.vote_average}</p>
                <p>{tv.overview}</p>
        
              </div>
          </li>
          
        ))}
      </ul>
      
    </div>
  );
}

export default Tv;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
// function Tv({ name, poster_path, vote_average, overview }) {
//   const [isHovered, setIsHovered] = useState(false);

//   const navigate = useNavigate();

//   const MouseIn = () => {
//     setIsHovered(true);
//   };

//   const MouseOut = () => {
//     setIsHovered(false);
//   };

//   const onClickImg = () => {
//     navigate(`/movie/${name}`, {
//       state: { name, poster_path, vote_average, overview }
//     });
//   };

//   return (
//     <div className="bg-gray-900">
//       <div className="flex flex-wrap justify-center">
//         { tvDummy.results.map(() => (
//           <div
//           className={`bg-blue-950 w-40 h-full p-0 m-3 relative cursor-pointer ${
//             isHovered ? 'filter brightness-70' : ''
//           }`}
//           onMouseEnter={MouseIn}
//           onMouseLeave={MouseOut}
//           onClick={onClickImg}
//         >
//           <img
//             src={IMG_BASE_URL + poster_path}
//             alt={name}
//             className="w-full h-50"
//           />
//           <div className="text-white p-2 h-20 text-sm">
//             <h4>{name}</h4>
//             <span>{vote_average}</span>
//           </div>
//           {isHovered && (
//             <div
//               className="absolute top-0 left-0 bg-black p-2 w-full h-full flex flex-col justify-center items-center opacity-70 overflow-auto"
//               style={{ maxHeight: '100%' }}
//             >
//               <div className="text-white text-sm p-2">
//                 <p>{overview}</p>
//               </div>
//             </div>
//           )}
//         </div>
//         ))
  

//           }
//       </div>
//     </div>
//     );
// }
    

// export default Tv;
