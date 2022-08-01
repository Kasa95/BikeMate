import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import "../../styles/search.css";
import searchMan from "../../img/searchman.png";
import { Context } from "../store/appContext";
import { SearchResult } from "../component/SearchResult.jsx";

export const Search = () => {
  const { store, actions } = useContext(Context);
  // const [items, setItems] = useState(store.groupDetails);

  useEffect(() => {
    actions.getUserList();
    actions.groupInfo();
    actions.mygroupsInfo();
  }, []);

  console.log(store.groupInfo);

  //     set search query to empty string
  const [q, setQ] = useState("");

  const [searchType, setSearchType] = useState("user");

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
  return localStorage.getItem("auth") == "true" ? (
    <>
      <div className="container-fluid text-center orange-searchman-background">
        <img src={searchMan} alt="" className="search-header-img" />
        <div className="centered">
          <h1>Find new groups and mates</h1>
          <p>
            BikeMate has thousands of groups and riders all over the world. We
            are sure you will find a perfect mate!
          </p>
        </div>
      </div>
      {/* busqueda empieza aquí */}
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center search-box flex-column">
          <div className="search col-7">
            <i className="fa fa-search"> </i>
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
          <div className="col-3 d-flex justify-content-around align-items-center">
            <div className="btn-group w-100 mt-2">
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
              <label
                className="btn btn-secondary"
                htmlFor="searchUser"
                style={
                  searchType === "user"
                    ? { color: "#FA6400", background: "#F2F2F2", width: "8rem" }
                    : {
                        color: "rgba(0,0,0,.6)",
                        background: "#565E64",
                        width: "8rem",
                      }
                }
              >
                <b>USERS</b>
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
              <label
                className="btn btn-secondary"
                htmlFor="searchGroup"
                style={
                  searchType != "user"
                    ? { color: "#FA6400", background: "#F2F2F2", width: "8rem" }
                    : {
                        color: "rgba(0,0,0,.6)",
                        background: "#565E64",
                        width: "8rem",
                      }
                }
              >
                <b>GROUPS</b>
              </label>
            </div>
          </div>
        </div>
        {/* busqueda acaba aquí */}
        <div className="row justify-content-center">
          {/* resultados de la busqueda */}
          <div className="search-results-container">
            {searchType === "user" ? (
              <>
                {q.length >= 1 && searchUser(store.userList).length == 0 ? (
                  <p className="text-center"> No results for your query! </p>
                ) : (
                  <> </>
                )}
                {q === "" ? (
                  <>
                    <div className="lds-ripple ">
                      <div></div>
                      <div></div>
                    </div>
                    <p className="text-center mb-5 text-muted w-100">
                      Use the bar above to search <br />
                      Your results will be shown here!
                    </p>
                  </>
                ) : (
                  <>
                    {searchUser(store.userList).map((item, index) => (
                      <SearchResult
                        key={index}
                        theName={item.name}
                        id={index + 1}
                        city={item.city}
                        distance={item.distance}
                        speed={item.speed}
                        email={item.email}
                      />
                    ))}
                  </>
                )}
              </>
            ) : (
              <>
                {q.length >= 1 && searchGroup(store.groupInfo).length == 0 ? (
                  <p className="text-center"> No results for your query! </p>
                ) : (
                  <> </>
                )}
                {q === "" ? (
                  <>
                    <div className="lds-ripple ">
                      <div></div>
                      <div></div>
                    </div>
                    <p className="text-center mb-5 text-muted w-100">
                      Use the bar above to search <br />
                      Your results will be shown here!
                    </p>
                  </>
                ) : (
                  <>
                    {searchGroup(store.groupInfo).map((item, index) => (
                      <SearchResult
                        key={index}
                        theName={item.name}
                        id={index + 1}
                        city={item.city}
                        groupId={item.id}
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
    </>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
