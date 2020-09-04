import React, { useState, useEffect } from "react";
import "../css/Results.css";
import VideoCard from "./VideoCard";
import axios from "../axios";
import FlipMove from "react-flip-move";

export default function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetch() {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
      return response;
    }
    fetch();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => {
          return <VideoCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
}
