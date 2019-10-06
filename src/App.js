import React, { useEffect, useState } from "react";
import Occurrence from "./Occurrence";
import "./App.css";

const App = () => {
  const [occurrence, setOccurrences] = useState([]);

  // Search
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getOccurrences = async () => {
      const response = await fetch(
        `http://api.gbif.org/v1/occurrence/search?publishingCountry=${query}&eventDate=2019-02&genusKey=5219142&genusKey=5219234&genusKey=2436691`
      );
      const data = await response.json();
      setOccurrences(data.results);
      console.log(data.results);
    };

    getOccurrences();
  }, [query]);

  // Search
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Fox, Wolf and European Hare Sightings in February 2019</h1>
      <p>Input a 2-letter country code. For example: NO, SE, DK, FI, EE, DE.</p>

      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {occurrence.map(occurrence => (
        <Occurrence
          key={occurrence.key}
          species={occurrence.species}
          eventDate={occurrence.eventDate}
          locality={occurrence.locality}
          country={occurrence.country}
        />
      ))}
      <p className="source">
        Source:{" "}
        <a href="https://www.gbif.org/developer/summary ">
          Global Biodiversity Information Facility occurrence API
        </a>
      </p>
    </div>
  );
};

export default App;
