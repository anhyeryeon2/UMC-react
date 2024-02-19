import React, { useState } from 'react';
import Ad from './Ad';

function AdPage() {
  const [showAd, setShowAd] = useState(true); 

  const handleToggleClick = () => {
    setShowAd(!showAd);
  };

  return (
    <div>
      <button onClick={handleToggleClick}
      className='bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg'>
        {showAd ? '광고 안보기' : '광고 보기'}
      </button>
      <Ad showAd={showAd} />
    </div>
  );
}

export default AdPage;
