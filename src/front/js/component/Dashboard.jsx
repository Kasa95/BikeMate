import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-3 mt-5 ml-3">
          <main className="dashboard_page_content">
            <div className="dashboard_container_profilecard">
              <div className="dashboard_page_card">
                <div className="dashboard_page_text_content">
                  <h2 className="title">{localStorage.getItem("name")}</h2>
                  <p className="copy">{localStorage.getItem("city")}</p>
                  <Link to={"/ViewProfileSettings/"}>
                    <button className="dashboard_page_btn">
                      Editar Perfil
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="col-6">
          <main className="dashboard_page_content">
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Sevilla</h2>
                <p className="copy">Miembros</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Málaga</h2>
                <p className="copy">Miembros</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Madrid</h2>
                <p className="copy">Miembros</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Barcelona</h2>
                <p className="copy">Miembros</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>

            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Galicia</h2>
                <p className="copy">Miembros</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Valencia</h2>
                <p className="copy">Miembros</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Ceuta</h2>
                <p className="copy">Miembros</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Melilla</h2>
                <p className="copy">Miembros</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
          </main>
        </div>
        <div className="col-3 mt-5 ml-3">
          <main className="dashboard_page_content">
            <div className="dashboard_container_marketing">
              <div className="dashboard_page_card">
                <div className="dashboard_page_text_content">
                  <h2 className="title"></h2>
                  <p className="copy"></p>
                  <Link to={"/ViewProfileSettings/"}>
                    <button className="dashboard_page_btn">Comprar</button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
