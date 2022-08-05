import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsGroup = ({
  name,
  id,
  distance,
  speed,
  city,
  routetype,
  users_quantity,
}) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.groupInfo();
  }, []);
  return (
    <>
      {/* <div className="dashboard_page_card">
        <div className="dashboard_page_text_content">
          <h2 className="title">{name}</h2>
          <p className="copy">Members:{users_quantity}</p>
          <p className="copy">City: {city}</p>
          <p className="copy">Average distance: {distance} km</p>
          <p className="copy">Average speed: {speed} km/h</p>
          <p className="copy">Route type: {routetype} </p>
        </div>
      </div> */}

      <div className="groupinfo shadow-sm">
        {/* {coverphoto != null ? (
          <img src={coverphoto} className="profile-cover" />
        ) : ( */}
        <img
          src="https://res.cloudinary.com/bikem8/image/upload/c_scale,w_668/v1659546812/photo-1616963248328-6b7bea589840_siwuq4.avif"
          className="group-cover"
        />
        {/* )} */}
        {/* {userphoto != null ? (
          <img src={userphoto} className="profile-image" />
        ) : ( */}
        <img
          src="https://res.cloudinary.com/bikem8/image/upload/v1659604933/nullprofile_dk2zrr.jpg"
          className="group-image"
        />
        {/* )} */}

        <h2>{name}</h2>
        <h3 className="border-bottom">{city}</h3>
        <div className="mt-2 h-100 d-flex justify-content-between">
          <p>
            Average Speed: <span>{speed}</span> km/h
          </p>
          <p>
            Average Distance: <span>{distance}</span> km
          </p>
        </div>
        <div className="mt-2 h-100 d-flex justify-content-between"></div>
        <p>
          Route types: <span>{routetype}</span>
        </p>
        <p>
          Members: <span>{users_quantity}</span>
        </p>
      </div>
    </>
  );
};
