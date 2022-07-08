import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom" id="main-hero">
        <h1 className="display-4 fw-bold">You've got the Bike...</h1>
        <h1 className="display-2 fw-bold">You need the Mates!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Bicyclists all over the world were longing for a service like
            this...so we finally made it happen! Join BikeMate now and connect
            with cycling groups in your area.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link
              to={"/register"}
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Register now!
            </Link>
            <Link
              to={"/login"}
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Login
            </Link>
          </div>
        </div>
        <div
          className="overflow-hidden"
          //   style={{ maxHeight: 30 * vh }}
        >
          <div className="container px-5">
            <img
              src="https://i.ibb.co/9rLGWRn/bm1.png"
              className="img-fluid border rounded-3 shadow-lg mb-0"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Columns with icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#collection"></use>
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right"></use>
              </svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#people-circle"></use>
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right"></use>
              </svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#toggles2"></use>
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
