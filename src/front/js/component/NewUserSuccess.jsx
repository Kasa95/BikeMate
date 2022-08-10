import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NewUserSuccess = (userName) => {
  const navigate = useNavigate();
  console.log(userName);
  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  }, []);
  return (
    <div
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="container-fluid display-newgroupsuccess d-flex justify-content-center">
        <div className="new-user-modal" id="cookiesPopup">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5716/5716716.png"
            alt="cookies-img"
          />
          <p>Registration completed</p>
          <h1>Welcome to BikeMate!</h1>
          <p>You will now be redirected to your dashboard.</p>
        </div>
      </div>
    </div>
  );
};
