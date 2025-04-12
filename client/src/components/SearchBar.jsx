import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (input.length < 2) return;
      try {
        const response = await axios.get(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
          {
            headers: {
              "X-RapidAPI-Key": "your_rapidapi_key",
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
            params: { namePrefix: input, limit: 5 },
          }
        );
        setSuggestions(response.data.data.map((city) => city.name));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };
    fetchSuggestions();
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          list="suggestions"
        />
        <datalist id="suggestions">
          {suggestions.map((city, index) => (
            <option key={index} value={city} />
          ))}
        </datalist>
        <button type="submit">Search</button>
      </form>

      <style jsx>{`
        .search-bar {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        form {
          display: flex;
          gap: 10px;
        }

        input {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
          width: 200px;
          outline: none;
        }

        button {
          padding: 10px 18px;
          background-color: #1976d2;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #125ea4;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
