import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { GroupSettings } from "../component/GroupSettings.jsx";
import "../../styles/cards.css";

export const ViewGroupSettings = () => {
  const { store, actions } = useContext(Context);
  const { group_id } = useParams();
  let groupid = parseInt(group_id);
  console.log(groupid);

  useEffect(() => {
    actions.getOneGroupInfo(groupid);
  }, []);

  const currentgroup = store.currentGroup;
  return sessionStorage.getItem("auth") == "true" ? (
    <div style={{ minHeight: "77.6vh" }}>
      <GroupSettings
        name={currentgroup.name}
        city={currentgroup.city}
        speed={currentgroup.speed}
        distance={currentgroup.distance}
        routetype={currentgroup.routetype}
        id={currentgroup.id}
      />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
