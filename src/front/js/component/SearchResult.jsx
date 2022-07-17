import React from "react";
import "../../styles/search.css";

export const SearchResult = ({ theName, id, city, distance, speed }) => {
  return (
    <>
      <div className="card text-center my-1 search-result">
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
            Group located in <b>{city}</b>. Our average distance is{" "}
            <b>{distance}</b> and our usual speed is <b>{speed}</b>.
          </p>
          <a href="#" className="btn btn-primary">
            Join group!
          </a>
        </div>
        <div className="card-footer text-muted">Last meetup 6 days ago.</div>
      </div>
    </>
  );
};
