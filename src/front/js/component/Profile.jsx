import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.userInfo();
  }, []);

  return (
    <div className="dashboard_page_card">
      <div className="dashboard_page_text_content">
        <h2 className="title">
          About me:<br></br>
          {store.profile.name}
        </h2>
        <p className="copy">City: {store.profile.city}</p>
        <p className="copy">Average distance: {store.profile.distance} km</p>
        <p className="copy">Average speed: {store.profile.speed} km/h</p>
        <p className="copy">Route type: {store.profile.routetype} </p>
        <Link to={"/ViewProfileSettings/"}>
          <button className="dashboard_page_btn">Editar Perfil</button>
        </Link>
      </div>
    </div>
  );
};
