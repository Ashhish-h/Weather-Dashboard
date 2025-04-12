import React from "react";

const ForecastCard = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="forecast">
      {forecast.map((day, i) => (
        <div key={i} className="forecast-day">
          <h4>{day.date}</h4>
          <img
            src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt={day.condition}
          />
          <p className="temp">{day.temperature}°C</p>
          <p className="condition">{day.condition}</p>
        </div>
      ))}

      <style jsx>{`
        .forecast {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin: 30px 0;
        }

        .forecast-day {
          background: #f0f0f0;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          width: 130px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .forecast-day:hover {
          transform: translateY(-5px);
        }

        h4 {
          margin: 0;
          font-size: 1rem;
        }

        img {
          width: 60px;
          height: 60px;
        }

        .temp {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .condition {
          font-size: 0.9rem;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default ForecastCard;
