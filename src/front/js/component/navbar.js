import React, { useContext } from "react";
import { Link } from "react-router-dom";
import bmLogoOrange from "../../img/bmLogoOrange.png";
import bmLogoWhite from "../../img/bmLogoWhite.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="p-3 bg-white text-white navbar-static-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
          <ul className="nav col-12 col-lg-auto  mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#main-hero" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#featured-3" className="nav-link px-2 text-secondary">
                Features
              </a>
            </li>
          </ul>
          <div className="text-center">
            <Link to="/" className="text-decoration-none text-light display-5">
              <img
                src={bmLogoOrange}
                className=""
                alt="Example image"
                height="55"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="text-end">
            {store.auth === true ? (
              <button
                className="btn btn-outline-warning me-2"
                onClick={() => actions.logout()}
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                type="button"
                className="btn btn-outline-warning me-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
