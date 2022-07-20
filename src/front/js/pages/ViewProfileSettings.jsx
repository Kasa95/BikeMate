import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/cards.css";
import { ProfileSettings } from "../component/ProfileSettings.jsx";

export const ViewProfileSettings = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <ProfileSettings />
    </>
  );
};
