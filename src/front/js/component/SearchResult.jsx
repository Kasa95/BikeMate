import React, { useContext, useEffect, useState } from "react";
import "../../styles/search.css";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const SearchResult = ({
  theName,
  groupId,
  city,
  distance,
  speed,
  email,
}) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const myCurrentGroups = store.mygroupsInfo; //trae los grupos que estamos unidos actualmente

  const [alreadyJoined, setAlreadyJoined] = useState(() =>
    myCurrentGroups.find((grou) => grou.group_id == groupId) ? true : false
  );

  console.log(alreadyJoined);

  return (
    <>
      <div className="search-result-card">
        {email != undefined ? (
          <h5 className="search-result-title">
            <b>{theName}</b>
          </h5>
        ) : (
          <h5
            className="search-result-title"
            onClick={() => navigate(`/group/${groupId}`)}
            style={{ cursor: "pointer" }}
          >
            <b>{theName}</b>
          </h5>
        )}

        <p className="search-result-text">
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
          <>
            {alreadyJoined ? (
              <a className="joinedgroup" style={{ justifySelf: "center" }}>
                Request sent.
              </a>
            ) : (
              <a
                className="joingroup"
                style={{ justifySelf: "center" }}
                onClick={() => {
                  setAlreadyJoined(true);
                }}
              >
                Add friend!
              </a>
            )}
          </>
        ) : (
          <div
            className="justify-content-center"
            style={{ display: "flex", width: "100%" }}
          >
            <a
              className="visitgroup"
              onClick={() => navigate(`/group/${groupId}`)}
            >
              Visit group
            </a>
            {alreadyJoined ? (
              <a className="joinedgroup">You're a member</a>
            ) : (
              <a
                className="joingroup"
                onClick={() => {
                  actions.joinGroup(groupId);
                  setAlreadyJoined(true);
                }}
              >
                Join group!
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
};
