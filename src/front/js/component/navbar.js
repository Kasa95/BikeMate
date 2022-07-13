import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import bmLogoOrange from "../../img/bmLogoOrange.png";
import bmLogoWhite from "../../img/bmLogoWhite.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="p-3 bg-white text-white navbar-static-top">
      {localStorage.getItem("auth") === "true" ? ( // aquí la barra de navegación cuando estamos logueados
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
            <ul className="nav col-12 col-lg-auto  mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#main-hero" className="nav-link px-2 text-secondary">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#featured-3" className="nav-link px-2 text-secondary">
                  My Groups
                </a>
              </li>
              <li>
                <a href="#featured-3" className="nav-link px-2 text-secondary">
                  Search
                </a>
              </li>
            </ul>
            <div className="text-center">
              <Link
                to="/"
                className="text-decoration-none text-light display-5"
              >
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
              <div className="dropdown">
                <button
                  className="btn btn-orange dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item orange-text"
                      href="#"
                      onClick={() => {
                        actions.logout();
                      }}
                    >
                      Log Out
                    </a>
                  </li>
                  {/* <button
                    className="btn btn-outline-warning me-2"
                    
                  >
                    Logout
                  </button> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // aquí la barra de navegación cuando NO estamos logueados
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
              <Link
                to="/"
                className="text-decoration-none text-light display-5"
              >
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
              <Link
                to={"/login"}
                type="button"
                className="btn btn-outline-warning me-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
