import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useFormik } from "formik";
import { newRouteSchema } from "../validations/schemas";

export const AddNewRoute = ({ groupid }) => {
  const { store, actions } = useContext(Context);
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
      console.log(lat, long);
    },
  });

  return (
    <div
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="container-fluid display-newroute d-flex justify-content-center">
        <div className="pop-up-route" id="newroutePopup">
          {lat !== 0 ? (
            <div style={{ width: "100%", borderRadius: "2rem" }}>
              <iframe
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
                    <label htmlFor="info" className="text-danger form-label">
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
  );
};
