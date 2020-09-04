import React from "react";
import "../css/VideoCard.css";
import TextTruncate from "react-text-truncate";
import GradeIcon from "@material-ui/icons/Grade";
const base_url = "https://image.tmdb.org/t/p/original/";

export default function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} •`}
        {movie.release_date || movie.first_air_date} • {movie.vote_average}
        <GradeIcon />
      </p>
    </div>
  );
}
