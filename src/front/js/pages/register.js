import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Context } from "../store/appContext";

export const Register = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong rounded-3">
            <div className="card-body p-5 text-center">
              <h1 className="mb-5"> Sign Up </h1>
              {store.auth === true ? (
                <>
                  <h1>Registration succesful!</h1>
                  <p>You will now be redirected to your dashboard.</p>
                  {/* <Navigate to="/register" /> Esto llevará al dashboard una vez esté hecho */}
                </>
              ) : (
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    acceptTerms: false,
                  }}
                  onSubmit={(values) => {
                    values.acceptTerms === true
                      ? actions.registerUser(values) // console.log(values)
                      : console.log("You should agree to terms and conditions");
                  }}
                >
                  <Form>
                    <div className="form-outline mb-4">
                      <Field
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                      />
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                    </div>
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
                    <div className="d-flex justify-content-center mb-4">
                      <Field
                        name="acceptTerms"
                        className="me-1"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I agree to the <Link to="#"> Terms & Conditions </Link>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      REGISTER
                    </button>
                  </Form>
                </Formik>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
