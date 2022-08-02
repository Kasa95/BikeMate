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
              className="btn btn-violet btn-lg px-4 me-sm-3 my-3 w-75"
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
        <div className="row text-start width-75 justify-content-between pt-4">
          <div className="width-30 m-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/625/625296.png"
              alt=""
              className="features-img"
            />
            <h3>Built by bike lovers</h3>
            <p>
              BikeMate was built by people just like you, who wanted to solve
              the problems all of us cyclist have.
            </p>
          </div>
          <div className="width-30 m-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/134/134808.png"
              alt=""
              className="features-img"
            />
            <h3>Community-driven</h3>
            <p>
              All of the groups in BikeMate have been created by other users
              jsut like you, who want to experience group riding.
            </p>
          </div>
          <div className="width-30 m-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/628/628577.png"
              alt=""
              className="features-img"
            />
            <h3>Always free!</h3>
            <p>
              Using the core features of BikeMate is (and will always be)
              completely free. No costs!
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="orange-background-half"></div>
        <div className="row pt-5">
          <div className="col-1"></div>
          <div className="col-6 d-flex flex-column justify-content-end">
            <p className="bigquote">
              "Since using BikeMate, my trips have been much more challenging
              and entertaining. I find new people and routes, and the atmosphere
              is super friendly"
            </p>
            <p className="smallquote">
              Perico Delgado<br></br>BikeMate User
              <br />
              Former Tour de France Winner
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/bikem8/image/upload/c_limit,e_improve,h_485,w_657/v1659448642/115843668_10158525436264805_5791788039133576246_n_knpq4a.jpg"
            alt=""
            className="fotoperico"
          />
        </div>
      </div>
      <div>Preguntas frecuentes</div>
      <div>Contactanos</div>
    </>
  );
};
