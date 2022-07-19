import React from "react";
import "../../styles/search.css";
import { Link } from "react-router-dom";

export const SearchResult = ({ theName, id, city, distance, speed, email }) => {
  return (
    <>
      <div className="card text-center my-1 search-result">
        <div className="card-body">
          <h5 className="card-title">
            <b>{theName}</b>
          </h5>
          <p className="card-text">
            {city != undefined ? (
              <>
                Located in
                <b> {city}</b>.{" "}
              </>
            ) : (
              <>Unknown location. </>
            )}
            {distance != undefined ? (
              <>
                Their average distance is
                <b> {distance}</b>,{" "}
              </>
            ) : (
              <></>
            )}
            {speed != undefined ? (
              <>
                and their average speed is
                <b> {speed}</b>.
              </>
            ) : (
              <></>
            )}
          </p>
          {email != undefined ? (
            <a href="#" className="btn btn-primary">
              Add friend!
            </a>
          ) : (
            <a href="#" className="btn btn-primary">
              Join group!
            </a>
          )}
        </div>
        <div className="card-footer text-muted">Last meetup 6 days ago.</div>
      </div>
    </>
  );
};
