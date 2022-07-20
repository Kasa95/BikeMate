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
      <div class="row">
        <div className="col-3 mt-5 ml-3">
          <Profile />
        </div>
        <div class="col-6 col-lg-6">
          <div className="row">
            {store.groupInfo.map((item, index) => (
              <div className="col-lg-4">
                <Dashboard
                  key={index}
                  name={item.name}
                  city={item.city}
                  speed={item.speed}
                  distance={item.distance}
                  id={index}
                />
              </div>
            ))}
          </div>
        </div>
        <div class="col-3">
          <Marketing />
        </div>
      </div>
    </>
  );
};
