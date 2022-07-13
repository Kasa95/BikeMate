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
            <img
              src="https://res.cloudinary.com/inelan/image/upload/c_scale,w_600/v1657741019/samples/jonny-kennaugh-nPOtzvGLYW0-unsplash_nybweu.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Grupo de Sevilla</h5>
              <p className="card-text"></p>
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
            <img
              src="https://res.cloudinary.com/inelan/image/upload/c_scale,w_450/v1657741157/samples/logan-deborde-ocVYkCIf2jE-unsplash_hcmg1o.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Grupo de Málaga</h5>
              <p className="card-text">Some quick example text</p>
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
            <img
              src="https://res.cloudinary.com/inelan/image/upload/c_scale,w_480/v1657738414/samples/bike.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Grupo de Madrid</h5>
              <p className="card-text">Some quick example</p>
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
            <img
              src="https://res.cloudinary.com/inelan/image/upload/c_scale,w_450/v1657741285/samples/marianna-lutkova-4PSLAKVQQ88-unsplash_daaalo.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Grupo de Barcelona</h5>
              <p className="card-text">Some quick example text</p>
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
