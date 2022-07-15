import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Dashboard } from "../component/Dashboard.jsx";
import "../../styles/cards.css";

export const ViewDashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <Dashboard />
    </div>
  );
};
