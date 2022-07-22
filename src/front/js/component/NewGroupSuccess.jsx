import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NewGroupSuccess = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card display-newgroupsuccess">
      <h1>New group created!</h1>
      <div className="row col-6">
        <button className="col-6 btn btn-secondary">Back to Dashboard</button>
        <button className="col-6 btn btn-primary">Visit my new group!</button>
      </div>
    </div>
  );
};
