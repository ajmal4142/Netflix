import React, { useEffect, useState } from "react";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import axios from "../../axios";
import Youtube from "react-youtube";
import "./RowPost.css";
const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urls, setUrls] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => alert(err));
  });
  const opts = {
    height: "230",
    width: "415",
    playerVars: {
      autoplay: 1,
    },
  };
  const clickMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        if (response.data.results.length !== 0) {
          setUrls(response.data.results[0]);
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => {
          return (
            <div>
              <img
                key={index}
                onClick={() => {
                  clickMovie(obj.id);
                }}
                className={props.isSize ? "smallPoster" : "poster"}
                src={`${imageUrl + obj.backdrop_path}`}
                alt="Poster"
              />
              <p>{obj.name}</p>
            </div>
          );
        })}
      </div>
      <div className="youtube">
        {urls && <Youtube videoId={urls.key} opts={opts} />}
      </div>
    </div>
  );
};

export default RowPost;
