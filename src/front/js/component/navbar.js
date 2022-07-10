import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-3 bg-dark text-white navbar-static-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
          <ul className="nav col-12 col-lg-auto  mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#main-hero" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#featured-3" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
          </ul>
          <div className="text-center">
            <Link to="/" className="text-decoration-none text-light display-5">
              BikeMate
            </Link>
          </div>
          <div className="text-end">
            <Link
              to={"/login"}
              type="button"
              className="btn btn-outline-light me-2"
            >
              Login
            </Link>
            <Link to={"/register"} type="button" className="btn btn-warning">
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
