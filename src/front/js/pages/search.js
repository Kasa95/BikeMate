import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "../../styles/search.css";

import { Context } from "../store/appContext";
import { SearchResult } from "../component/SearchResult.jsx";

export const Search = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center border-1">
        <div className="col-md-8">
          <div className="search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search for users or groups here..."
            />
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="row">
            <div className="col-3">
              {" "}
              <div className="card text-center my-1">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
            </div>
            <div className="col-9">
              <SearchResult />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
