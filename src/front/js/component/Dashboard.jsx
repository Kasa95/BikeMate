import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = ({ name, id, distance, speed, city, routetype }) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="dashboard_page_card">
        <div className="dashboard_page_text_content">
          <h2 className="title">
            <b>{name}</b>
            <br />
            {city}
          </h2>
          <p className="copy">
            Average distance: {distance} km <br />
            Average speed: {speed} km/h
          </p>

          {/* <p className="copy">Route type: {routetype} </p> */}
          <div>
            <Link to={"/ViewComments/" + id}>
              <button className="dashboard_page_btn">Visit</button>
            </Link>
            {store.mygroupsInfo.filter((e) => e.group_id === id).length > 0 ? (
              <a className="dashboard_page_btn_disabled">Joined</a>
            ) : (
              <a
                className="dashboard_page_btn"
                onClick={() => {
                  actions.joinGroup(id);
                }}
              >
                Join!
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
