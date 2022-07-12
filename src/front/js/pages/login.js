import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong rounded-3">
            <div className="card-body p-5 text-center">
              <h1 className="mb-5"> Login </h1>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  robotCheck: false,
                }}
                onSubmit={(values) => {
                  values.robotCheck === true
                    ? actions.loginUser(values)
                    : // console.log(values)
                      console.log("You can't login if you are a robot, sorry");
                }}
              >
                <Form>
                  <div className="form-outline mb-4">
                    <Field
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      type="email"
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <Field
                      className="form-control form-control-lg"
                      id="password"
                      name="password"
                      type="password"
                    />
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <Field name="robotCheck" className="me-1" type="checkbox" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I am not a robot nor an e-bike.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    LOGIN
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
