import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">Usuario</div>
        <div className="col">
          <div
            className="card text-white bg-dark mb-3"
            style={{ width: "18rem" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Grupo de Sevilla</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <Link to={"/SingleDashboard/" + id}> */}
              <span href="#" className="btn btn-primary">
                Unirse a este grupo
              </span>
              {/* </Link> */}
            </div>
          </div>

          <div
            className="card text-white bg-dark mb-3"
            style={{ width: "18rem" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Grupo de Málaga</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <Link to={"/SingleDashboard/" + id}> */}
              <span href="#" className="btn btn-primary">
                Unirse a este grupo
              </span>
              {/* </Link> */}
            </div>
          </div>

          <div
            className="card text-white bg-dark mb-3"
            style={{ width: "18rem" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Grupo de Madrid</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <Link to={"/SingleDashboard/" + id}> */}
              <span href="#" className="btn btn-primary">
                Unirse a este grupo
              </span>
              {/* </Link> */}
            </div>
          </div>

          <div
            className="card text-white bg-dark mb-3"
            style={{ width: "18rem" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Grupo de Barcelona</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <Link to={"/SingleDashboard/" + id}> */}
              <span href="#" className="btn btn-primary">
                Unirse a este grupo
              </span>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="col">Marketing</div>
      </div>
    </div>
  );
};
