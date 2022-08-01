import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Footer = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid footer-bottom">
      <footer className="">
        <p className="col-md-4 mb-0 text-muted"> ©2022 BikeMate </p>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            {store.auth === true || localStorage.getItem("auth") === "true" ? (
              <Link to="/ViewDashboard" className="nav-link px-2 text-muted">
                Dashboard
              </Link>
            ) : (
              <Link to="/" className="nav-link px-2 text-muted">
                Home
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link to={"/terms"} className="nav-link px-2 text-muted">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
