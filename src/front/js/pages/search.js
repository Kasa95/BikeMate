import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "../../styles/search.css";

import { Context } from "../store/appContext";
import { SearchResult } from "../component/SearchResult.jsx";

export const Search = () => {
  const { store, actions } = useContext(Context);
  // const [items, setItems] = useState(store.groupDetails);

  //     set search query to empty string
  const [q, setQ] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["city", "name"]);

  // useEffect(() => {
  //   fetch(process.env.BACKEND_URL + "/api/dashboard_info")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setItems(data);
  //     }),
  //     [];
  // });

  // setItems(store.groupDetails);

  // setItems(store.groupDetails);

  const items = [
    {
      city: "Valencia",
      distance: 90,
      name: "Los Chalaos",
      routetype: "Hardcore",
      speed: 35,
    },
    {
      city: "Madrid",
      distance: 50,
      name: "Almuerzos",
      routetype: null,
      speed: 25,
    },
    {
      city: "Vigo",
      distance: 100,
      name: "Figuras",
      routetype: null,
      speed: 45,
    },
    {
      city: "Tarragona",
      distance: 75,
      name: "Els Pantumaca",
      routetype: null,
      speed: 28,
    },
  ];

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }
  // console.log(items);
  return (
    // busqueda empieza aquí
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center border-1 mt-4">
        <div className="col-md-10">
          <div className="row">
            <div className="col-3 d-flex justify-content-around align-items-center">
              <div className="btn-group w-100">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="searchUser"
                  autocomplete="off"
                  checked
                />
                <label className="btn btn-primary" htmlFor="searchUser">
                  Users
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="searchGroup"
                  autocomplete="off"
                />
                <label className="btn btn-primary" htmlFor="searchGroup">
                  Groups
                </label>
              </div>
            </div>
            <div className="search col-9">
              <i className="fa fa-search"></i>
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="form-control"
                placeholder="Search for users or groups here..."
                value={q}
                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
          </div>
          {/* busqueda acaba aquí */}
          {/* filtros de busqueda */}
          <div className="row pt-2">
            <div className="col-3">
              <div className="card text-center my-1">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlhtmlFor="maxSpeed" className="form-label">
                        Max. Average Speed
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="maxSpeed"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlhtmlFor="maxDistance" className="form-label">
                        Max. Average Distance
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="maxDistance"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Filter
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* filtros de busqueda */}
            <div className="col-9">
              {/* {store.groupDetails.map((item, index) => (
                <SearchResult
                  key={index}
                  theName={item.name}
                  id={index + 1}
                  city={item.city}
                  distance={item.distance}
                  speed={item.speed}
                />
              ))} */}
              {search(items).map((item, index) => (
                <SearchResult
                  key={index}
                  theName={item.name}
                  id={index + 1}
                  city={item.city}
                  distance={item.distance}
                  speed={item.speed}
                />
              ))}
              {/* <ul>
                {items.map((item, index) => (
                  <li>
                    <article className="card" key={index}>
                      <div className="card-content">
                        <h2 className="card-name">{item.name}</h2>
                        <ol className="card-list">
                          <li>
                            speed: <span>{item.speed}</span>
                          </li>
                          <li>
                            distance: <span>{item.distance}</span>
                          </li>
                          <li>
                            City: <span>{item.city}</span>
                          </li>
                        </ol>
                      </div>
                    </article>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
