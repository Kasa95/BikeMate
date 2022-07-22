import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, input, Form, useFormik } from "formik";
import * as Yup from "yup";
import { newGroupSchema } from "../validations/schemas";
import "../../styles/newgroup.css";

import { Context } from "../store/appContext";

export const NewGroup = () => {
  const { store, actions } = useContext(Context);
  const { values, handleBlur, errors, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        groupName: "",
        groupCity: "",
        groupDistance: "",
        groupSpeed: "",
        groupRoutetype: "",
      },
      validationSchema: newGroupSchema,
      onSubmit: (values) => {
        actions.createGroup(values);
        console.log(values);
      },
    });
  console.log(touched);
  console.log(errors);
  console.log(values);

  return localStorage.getItem("auth") == "true" ? (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-11 col-md-9 col-lg-8 col-xl-6">
          <div className="card shadow-2-strong rounded-3">
            <div className="card-body p-5 text-center">
              <h1 className="mb-5"> Create New Group </h1>

              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4 ">
                  {errors.groupName && touched.groupName ? (
                    <label
                      htmlFor="groupName"
                      className="text-danger form-label"
                    >
                      {errors.groupName}
                    </label>
                  ) : (
                    <label htmlFor="groupName" className="form-label">
                      Group Name
                    </label>
                  )}
                  <input
                    className={
                      errors.groupName && touched.groupName
                        ? "form-control form-control-lg input-error"
                        : "form-control form-control-lg"
                    }
                    id="groupName"
                    name="groupName"
                    type="text"
                    defaultValue={values.groupName}
                    placeholder="Your Group Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline mb-4 ">
                  {errors.groupCity && touched.groupCity ? (
                    <label
                      htmlFor="groupCity"
                      className="text-danger form-label"
                    >
                      {errors.groupCity}
                    </label>
                  ) : (
                    <label htmlFor="groupCity" className="form-label">
                      Group City
                    </label>
                  )}
                  <input
                    className={
                      errors.groupCity && touched.groupCity
                        ? "form-control form-control-lg input-error"
                        : "form-control form-control-lg"
                    }
                    id="groupCity"
                    name="groupCity"
                    type="text"
                    defaultValue={values.groupCity}
                    placeholder="Your City"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="form-outline mb-4 col-6 ">
                    {errors.groupDistance && touched.groupDistance ? (
                      <label
                        htmlFor="groupDistance"
                        className="text-danger form-label"
                      >
                        {errors.groupDistance}
                      </label>
                    ) : (
                      <label htmlFor="groupDistance" className="form-label">
                        Avg. Distance
                      </label>
                    )}
                    <input
                      className={
                        errors.groupDistance && touched.groupDistance
                          ? "form-control form-control-lg input-error"
                          : "form-control form-control-lg"
                      }
                      id="groupDistance"
                      name="groupDistance"
                      type="number"
                      defaultValue={values.groupDistance}
                      placeholder="25"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline mb-4 col-6 ">
                    {errors.groupSpeed && touched.groupSpeed ? (
                      <label
                        htmlFor="groupSpeed"
                        className="text-danger form-label"
                      >
                        {errors.groupSpeed}
                      </label>
                    ) : (
                      <label htmlFor="groupSpeed" className="form-label">
                        Avg. Speed
                      </label>
                    )}
                    <input
                      className={
                        errors.groupSpeed && touched.groupSpeed
                          ? "form-control form-control-lg input-error"
                          : "form-control form-control-lg"
                      }
                      id="groupSpeed"
                      name="groupSpeed"
                      type="number"
                      defaultValue={values.groupSpeed}
                      placeholder="35"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-outline mb-4 col-12">
                  <label htmlFor="groupRoutetype" className="form-label">
                    Route Type
                  </label>
                  {/* ARREGLAR RADIO BUTTONS */}
                  <div role="group" aria-labelledby="my-radio-group">
                    <input
                      id="groupRoutetype"
                      name="groupRoutetype"
                      type="radio"
                      defaultValue="Road"
                      value="Road"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <input
                      id="groupRoutetype"
                      name="groupRoutetype"
                      type="radio"
                      defaultValue="Mountain Bike"
                      value="Mountain Bike"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <input
                      id="groupRoutetype"
                      name="groupRoutetype"
                      type="radio"
                      defaultValue="Mixed"
                      value="Mixed"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* posible subida de imágenes */}
                {/* <div className="form-outline mb-4">
                    <input
                      className="form-control form-control-lg"
                      id="groupProfilePic"
                      name="groupProfilePic"
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        setinputValue("file", event.currentTarget.files[0]);
                      }}
                    />
                    <label htmlFor="groupProfilePic" className="form-label">
                      Profile Picture
                    </label>
                  </div> */}
                {touched.groupName === true &&
                touched.groupCity === true &&
                touched.groupDistance === true &&
                touched.groupSpeed === true &&
                Object.keys(errors).length === 0 ? (
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block mt-1"
                  >
                    CREATE GROUP
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block mt-1"
                    disabled
                  >
                    CREATE GROUP
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
