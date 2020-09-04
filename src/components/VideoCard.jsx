import React, { forwardRef, useState } from "react";
import "../css/VideoCard.css";
import TextTruncate from "react-text-truncate";
import GradeIcon from "@material-ui/icons/Grade";
import ReactPlayer from "react-player";
import trailers from "../trailers";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div>
      <div ref={ref} className="videoCard" onClick={() => setPlayVideo(true)}>
        {playVideo ? (
          <ReactPlayer
            className="react-player"
            url={
              trailers[movie.title] ||
              "https://www.youtube.com/watch?v=2U76x2fD_tE"
            }
            controls
            width="500px"
            height="300px"
          />
        ) : (
          <img
            src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
            alt=""
          />
        )}

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
    </div>
  );
});

export default VideoCard;
