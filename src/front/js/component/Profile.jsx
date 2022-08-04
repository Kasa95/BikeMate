import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.userInfo();
  }, []);

  const userphoto = store.user.photo;
  const coverphoto = store.user.cover;

  return (
    <div className="dashboard_profile shadow-sm">
      {coverphoto != null ? (
        <img src={coverphoto} className="profile-cover" />
      ) : (
        <img
          src="https://res.cloudinary.com/bikem8/image/upload/c_scale,w_668/v1659546812/photo-1616963248328-6b7bea589840_siwuq4.avif"
          className="profile-cover"
        />
      )}
      {userphoto != null ? (
        <img src={userphoto} className="profile-image" />
      ) : (
        <img
          src="https://res.cloudinary.com/bikem8/image/upload/v1659604933/nullprofile_dk2zrr.jpg"
          className="profile-image"
        />
      )}

      <h2>{store.user.name}</h2>
      <h3 className="border-bottom">{store.user.city}</h3>
      <div className="mt-4 h-100 d-flex flex-column justify-content-around">
        <p>
          Average Speed: <span>{store.user.speed}</span> km/h
        </p>
        <p>
          Average Distance: <span>{store.user.distance}</span> km
        </p>
        <p>
          Route types: <span>{store.user.routetype}</span>
        </p>
        <p>
          Current bike: <span>{store.user.bikemodel}</span>
        </p>
        <a href="/ViewProfileSettings" className="edit-profile-btn mb-3">
          Edit Profile
        </a>
      </div>
    </div>
  );
};
