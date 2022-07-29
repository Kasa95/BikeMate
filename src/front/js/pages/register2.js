import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, input, Form, useFormik } from "formik";
import * as Yup from "yup";
import { Context } from "../store/appContext";
import { newUserSchema } from "../validations/schemas";
import { NewUserSuccess } from "../component/NewUserSuccess.jsx";

export const Register2 = () => {
  const { store, actions } = useContext(Context);
  const [newUserSuccess, setNewUserSuccess] = useState(null);
  const { values, handleBlur, errors, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: newUserSchema,
      onSubmit: async (values) => {
        const response = await actions.registerUser(values);
        setNewUserSuccess(response);
      },
    });

  console.log(newUserSuccess);
  return (
    <>
      {newUserSuccess >= 1 ? <NewUserSuccess /> : ""}
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong rounded-3">
              <div className="card-body p-5 text-center">
                <h1 className="mb-5"> Sign Up </h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    {errors.name && touched.name ? (
                      <label htmlFor="name" className="text-danger form-label">
                        {errors.name}
                      </label>
                    ) : (
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                    )}

                    <input
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    {errors.email && touched.email ? (
                      <label htmlFor="email" className="text-danger form-label">
                        {errors.email}
                      </label>
                    ) : (
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                    )}
                    <input
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      type="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline mb-4">
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
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    <label className="">
                      By registering, you agree to the{" "}
                      <Link to="#"> Terms & Conditions </Link>
                    </label>
                  </div>
                  {touched.name === true &&
                  touched.email === true &&
                  // touched.password === true &&
                  Object.keys(errors).length === 0 ? (
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      REGISTER
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      disabled
                    >
                      REGISTER
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
