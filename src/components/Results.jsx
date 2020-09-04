import React, { useState, useEffect } from "react";
import "../css/Results.css";
import VideoCard from "./VideoCard";
import axios from "../axios";
import requests from "../requests";

export default function Results() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetch() {
      const response = await axios.get(requests.fetchPopular);
      setMovies(response.data.results);
      console.log(response);
      return response;
    }
    fetch();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => {
        return <VideoCard movie={movie} />;
      })}
    </div>
  );
}
