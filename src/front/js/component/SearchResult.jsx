import React from "react";
import "../../styles/search.css";

export const SearchResult = ({ theName, id, city, distance, speed }) => {
  return (
    <>
      <div className="card text-center my-1">
        <div className="card-body">
          {/* <img
            src="https://source.unsplash.com/random"
            alt=""
            height="55px"
            className="img-thumbnail"
            style={{ maxHeight: "85px" }}
          /> */}
          <h5 className="card-title">
            <b>{theName}</b>
          </h5>
          <p className="card-text">
            Group located in {city}. Our average distance is {distance} and our
            usual speed is {speed}.
          </p>
          <a href="#" className="btn btn-primary">
            Join group!
          </a>
        </div>
        <div className="card-footer text-muted">
          Last meetup {Math.floor(Math.random() * 10)} days ago.
        </div>
      </div>
    </>
  );
};
