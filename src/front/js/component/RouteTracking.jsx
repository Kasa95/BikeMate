import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useFormik } from "formik";
import { newRouteSchema } from "../validations/schemas";
import { AddNewRoute } from "./AddNewRoute.jsx";

export const RouteTracking = ({ groupid }) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getGroupRoutes(groupid);
  }, []);
  console.log(store.groupRoutes);

  const routes = store.groupRoutes;

  const [showForm, setShowForm] = useState(false);

  const handleShow = () => {
    setShowForm(showForm === true ? false : true);
  };

  return (
    <>
      {showForm === true ? <AddNewRoute groupid={groupid} /> : ""}
      <div className="map-box shadow-sm">
        <h2>Next meeting:</h2>
        {/* <div style={{ width: "100%", borderRadius: "2rem" }}>
          <iframe
            width="100%"
            height="200"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={
              "https://maps.google.com/?q=" +
              lat +
              "," +
              long +
              "&z=14&t=m&output=embed"
            }
          ></iframe>
        </div> */}
        <button
          className="btn-violet"
          style={{ fontSize: "8pt" }}
          onClick={handleShow}
        >
          Add route
        </button>
        <h2>Next meetings:</h2>
        {routes.map((item, index) => (
          <p key={index}>
            {item.date}
            <br />
            {item.address}
            <br />
            <a
              href={
                "https://maps.google.com/?q=" +
                item.latitude +
                "," +
                item.longitude
              }
            >
              View to Maps
            </a>
          </p>
        ))}
      </div>
    </>
  );
};
