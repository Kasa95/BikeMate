import React, { useContext } from "react";
import { DetailDashboard } from "../component/DetailDashboard.jsx";
import { Context } from "../store/appContext";
import "../../styles/commentbox.css";

export const ViewDetailDashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <DetailDashboard />
    </div>
  );
};
