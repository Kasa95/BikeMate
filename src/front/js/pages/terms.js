import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Terms = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1>Terms and Conditions</h1>
      <p>Lorem ipsum</p>
    </>
  );
};
