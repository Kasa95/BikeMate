import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = () => {
  return (
    <div className="">
      <div className="">
        <div className="col">{localStorage.getItem("name")}</div>
        <div className="col">
          <main className="dashboard_page_content">
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Sevilla</h2>
                <p className="copy">Text</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Málaga</h2>
                <p className="copy">Text</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Madrid</h2>
                <p className="copy">Text</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Barcelona</h2>
                <p className="copy">Text</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>

            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Galicia</h2>
                <p className="copy">Text</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Valencia</h2>
                <p className="copy">Text</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Ceuta</h2>
                <p className="copy">Text</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
            <div className="dashboard_page_card">
              <div className="dashboard_page_text_content">
                <h2 className="title">Grupo Melilla</h2>
                <p className="copy">Text</p>
                <Link to={"/ViewDetailDashboard/"}>
                  <button className="dashboard_page_btn">Unirse</button>
                </Link>
              </div>
            </div>
          </main>
        </div>
        <div className="col">Marketing</div>
      </div>
    </div>
  );
};
