import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container my-5" id="main-hero">
        <img
          src="https://res.cloudinary.com/bikem8/image/upload/v1659379297/Curve_Line_1_g14dck.svg"
          className="homeback"
        />
        <div className="row pt-4">
          <div className="col-1"></div>
          <div className="col-5">
            <h1>
              You've got the bike,<br></br> you need the mates!
            </h1>
          </div>
          <div className="col-1"></div>
          <div className="col-4">
            <h3 className="orange-text">
              Try it now for <b> FREE </b>
            </h3>
            <Link
              to={
                localStorage.getItem("auth") === "true"
                  ? "/ViewDashboard"
                  : "/register"
              }
              type="button"
              className="btn btn-violet btn-lg px-4 me-sm-3 my-3 w-75 height-40"
            >
              {localStorage.getItem("auth") === "true"
                ? "GO TO DASHBOARD"
                : "GET STARTED"}
            </Link>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="text-center container-fluid home-orange-background">
        <img
          src="https://i.ibb.co/9rLGWRn/bm1.png"
          className="home-1st-picture"
          alt="Example image"
          width="956"
          height="537"
          loading="lazy"
        />
        <div className="row text-start">
          <div className="col-2"></div>
          <div className="col-5">
            <h2>
              <b>For cyclists of any level.</b>
            </h2>
            <h3>
              BikeMate aims to help cyclists of all levels connect with nearby
              people who are also looking for biking mates.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
