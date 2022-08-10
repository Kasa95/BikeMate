import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Terms } from "./pages/terms";
import { Search } from "./pages/search";
import { ViewDashboard } from "./pages/ViewDashboard.jsx";
import { NewGroup } from "./pages/NewGroup.jsx";
import { ViewProfileSettings } from "./pages/ViewProfileSettings.jsx";
import { ViewGroupSettings } from "./pages/ViewGroupSettings.jsx";
import { ViewComments } from "./pages/ViewComments.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Terms />} path="/terms" />
            <Route element={<Search />} path="/search" />
            <Route element={<NewGroup />} path="/new-group" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<ViewDashboard />} path="/dashboard/" />
            <Route element={<ViewComments />} exact path="/group/:group_id" />
            <Route element={<ViewProfileSettings />} path="/edit_profile/" />
            <Route
              element={<ViewGroupSettings />}
              path="/edit_group/:group_id"
            />
            <Route element={<h1> Not found! </h1>} />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
