import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfileSettings = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  useEffect(() => {
    actions.userInfo();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Edit Profile</h1>
        <hr />
        <div className="row">
          {/* <!-- left column --> */}
          <div className="col-md-3">
            <div className="text-center">
              <img
                src="//placehold.it/100"
                className="avatar img-circle"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>

              <input type="file" className="form-control" />
            </div>
          </div>

          {/* <!-- edit form column --> */}
          <div className="col-md-9 personal-info">
            <div className="alert alert-info alert-dismissable">
              <a className="panel-close close" data-dismiss="alert">
                ×
              </a>
              <i className="fa fa-coffee"></i>
              This is an <strong>.alert</strong>. Use this to show important
              messages to the user.
            </div>
            <h3>Personal info</h3>

            <form className="form-horizontal" role="form">
              <div className="form-group">
                <label className="col-lg-3 control-label">UserName:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={store.profile.name}
                    onChange={(e) => {
                      setUser({ ...user, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="e-mail"
                    defaultValue={store.profile.email}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">Speed:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={store.profile.speed}
                    onChange={(e) => {
                      setUser({ ...user, speed: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">City:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={store.profile.city}
                    onChange={(e) => {
                      setUser({ ...user, city: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">Bikemodel:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={store.profile.bikeModel}
                    onChange={(e) => {
                      setUser({ ...user, bikemodel: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">RouteType:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={store.profile.routetype}
                    onChange={(e) => {
                      setUser({ ...user, routetype: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">Distance:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={store.profile.distance}
                    onChange={(e) => {
                      setUser({ ...user, distance: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-8">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      actions.userUpdate(user);
                      console.log(user);
                    }}
                  >
                    Save Changes
                  </button>
                  <span></span>
                  <input
                    type="reset"
                    className="btn btn-default"
                    value="Cancel"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
