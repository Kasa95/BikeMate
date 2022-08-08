import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { DetailsGroup } from "../component/DetailsGroup.jsx";
import { RouteTracking } from "../component/RouteTracking.jsx";
import Commentsection from "../component/Comentsection.jsx";
import "../../styles/cards.css";
import "../../styles/viewgroup.css";

export const ViewComments = () => {
  const { store, actions } = useContext(Context);
  const { group_id } = useParams();
  let groupid = parseInt(group_id);

  useEffect(() => {
    actions.getOneGroupInfo(groupid);
  }, []);

  const currentgroup = store.currentGroup;
  console.log(currentgroup);

  return (
    <>
      <div className="container">
        <div className="row pt-3">
          <div className="col-3 mt-3">
            <div className="mb-3">
              <DetailsGroup
                name={currentgroup.name}
                city={currentgroup.city}
                speed={currentgroup.speed}
                distance={currentgroup.distance}
                users_quantity={currentgroup.users_quantity}
                routetype={currentgroup.routetype}
                // coverphoto={currentgroup.cover}
                // groupphoto={currentgroup.picture}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <Commentsection group_id={groupid} />
            </div>
          </div>
          <div className="col-3 mt-3">
            <RouteTracking groupid={groupid} />
          </div>
        </div>
      </div>
    </>
  );
};
