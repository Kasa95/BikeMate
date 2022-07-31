import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, input, Form, useFormik } from "formik";
import * as Yup from "yup";
import { Context } from "../store/appContext";
import { newUserSchema } from "../validations/schemas";
import { NewUserSuccess } from "../component/NewUserSuccess.jsx";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [newUserSuccess, setNewUserSuccess] = useState("");
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
      name: "",
      city: "",
      email: "",
      password: "",
      distance: 25,
      speed: 20,
      routes: "",
    },
    validationSchema: newUserSchema,
    onSubmit: async (values) => {
      const response = await actions.registerUser(values);
      setNewUserSuccess(response.access_token);
    },
  });

  return (
    <>
      {newUserSuccess.length > 15 || localStorage.getItem("auth") === "true" ? (
        <NewUserSuccess userName={values.name} />
      ) : (
        ""
      )}
      <div className="container-fluid py-5 h-100 orange-background">
        <div
          className={
            newUserSuccess.length > 15 ||
            localStorage.getItem("auth") === "true"
              ? "totally-transparent-form"
              : "row d-flex justify-content-center align-items-center h-100"
          }
        >
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong rounded-3 semitransparent">
              <div className="card-body p-5 pb-3 text-center">
                <h1 className="mb-5"> Sign Up </h1>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-outline mb-4 col-6">
                      {errors.name && touched.name ? (
                        <label
                          htmlFor="name"
                          className="text-danger form-label"
                        >
                          {errors.name}
                        </label>
                      ) : (
                        <label htmlFor="name" className="form-label">
                          Username
                        </label>
                      )}

                      <input
                        className={
                          errors.name && touched.name
                            ? "form-control  input-error bg-transparent"
                            : "form-control  bg-transparent"
                        }
                        id="name"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      {errors.city && touched.city ? (
                        <label
                          htmlFor="city"
                          className="text-danger form-label"
                        >
                          {errors.city}
                        </label>
                      ) : (
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                      )}

                      <input
                        className={
                          errors.city && touched.city
                            ? "form-control input-error bg-transparent"
                            : "form-control bg-transparent"
                        }
                        id="city"
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-outline mb-4 col-6">
                      {errors.email && touched.email ? (
                        <label
                          htmlFor="email"
                          className="text-danger form-label"
                        >
                          {errors.email}
                        </label>
                      ) : (
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      )}
                      <input
                        className={
                          errors.email && touched.email
                            ? "form-control input-error bg-transparent"
                            : "form-control bg-transparent"
                        }
                        id="email"
                        name="email"
                        type="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      {errors.password && touched.password ? (
                        <label
                          htmlFor="password"
                          className="text-danger form-label"
                        >
                          {errors.password}
                        </label>
                      ) : (
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      )}
                      <div>
                        <input
                          className={
                            errors.password && touched.password
                              ? "form-control input-error bg-transparent"
                              : "form-control bg-transparent"
                          }
                          id="password"
                          name="password"
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="terms-label">Optional info</span>
                    <div className="row optional-fields pt-2">
                      <div className="form-outline mb-4 col-4 ">
                        {errors.distance && touched.distance ? (
                          <label
                            htmlFor="distance"
                            className="text-danger form-label"
                          >
                            {errors.distance}
                          </label>
                        ) : (
                          <label htmlFor="distance" className="form-label">
                            Avg. Distance
                          </label>
                        )}
                        <input
                          className={
                            errors.distance && touched.distance
                              ? "form-control input-error"
                              : "form-control"
                          }
                          id="distance"
                          name="distance"
                          type="number"
                          defaultValue={values.distance}
                          placeholder="25"
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-outline mb-4 col-4 ">
                        {errors.speed && touched.speed ? (
                          <label
                            htmlFor="speed"
                            className="text-danger form-label"
                          >
                            {errors.speed}
                          </label>
                        ) : (
                          <label htmlFor="speed" className="form-label">
                            Avg. Speed
                          </label>
                        )}
                        <input
                          className={
                            errors.speed && touched.speed
                              ? "form-control input-error"
                              : "form-control"
                          }
                          id="speed"
                          name="speed"
                          type="number"
                          defaultValue={values.speed}
                          placeholder="25"
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-outline mb-4 col-4 ">
                        <label htmlFor="routes" className="form-label">
                          Route Type
                        </label>
                        <select
                          className="form-select"
                          id="routes"
                          name="routes"
                          type="number"
                          defaultValue={values.routes}
                          placeholder="25"
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                          <option value="Mixed" label="Mixed">
                            Mixed
                          </option>
                          <option value="Mountain Bike" label="Mountain Bike">
                            Mountain Bike
                          </option>
                          <option value="Road" label="Road">
                            Road
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {touched.name === true &&
                  touched.email === true &&
                  touched.city === true &&
                  Object.keys(errors).length === 0 ? (
                    <button type="submit" className="submit-registration">
                      {isSubmitting ? (
                        <div class="spinner-loader text-light" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "REGISTER"
                      )}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="submit-registration"
                      disabled
                    >
                      REGISTER{" "}
                    </button>
                  )}{" "}
                  <div className="d-flex justify-content-center mb-4">
                    <label className="terms-label">
                      By registering, you agree to the{" "}
                      <Link to="/terms"> Terms & Conditions. </Link>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
