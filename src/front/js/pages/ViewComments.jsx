import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { DetailsGroup } from "../component/DetailsGroup.jsx";
// import { DetailDashboard } from "../component/DetailDashboard.jsx";
import { RouteTracking } from "../component/RouteTracking.jsx";
import Commentsection from "../component/Comentsection.jsx";
import "../../styles/cards.css";

export const ViewComments = () => {
  const { store, actions } = useContext(Context);
  const { group_id } = useParams();

  let groupid = parseInt(group_id);
  return (
    <>
      <div className="row">
        <div className="col-4 mt-3">
          {store.groupInfo.map((item, index) => (
            <div className="mb-3" key={index}>
              <DetailsGroup
                name={item.name}
                city={item.city}
                speed={item.speed}
                distance={item.distance}
                users_quantity={item.users_quantity}
                id={item.id}
              />
            </div>
          ))}
          <RouteTracking />
        </div>
        <div className="col-8">
          <div className="row">
            {/* <DetailDashboard /> */}
            <Commentsection group_id={groupid} />
          </div>
        </div>
      </div>
    </>
  );
};
