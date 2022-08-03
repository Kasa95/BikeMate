import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Marketing = ({ name, id, distance, speed, city, routetype }) => {
  const { store, actions } = useContext(Context);

  const groups_belong = store.mygroupsInfo
    ? store.mygroupsInfo.map((i, index) => {
        return (
          <div key={index} className="mygroup_card">
            <b>{store.mygroupsInfo[index].name}</b>
            <br /> {store.mygroupsInfo[index].city}
            <br />
            <Link to={"/ViewComments/" + (index + 1)}>GO!</Link>
          </div>
        );
      })
    : "";

  return (
    <>
      {store.mygroupsInfo.length != 0 ? (
        <>
          <div className="dashboard_mygroups">
            <img
              src="https://res.cloudinary.com/bikem8/image/upload/v1659551302/david-dvoracek-vE_qxEQggj0-unsplash_ydbqiv.jpg"
              alt=""
              class="mygroups-cover"
            />
            <div className="h-100 w-100 d-flex flex-column justify-content-around align-items-center">
              {groups_belong}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="dashboard_mygroups">
            <img
              src="https://res.cloudinary.com/bikem8/image/upload/v1659551302/david-dvoracek-vE_qxEQggj0-unsplash_ydbqiv.jpg"
              alt=""
              class="mygroups-cover"
            />
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="">You do not belong to any groups</h2>
              <p>
                BikeMate is best enjoyed with other people. You can look for
                other groups to join or create you own if you prefer.
              </p>

              <a href="/search" className="">
                Search
              </a>

              <a href="/new-group" className="">
                Create group
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};
