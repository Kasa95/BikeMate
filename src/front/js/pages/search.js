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
  const [minS, setMinS] = useState(null);
  const [maxS, setMaxS] = useState(null);
  const [minD, setMinD] = useState(null);
  const [maxD, setMaxD] = useState(null);

  //     set search parameters
  const [searchParam] = useState(["city", "name"]);

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
                  autoComplete="off"
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
                placeholder="Search your city or a group name..."
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
                      <label htmlFor="maxSpeed" className="form-label">
                        Average Speed
                      </label>
                      <div className="row d-flex justify-content-evenly">
                        <div className="col-5">
                          <input
                            type="number"
                            className="form-control"
                            id="minSpeed"
                            placeholder="Min"
                            value={minS}
                            /*
                                            // set the value of our useState q
                                            //  anytime the user types in the search box
                                            */
                            onChange={(e) => setMinS(e.target.value)}
                          />
                        </div>
                        <div className="col-5">
                          <input
                            type="number"
                            className="form-control col-5"
                            id="maxSpeed"
                            placeholder="Max"
                            value={maxS}
                            /*
                                            // set the value of our useState q
                                            //  anytime the user types in the search box
                                            */
                            onChange={(e) => setMaxS(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="maxSpeed" className="form-label">
                        Average Distance
                      </label>
                      <div className="row d-flex justify-content-evenly">
                        <div className="col-5">
                          <input
                            type="number"
                            className="form-control"
                            id="minDistance"
                            placeholder="Min"
                            value={minD}
                            /*
                                            // set the value of our useState q
                                            //  anytime the user types in the search box
                                            */
                            onChange={(e) => setMinD(e.target.value)}
                          />
                        </div>
                        <div className="col-5">
                          <input
                            type="number"
                            className="form-control col-5"
                            id="maxDistance"
                            placeholder="Max"
                            value={maxD}
                            /*
                                            // set the value of our useState q
                                            //  anytime the user types in the search box
                                            */
                            onChange={(e) => setMaxD(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Filter
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* filtros de busqueda */}

            {/* resultados de la busqueda */}
            <div className="col-9">
              {q.length >= 1 && search(store.groupDetails).length == 0 ? (
                <p className="text-center">No results for your query!</p>
              ) : (
                <></>
              )}
              {q === "" ? (
                <p className="text-center">
                  Use the bar above to search <br></br>
                  Your results will be shown here!
                </p>
              ) : (
                <>
                  {search(store.groupDetails).map((item, index) => (
                    <SearchResult
                      key={index}
                      theName={item.name}
                      id={index + 1}
                      city={item.city}
                      distance={item.distance}
                      speed={item.speed}
                    />
                  ))}
                </>
              )}

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
