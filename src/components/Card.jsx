import React from "react";
import Star from "./Star";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.movie.image} className="card-img-top" alt="imagen" />
      <div className="card-body">
        <h5 className="card-title">{props.movie.name}</h5>
        <div class="container">
          <div class="row g-2">
            {[...Array(props.movie.stars)].map(() => (
              <Star />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
