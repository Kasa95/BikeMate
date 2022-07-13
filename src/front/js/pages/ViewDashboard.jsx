import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Dashboard } from "../component/Dashboard.jsx";

export const ViewDashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <Dashboard />
    </div>
  );
};
