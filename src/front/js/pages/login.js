import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [wrongLogin, setWrongLogin] = useState("");
  console.log(wrongLogin);
  return (
    <div className="container-fluid py-5 h-100 orange-background">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong rounded-3 semitransparent">
            <div className="card-body p-5 text-center">
              <h1 className="mb-3"> Login </h1>
              {wrongLogin === false ? (
                <p className="text-danger">
                  <b>The login data is not correct</b>
                </p>
              ) : (
                <p className="no-opacity">.</p>
              )}
              {store.auth === true ? (
                <>
                  <Navigate to="/dashboard" />
                </>
              ) : (
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={async (values) => {
                    const response = await actions.loginUser(values);
                    // actions.loginUser(values);
                    setWrongLogin(response);
                  }}
                >
                  <Form>
                    <div className="form-outline mb-4">
                      <Field
                        className="form-control form-control-lg bg-transparent"
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
                        className="form-control form-control-lg bg-transparent"
                        id="password"
                        name="password"
                        type="password"
                      />
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                    </div>
                    <button type="submit" className="submit-registration">
                      LOGIN
                    </button>
                  </Form>
                </Formik>
              )}{" "}
              <div className="d-flex justify-content-center mt-5 text-black-50">
                <label>
                  Don't have an account yet?{" "}
                  <Link to="/register"> Register here! </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
