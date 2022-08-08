import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsGroup = ({
  name,
  distance,
  speed,
  city,
  routetype,
  users_quantity,
}) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="groupinfo shadow-sm">
        {/* {coverphoto != null ? (
          <img src={coverphoto} className="profile-cover" />
        ) : ( */}
        <img
          src="https://res.cloudinary.com/bikem8/image/upload/v1659949125/martin-magnemyr-nGt71kRwUOw-unsplash_pvkaed.jpg"
          className="group-cover"
        />
        {/* )} */}
        {/* {userphoto != null ? (
          <img src={userphoto} className="profile-image" />
        ) : ( */}
        <img
          src="https://res.cloudinary.com/bikem8/image/upload/v1659949072/groupodefault_tv5fmg.jpg"
          className="group-image"
        />
        {/* )} */}

        <h2>{name}</h2>
        <h3 className="border-bottom">{city}</h3>
        <div className="row w-100 pt-3">
          <p className="col-6">
            Average Speed <br />
            {speed} km/h
          </p>
          <p className="col-6">
            Average Distance <br />
            {distance} km
          </p>
        </div>
        <div className="row w-100">
          <p className="col-6">
            Route types <br />
            {routetype}
          </p>
          <p className="col-6">
            Members <br />
            {users_quantity}
          </p>
        </div>
      </div>
    </>
  );
};
