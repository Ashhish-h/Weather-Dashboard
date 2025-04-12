import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import ToggleTheme from "./components/ToggleTheme";
import "./App.css";
import "./theme.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem("history")) || []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`https://weather-dashboard-dt1a.onrender.com/weather?city=${city}`);
      setWeather(res.data.current);
      setForecast(res.data.forecast);
      const updatedHistory = [city, ...history.filter((h) => h !== city)].slice(0, 5);
      setHistory(updatedHistory);
      localStorage.setItem("history", JSON.stringify(updatedHistory));
    } catch (err) {
      setError("City not found");
      setWeather(null);
      setForecast([]);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <SearchBar onSearch={handleSearch} />
      <div className="history">
        {history.map((city, i) => (
          <button key={i} onClick={() => handleSearch(city)}>{city}</button>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <WeatherCard data={weather} />
      <ForecastCard forecast={forecast} />
    </div>
  );
}

export default App;
