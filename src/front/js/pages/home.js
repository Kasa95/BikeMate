import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import features1 from "../../img/features1.jpg";
import features2 from "../../img/features2.jpg";
import features3 from "../../img/features3.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container my-5" id="main-hero">
        <div className="row">
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
      <div className="text-center">
        <div
          className="overflow-hidden"
          //   style={{ maxHeight: 30 * vh }}
        >
          <div className="container px-5">
            <img
              src="https://i.ibb.co/9rLGWRn/bm1.png"
              className="img-fluid border rounded-3 shadow-lg mb-0"
              alt="Example image"
              width="956"
              height="537"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};
