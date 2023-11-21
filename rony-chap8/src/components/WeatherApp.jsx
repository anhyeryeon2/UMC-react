import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'; // 스타일 시트를 임포트합니다.

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const API_KEY = '0559a26d7fb124decce1e7b64e262635'; // 여기에 실제 API 키를 입력해야 합니다.

  const getWeather = async () => {
    if (!city) {
      alert('Please enter a city name');
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error retrieving weather data", error);
      alert('Failed to retrieve weather data');
      setWeather(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        className="weather-input"
        placeholder="Enter city name"
      />
      {weather && (
        <div className="weather-display">
          <h2 className="weather-city">{weather.name}</h2>
          <p className="weather-temp">{weather.main.temp.toFixed(1)}°C</p>
          <p className="weather-description">{weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
