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
  console.log(store.nextRoute);
  console.log(store.groupRoutes);

  const [showForm, setShowForm] = useState(false);

  const handleShow = () => {
    setShowForm(showForm === true ? false : true);
  };

  // empieza form
  const group_id = groupid;
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const {
    values,
    handleBlur,
    errors,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      dateTime: "",
      location: "",
      info: "",
    },
    validationSchema: newRouteSchema,
    onSubmit: async (values) => {
      const response = await actions.createNewRoute(group_id, values);
      setLat(response.latitude);
      setLong(response.longitude);
      actions.getGroupRoutes(group_id);
    },
  });

  return (
    <>
      {showForm === true ? (
        <div
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="container-fluid display-newroute d-flex justify-content-center">
            <div className="pop-up-route" id="newroutePopup">
              <div className="w-100 text-end">
                <span className="close-button" href="" onClick={handleShow}>
                  X
                </span>
              </div>
              {lat !== 0 ? (
                <>
                  <p>Route created succcesfully!</p>
                  <div
                    className="py-2"
                    style={{ width: "100%", borderRadius: "2rem" }}
                  >
                    <iframe
                      style={{ borderRadius: "0.5rem", marginTop: "1rem" }}
                      width="100%"
                      height="400"
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
                  </div>
                </>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column align-items-center py-2">
                      {errors.dateTime && touched.dateTime ? (
                        <label
                          htmlFor="dateTime"
                          className="text-danger form-label"
                        >
                          {errors.dateTime}
                        </label>
                      ) : (
                        <label htmlFor="dateTime" className="form-label">
                          Date and time
                        </label>
                      )}
                      <input
                        type="datetime-local"
                        id="dateTime"
                        name="dateTime"
                        defaultValue={values.dateTime}
                        placeholder="When"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control w-75 text-center"
                      />
                    </div>
                    <div className="d-flex flex-column align-items-center py-2">
                      {errors.location && touched.location ? (
                        <label
                          htmlFor="location"
                          className="text-danger form-label"
                        >
                          {errors.location}
                        </label>
                      ) : (
                        <label htmlFor="location" className="form-label">
                          Street and City
                        </label>
                      )}
                      <input
                        type="text"
                        id="location"
                        name="location"
                        defaultValue={values.location}
                        placeholder="Where"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control w-75 text-center"
                      />{" "}
                    </div>
                    <div className="d-flex flex-column align-items-center pt-2 pb-5">
                      {errors.info && touched.info ? (
                        <label
                          htmlFor="info"
                          className="text-danger form-label"
                        >
                          {errors.info}
                        </label>
                      ) : (
                        <label htmlFor="info" className="form-label">
                          More info
                        </label>
                      )}
                      <input
                        type="text"
                        id="info"
                        name="info"
                        defaultValue={values.info}
                        placeholder="More info"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control w-75 text-center"
                      />
                    </div>
                  </div>
                  <button type="submit" className="submitbutton mt-1">
                    {isSubmitting ? (
                      <div class="spinner-loader text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "CREATE ROUTE"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="map-box shadow-sm">
        <h2>Next meeting:</h2>
        {store.nextRoute.map((item) => (
          <p>
            <b>{item.date}</b>
            <br />
            {item.address}
            <br />
            Additional info: {item.info}
            <div className="p-3 border-bottom" style={{ width: "100%" }}>
              <iframe
                style={{ borderRadius: "1rem" }}
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/?q=
              ${item.latitude}
              ,
              ${item.longitude}
              &z=14&t=m&output=embed`}
              ></iframe>
            </div>
          </p>
        ))}

        <button className="add-meeting-btn" onClick={handleShow}>
          NEW MEETING
        </button>
        <h2>Future meetings:</h2>
        {store.groupRoutes.map((item, index) => (
          <p className="py-2 px-1" key={index}>
            <b>{item.date}</b>
            <br />
            {item.address}{" "}
            <a
              href={
                "https://maps.google.com/?q=" +
                item.latitude +
                "," +
                item.longitude
              }
            >
              (Open in Google Maps)
            </a>
          </p>
        ))}
      </div>
    </>
  );
};
