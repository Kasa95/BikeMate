import React, { useContext } from "react";
import { DetailDashboard } from "../component/DetailDashboard.jsx";
import { Navigate } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/commentbox.css";

export const ViewDetailDashboard = () => {
  const { store, actions } = useContext(Context);

  return localStorage.getItem("auth") == "true" ? (
    <div className="mt-5">
      <DetailDashboard />
    </div>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
