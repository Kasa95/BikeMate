import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, input, Form, useFormik } from "formik";
import * as Yup from "yup";
import { newGroupSchema } from "../validations/schemas";
import "../../styles/newgroup.css";

import { Context } from "../store/appContext";
import { NewGroupSuccess } from "../component/NewGroupSuccess.jsx";

export const NewGroup = () => {
  const { store, actions } = useContext(Context);
  const [newGroupId, setNewGroupId] = useState(null); // se usa para conseguir el ID del nuevo grupo creado y para mostrar el modal
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
      onSubmit: async (values) => {
        const response = await actions.createGroup(values);
        setNewGroupId(response.id);
      },
    });

  return localStorage.getItem("auth") == "true" ? (
    <>
      {" "}
      {newGroupId >= 1 ? <NewGroupSuccess groupId={newGroupId} /> : ""}
      <div className="container-fluid text-center orange-searchman-background">
        <img
          src="https://i.ibb.co/WfrBPM7/BIEKRS3.png"
          alt=""
          className="search-header-img"
        />
        <div className="centered">
          <h1>Create a New Group</h1>
          <p>
            Establish a new group in your area so that BikeMates can join you in
            your routes!
          </p>
        </div>
      </div>
      <div className="container group-box">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-11 col-md-9 col-lg-8 col-xl-8">
            <div className="card rounded-3 newgroup-shadow">
              <div className="card-body py-4 px-5 text-center">
                <form
                  onSubmit={handleSubmit}
                  className={newGroupId >= 1 ? "transparent-form" : ""}
                >
                  <div className="row mt-2">
                    <div className="form-outline mb-4 col-6">
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
                    <div className="form-outline mb-4 col-6">
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
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className=""
                    >
                      <div className="form-check-inline d-flex flex-row justify-content-center py-2">
                        <input
                          id="Road"
                          name="groupRoutetype"
                          type="radio"
                          defaultValue="Road"
                          value="Road"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="form-check-input me-2"
                        />
                        <label htmlFor="Road" className="form-check-label me-4">
                          Road
                        </label>

                        <input
                          id="MTB"
                          name="groupRoutetype"
                          type="radio"
                          defaultValue="Mountain Bike"
                          value="Mountain Bike"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="form-check-input me-2"
                        />
                        <label htmlFor="MTB" className="form-check-label me-4">
                          Mountain Bike
                        </label>
                        <input
                          id="Mixed"
                          name="groupRoutetype"
                          type="radio"
                          defaultValue="Mixed"
                          value="Mixed"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="form-check-input me-2"
                        />
                        <label
                          htmlFor="Mixed"
                          className="form-check-label me-4"
                        >
                          Mixed
                        </label>
                      </div>
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
                    <button type="submit" className="submitbutton mt-1">
                      <b>CREATE GROUP</b>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="submitbutton mt-1"
                      disabled
                    >
                      <b>CREATE GROUP</b>
                    </button>
                  )}
                </form>
              </div>
            </div>
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
