import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.userInfo();
  }, []);

  return (
    <div className="dashboard_profile shadow-sm">
      <img
        className="profile-cover"
        src="https://res.cloudinary.com/bikem8/image/upload/c_scale,w_668/v1659546812/photo-1616963248328-6b7bea589840_siwuq4.avif"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2019_Tour_of_Austria_%E2%80%93_3rd_stage_20190608_%2814%29.jpg/220px-2019_Tour_of_Austria_%E2%80%93_3rd_stage_20190608_%2814%29.jpg"
        className="profile-image"
      />
      <h2>{store.profile.name}</h2>
      <h3 className="border-bottom">{store.profile.city}</h3>
      <div className="mt-4 h-100 d-flex flex-column justify-content-around">
        <p>
          Average Speed: <span>{store.profile.speed}</span> km/h
        </p>
        <p>
          Average Distance: <span>{store.profile.distance}</span> km
        </p>
        <p>
          Route types: <span>{store.profile.routetype}</span>
        </p>
        <p>
          Current bike: <span>{store.profile.bikemodel}</span>
        </p>
        <a href="/ViewProfileSettings" className="edit-profile-btn mb-3">
          Edit Profile
        </a>
      </div>
    </div>
  );
};
