import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from "../../axios";
const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`discover/movie?api_key=${API_KEY}&with_genres=28`)
      .then((Response) => {
        console.log(Response.data);
        setMovie(Response.data.results[19]);
      });
  }, []);
  return (
    <div
      // setting background

      style={{
        background: `url(${movie ? imageUrl + movie.poster_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1>{movie ? movie.title : ""}</h1>
        <div className="buttons">
          <button className="button">PLAY</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          {movie ? movie.overview : "Nothing"}{" "}
          <h4>{movie ? movie.release_date : ""} </h4>
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
};

export default Banner;
