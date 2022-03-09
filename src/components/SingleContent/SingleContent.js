import React from "react";
import "./SingleContent.css";
import { Badge } from "@material-ui/core";
function SingleContent({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  overview,
}) {
  return (
    <div>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <div className="card">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w300/${poster}`}
          alt="Logo"
        />
        <div className="card-body">
          <h2>{title}</h2>
          <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
          </span>

          <p className="subTitle">{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleContent;
