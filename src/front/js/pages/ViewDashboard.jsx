import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dashboard } from "../component/Dashboard.jsx";
import { Profile } from "../component/Profile.jsx";
import { Marketing } from "../component/Marketing.jsx";
import "../../styles/cards.css";

export const ViewDashboard = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.groupInfo();
    actions.mygroupsInfo();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row px-5">
          <div className="col-3 col-xxl-2 mt-3">
            <p className="dash-cards-titles">Your profile</p>
            <Profile />
          </div>
          <div className="col-6 col-xxl-8 mt-3">
            <p className="dash-cards-titles">Recommended groups</p>
            {store.groupInfo.length == 0 ? (
              <div className="dashboard_page_card">
                <div
                  className="dashboard_page_text_content"
                  style={{ color: "black" }}
                >
                  NO GROUPS IN YOUR AREA
                  <Link to={"/new-group"}>
                    <button className="dashboard_page_btn">
                      SET UP THE FIRST ONE!
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="row">
                {store.groupInfo.map((item, index) => (
                  <div className="col-6 col-xxl-4" key={index}>
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
            )}
          </div>

          <div className="col-3 col-xxl-2 mt-3">
            <p className="dash-cards-titles">Your groups</p>
            <Marketing />
          </div>
        </div>
      </div>
    </>
  );
};
