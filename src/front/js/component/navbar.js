import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import bmLogoOrange from "../../img/bmLogoOrange.png";
import bmLogoWhite from "../../img/bmLogoWhite.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <nav className="p-3 bg-white text-white sticky-top shadow-sm">
      {store.auth === true || localStorage.getItem("auth") === "true" ? ( // aquí la barra de navegación cuando estamos logueados
        <div className="container">
          <div className="row">
            <div className="text-start col-6">
              <Link
                to="/ViewDashboard"
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
              {/* <h4 className="text-dark">|Dashboard</h4> */}
            </div>
            <ul className="nav col-4 justify-content-end align-items-center mt-2">
              <li>
                <Link
                  to="/ViewDashboard"
                  className="nav-link px-2 text-secondary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="nav-link px-2 text-secondary">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/new-group" className="nav-link px-2 text-secondary">
                  New Group
                </Link>
              </li>
            </ul>
            <div className="col-2 align-self-center mt-2 text-center">
              <div className="dropdown-center">
                <button
                  className="btn btn-outline-orange-login dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {localStorage.getItem("name") === null ? (
                    "User"
                  ) : (
                    <>{localStorage.getItem("name")}</>
                  )}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-wide"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link to="/ViewProfileSettings" className="dropdown-item">
                      My Profile
                    </Link>
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
                        navigate("/");
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
          <div className="row">
            <ul className="nav col-2 justify-content-center align-items-center mt-3">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#featured-3"
                  className="nav-link px-2 text-secondary disabled"
                >
                  Features
                </a>
              </li>
            </ul>
            <div className="col-8 text-center">
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
            <div className="col-2 align-self-center mt-2 text-center">
              <Link
                to={"/login"}
                type="button"
                className="btn btn-outline-orange-login me-2"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
