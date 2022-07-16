import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "../../styles/search.css";

import { Context } from "../store/appContext";
import { SearchResult } from "../component/SearchResult.jsx";

export const Search = () => {
  const { store, actions } = useContext(Context);
  return (
    // busqueda empieza aquí
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center border-1">
        <div className="col-md-10">
          <div className="row">
            <div className="col-3 d-flex justify-content-around align-items-center">
              <button className="btn btn-outline-orange">Users</button>
              <button className="btn btn-secondary">Groups</button>
            </div>
            <div className="search col-9">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search for users or groups here..."
              />
            </div>
          </div>
          {/* busqueda acaba aquí */}
          {/* filtros de busqueda */}
          <div className="row pt-2">
            <div className="col-3">
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
            {/* filtros de busqueda */}
            <div className="col-9">
              <SearchResult />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
