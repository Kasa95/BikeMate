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
          src="https://res.cloudinary.com/bikem8/image/upload/v1659470243/mainexample_edfha8.jpg"
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
        <div className="row py-5">
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
            src="https://res.cloudinary.com/bikem8/image/upload/v1659469732/115843668_10158525436264805_5791788039133576246_n_knpq4a.jpg"
            alt=""
            className="fotoperico"
          />
        </div>
      </div>
      <div className="faqs-container">
        <h2 className="text-center pb-4">
          <b>Frequently asked questions</b>
        </h2>
        <div
          className="accordion accordion-flush w-75 m-auto"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How much does it cost?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                All the base content is completely free! We may release some
                special features in the future that could cost some money, but
                for the time being the app is free of cost.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Who can use the app?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Any users over the age of 14 can register and join groups.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How can I contact other users?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Everyone registered with BikeMate can join any of the groups in
                their area and post comments for all members to see. Believe us,
                it's really simple! <Link to="/register">Register now</Link> and
                discover how easy it is to use.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-container">
        <div className="contact-us">
          <div className="container p-8 d-flex">
            <div className="w-50">
              <h1>
                Interested?
                <br />
                Wanna know more?
              </h1>
              <h2>
                Feel free to follow us on any of our social networks and send us
                a DM there, we'll try to respond as fast as possible!
              </h2>
              <div className="social-buttons d-flex justify-content-around py-2">
                <a href="https://facebook.com">
                  <img src="https://cdn-icons-png.flaticon.com/512/1077/1077041.png" />
                </a>
                <a href="https://twitter.com">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111819.png" />
                </a>
                <a href="https://linkedin.com">
                  <img src="https://cdn-icons-png.flaticon.com/512/1946/1946531.png" />
                </a>
              </div>
              <p className="pt-3">
                You can also email us at{" "}
                <a href="mailto:hello@bikemate.com">hello@bikemate.com</a>
              </p>
            </div>
            <div className="w-50 text-center">
              <img
                src="https://res.cloudinary.com/bikem8/image/upload/v1659469452/tamas-tuzes-katai-rEn-AdBr3Ig-unsplash_kinnd5.jpg"
                alt=""
                className="contact-us-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
