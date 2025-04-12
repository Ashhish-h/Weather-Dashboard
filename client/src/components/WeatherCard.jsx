import React from "react";

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.condition}
      />
      <p>{data.condition}</p>
      <p>{data.temperature}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.wind} m/s</p>

      <style jsx>{`
        .weather-card {
          background: linear-gradient(135deg, #e0f7fa, #ffffff);
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          padding: 24px;
          max-width: 300px;
          text-align: center;
          margin: 20px auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          transition: transform 0.3s ease;
        }

        .weather-card:hover {
          transform: translateY(-5px);
        }

        .weather-card h2 {
          margin-bottom: 10px;
          font-size: 1.8rem;
          color: #00796b;
        }

        .weather-card img {
          width: 100px;
          height: 100px;
        }

        .weather-card p {
          margin: 6px 0;
          font-size: 1rem;
          color: #333;
        }

        .weather-card p:first-of-type {
          font-weight: 600;
          font-size: 1.1rem;
          color: #00695c;
        }
      `}</style>
    </div>
  );
};

export default WeatherCard;
