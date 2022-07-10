import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1> Login goes here </h1>
    </div>
  );
};
