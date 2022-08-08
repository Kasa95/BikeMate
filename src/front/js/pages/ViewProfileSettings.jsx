import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ProfileSettings } from "../component/ProfileSettings.jsx";
import "../../styles/cards.css";

export const ViewProfileSettings = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <ProfileSettings />
    </>
  );
};
