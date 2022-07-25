import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsGroup = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dashboard_page_card">
      <div className="dashboard_page_text_content">
        <h2 className="title"></h2>
        <p className="copy"></p>
        <Link to={"/ViewProfileSettings/"}>
          <button className="dashboard_page_btn">Comprar</button>
        </Link>
      </div>
    </div>
  );
};
