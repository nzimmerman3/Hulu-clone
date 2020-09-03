import React from "react";
import "../css/VideoCard.css";

export default function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://cdn.onebauer.media/one/empire-tmdb/films/1124/images/c5o7FN2vzI7xlU6IF1y64mgcH9E.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
        alt=""
      />
      <p>This is my favorite film</p>
      <h2>The Prestige</h2>
      <p>Number of likes...</p>
    </div>
  );
}
