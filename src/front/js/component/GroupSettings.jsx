import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const GroupSettings = ({
  name,
  id,
  distance,
  speed,
  city,
  routetype,
}) => {
  const [uploadImages2, setUploadImages2] = useState("");
  const [uploadImages3, setUploadImages3] = useState("");
  const { store, actions } = useContext(Context);
  const [group, setGroup] = useState({});

  return (
    <>
      <div className="container">
        <h1>Edit Group</h1>
        <hr />
        <div className="row">
          {/* <!-- left column --> */}
          <div className="col-md-3">
            <div className="text-center">
              {/* aqui comienza la foto de perfil */}

              <div>
                <img
                  src={store.currentGroup.photo}
                  style={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "cover",
                  }}
                  className="img border-2 border border-warning rounded-3"
                  alt="..."
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn-primary fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                  data-backdrop="false"
                >
                  Edit Group Img
                </button>
                <div
                  className="modal fade modal-dialog-scrollable"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  data-backdrop="false"
                >
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Group Img
                        </h5>
                        <button
                          type="button"
                          className="btn-close btnHeader"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <input
                              className="form-control input-foto"
                              type="file"
                              id="formFile"
                              onChange={(e) =>
                                setUploadImages2(e.target.files[0])
                              }
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn-primary fw-bold"
                          data-bs-dismiss="modal"
                          onClick={(e) =>
                            actions.pictureGroup(uploadImages2, id)
                          }
                        >
                          Upload Img
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aqui esta la parte de la foto de cover */}

              <div>
                <img
                  src={store.currentGroup.cover}
                  style={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "cover",
                  }}
                  className="img border-2 border border-warning rounded-3"
                  alt="..."
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn-primary fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  data-bs-whatever="@mdo"
                  data-backdrop="false"
                >
                  Edit Cover Img
                </button>
                <div
                  className="modal fade modal-dialog-scrollable"
                  id="exampleModal2"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  data-backdrop="false"
                >
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Cover Img
                        </h5>
                        <button
                          type="button"
                          className="btn-close btnHeader"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <input
                              className="form-control input-foto"
                              type="file"
                              id="formFile"
                              onChange={(e) =>
                                setUploadImages3(e.target.files[0])
                              }
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn-primary fw-bold"
                          data-bs-dismiss="modal"
                          onClick={(e) =>
                            actions.pictureGroupCover(uploadImages3, id)
                          }
                        >
                          Upload Img
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- edit form column --> */}
          <div className="col-md-9 personal-info">
            <h3>Group info</h3>

            <form className="form-horizontal" role="form">
              <div className="form-group">
                <label className="col-lg-3 control-label">Group Name:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={name}
                    onChange={(e) => {
                      setGroup({ ...group, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">Group Speed:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={speed}
                    onChange={(e) => {
                      setGroup({ ...group, speed: e.target.value });
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
                    defaultValue={distance}
                    onChange={(e) => {
                      setGroup({ ...group, distance: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">Route Type:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={routetype}
                    onChange={(e) => {
                      setGroup({ ...group, routetype: e.target.value });
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
                    defaultValue={city}
                    onChange={(e) => {
                      setGroup({ ...group, city: e.target.value });
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
                      actions.groupUpdate(group, id);
                      console.log(group);
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
