import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Context } from "../store/appContext";

export const NewGroup = () => {
  const { store, actions } = useContext(Context);

  return localStorage.getItem("auth") == "true" ? (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-11 col-md-9 col-lg-8 col-xl-6">
          <div className="card shadow-2-strong rounded-3">
            <div className="card-body p-5 text-center">
              <h1 className="mb-5"> Create New Group </h1>

              <Formik
                initialValues={{
                  groupName: "",
                  groupCity: "",
                  groupDistance: "",
                  groupSpeed: "",
                }}
                // siguiente paso: errores, etc.
                // validationSchema={Yup.object().shape({
                //   groupName: Yup.string()
                //     .required("Group Name Required")
                //     .min(5, "Group name is Too short"),
                // })}
                onSubmit={(values) => {
                  actions.createGroup(values);
                }}
              >
                <Form>
                  <div className="form-outline mb-4">
                    <Field
                      className="form-control form-control-lg"
                      id="groupName"
                      name="groupName"
                      type="text"
                    />
                    <label htmlFor="groupName" className="form-label">
                      Group Name
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <Field
                      className="form-control form-control-lg"
                      id="groupCity"
                      name="groupCity"
                      type="text"
                    />
                    <label htmlFor="groupCity" className="form-label">
                      City
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-1"></div>
                    <div className="form-outline mb-4 col-5">
                      <Field
                        className="form-control form-control-lg"
                        id="groupDistance"
                        name="groupDistance"
                        type="number"
                      />
                      <label htmlFor="groupDistance" className="form-label">
                        Average Distance
                      </label>
                    </div>
                    <div className="form-outline mb-4 col-5">
                      <Field
                        className="form-control form-control-lg"
                        id="groupSpeed"
                        name="groupSpeed"
                        type="number"
                      />
                      <label htmlFor="groupSpeed" className="form-label">
                        Average Speed
                      </label>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  {/* posible subida de imágenes */}
                  {/* <div className="form-outline mb-4">
                    <Field
                      className="form-control form-control-lg"
                      id="groupProfilePic"
                      name="groupProfilePic"
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                    />
                    <label htmlFor="groupProfilePic" className="form-label">
                      Profile Picture
                    </label>
                  </div> */}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    CREATE GROUP
                  </button>
                </Form>
              </Formik>
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
