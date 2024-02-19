import adimg from '../img/ad.png';

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return <img src={adimg} alt="광고" style={{ width: '100%', height: 'auto' }} />;
};

export default Ad;
