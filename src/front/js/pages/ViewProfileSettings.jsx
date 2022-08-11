import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";
import { ProfileSettings } from "../component/ProfileSettings.jsx";
import "../../styles/cards.css";

export const ViewProfileSettings = () => {
  const { store, actions } = useContext(Context);

  return sessionStorage.getItem("auth") == "true" ? (
    <div style={{ minHeight: "77.6vh" }}>
      <ProfileSettings />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
