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
  const [minS, setMinS] = useState(undefined);
  const [maxS, setMaxS] = useState(undefined);
  const [minD, setMinD] = useState(undefined);
  const [maxD, setMaxD] = useState(undefined);
  const [searchType, setSearchType] = useState("user");

  const users = [
    {
      bikemodel: "haibike",
      city: "Bailén",
      distance: 50,
      email: "peoeoe@gmail.com",
      id: 2,
      name: "Miguelito de Bailén",
      routetype: "carretera",
      speed: 20,
    },
    {
      bikemodel: "haibike sl",
      city: "Sevilla",
      distance: 50,
      email: "ld@mail.com ",
      id: 1,
      name: "Carlos el Sevi",
      routetype: "carretera",
      speed: 20,
    },
    {
      bikemodel: "haibike sl",
      city: "Valencia",
      distance: 50,
      email: "ld@mail.com ",
      id: 1,
      name: "Nacho de Huesca",
      routetype: "carretera",
      speed: 20,
    },
  ];

  //     set  group search parameters
  const [searchParamGroup] = useState(["city", "name"]);

  function searchGroup(items) {
    return items.filter((item) => {
      return searchParamGroup.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  // set user search parameters

  const [searchParamUser] = useState(["email", "name"]);

  function searchUser(items) {
    return items.filter((item) => {
      return searchParamUser.some((newItem) => {
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
                  // checked="true"
                  defaultChecked={searchType === "user" ? true : false}
                  onChange={() => setSearchType("user")}
                />
                <label className="btn btn-primary" htmlFor="searchUser">
                  Users
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="searchGroup"
                  autoComplete="off"
                  defaultChecked={searchType === "group" ? true : false}
                  onChange={() => setSearchType("group")}
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
                placeholder={
                  searchType === "user"
                    ? "Search USERS by name or email..."
                    : "Search GROUPS by city or group name..."
                }
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

          <div className="row pt-4  justify-content-center">
            {/* resultados de la busqueda */}
            <div className="col-10">
              {searchType === "user" ? (
                <>
                  {q.length >= 1 && searchUser(users).length == 0 ? (
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
                      {searchUser(users).map((item, index) => (
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
                </>
              ) : (
                <>
                  {q.length >= 1 &&
                  searchGroup(store.groupDetails).length == 0 ? (
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
                      {searchGroup(store.groupDetails).map((item, index) => (
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
