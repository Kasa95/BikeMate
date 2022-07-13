import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const DashTest = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h2>
        <strong> This will be the dashboard </strong>
      </h2>
    </div>
  );
};
