import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsGroup = (name, id, distance, speed, city) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.groupInfo();
  }, []);

  return (
    <div className="dashboard_page_card">
      <div className="dashboard_page_text_content">
        <h2 className="title">{name}</h2>
        <p className="copy">City: {city}</p>
        <p className="copy">Average distance: {distance} km</p>
        <p className="copy">Average speed: {speed} km/h</p>
      </div>
    </div>
  );
};
