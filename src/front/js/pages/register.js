import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Context } from "../store/appContext";

export const Register = () => {
  return (
    <div className="form-signin w-50 m-auto">
      <div className="text-center">
        <h1 className="h3 mb-3 fw-normal"> Sign Up </h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            passwordRepeat: "",
          }}
          onSubmit={async (values) => {
            values.password === values.passwordRepeat
              ? // await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2))
              : alert("Passwords do not match");
          }}
        >
          <Form>
            <div className="form-floating">
              <Field
                className="form-control"
                id="name"
                name="name"
                placeholder="Jane"
              />
              <label htmlFor="name"> Name </label>
            </div>
            <div className="form-floating">
              <Field
                className="form-control"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <label htmlFor="email"> Email </label>
            </div>
            <div className="form-floating">
              <Field
                className="form-control"
                id="password"
                name="password"
                placeholder="Use a strong one!"
                type="password"
              />
              <label htmlFor="password"> Password </label>
            </div>
            <div className="form-floating">
              <Field
                className="form-control"
                id="passwordRepeat"
                name="passwordRepeat"
                placeholder="Use a strong one!"
                type="password"
              />
              <label htmlFor="passwordRepeat"> Confirm Password </label>
            </div>
            <button type="submit" className="w-100 btn btn-lg btn-primary">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
