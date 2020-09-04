import React from "react";
import "../css/Nav.css";
import requests from "../requests";

export default function Nav({ selectedOption, setSelectedOption }) {
  return (
    <div className="nav">
      <h2
        className={selectedOption === requests.fetchTrending ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchTrending)}
      >
        Trending
      </h2>
      <h2
        className={selectedOption === requests.fetchPopular ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchPopular)}
      >
        Top Rated
      </h2>
      <h2
        className={selectedOption === requests.fetchAction ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchAction)}
      >
        Action
      </h2>
      <h2
        className={selectedOption === requests.fetchComedy ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchComedy)}
      >
        Comedy
      </h2>
      <h2
        className={selectedOption === requests.fetchHorror ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchHorror)}
      >
        Horror
      </h2>
      <h2
        className={selectedOption === requests.fetchRomance ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchRomance)}
      >
        Romance
      </h2>
      <h2
        className={selectedOption === requests.fetchMystery ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchMystery)}
      >
        Mystery
      </h2>
      <h2
        className={selectedOption === requests.fetchScifi ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchScifi)}
      >
        Sci-fi
      </h2>
      <h2
        className={selectedOption === requests.fetchWestern ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchWestern)}
      >
        Western
      </h2>
      <h2
        className={selectedOption === requests.fetchAnimation ? "active" : ""}
        onClick={() => setSelectedOption(requests.fetchAnimation)}
      >
        Animation
      </h2>
    </div>
  );
}
