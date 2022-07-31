import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dashboard } from "../component/Dashboard.jsx";
import { Profile } from "../component/Profile.jsx";
import { Marketing } from "../component/Marketing.jsx";
import "../../styles/cards.css";

export const ViewDashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.groupInfo.length == 0 ? (
        <>
          <div className="row">
            <div className="col-3 mt-5 ml-3">
              <Profile />
            </div>
            <div
              className="dashboard_page_card me-3 ms-3 mt-5"
              style={{ width: "45%" }}
            >
              <div
                className="dashboard_page_text_content"
                style={{ color: "black" }}
              >
                {" "}
                NO ONE GROUP IN YOUR AREA
                <Link to={"/new-group"}>
                  <button className="dashboard_page_btn">
                    SET UP THE FIRST ONE!
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-3 mt-5">
              <Marketing />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-3 mt-5 ml-3">
              <Profile />
            </div>
            <div className="col-6 col-lg-6 mt-3">
              <div className="row">
                {store.groupInfo.map((item, index) => (
                  <div className="col-lg-4" key={index}>
                    <Dashboard
                      name={item.name}
                      city={item.city}
                      speed={item.speed}
                      distance={item.distance}
                      id={item.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-3 mt-5">
              <Marketing />
            </div>
          </div>
        </>
      )}
    </>
  );
};
