import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dashboard_page_card">
      <div className="dashboard_page_text_content">
        <h2 className="title">{localStorage.getItem("name")}</h2>
        <p className="copy">{localStorage.getItem("city")}</p>
        <Link to={"/ViewProfileSettings/"}>
          <button className="dashboard_page_btn">Editar Perfil</button>
        </Link>
      </div>
    </div>
  );
};
