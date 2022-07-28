import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = ({ name, id, distance, speed, city, routetype }) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.groupInfo();
  }, []);
  return (
    // <div className="">
    //   <div className="row">
    //     <div className="col-6">
    //       <main className="dashboard_page_content">
    <div className="dashboard_page_card me-3">
      <div className="dashboard_page_text_content">
        <h2 className="title">{name}</h2>
        <p className="copy">City: {city}</p>
        <p className="copy">Average distance: {distance} km</p>
        <p className="copy">Average speed: {speed} km/h</p>
        <p className="copy">Route type: {routetype} </p>
        <Link to={"/ViewDetailDashboard/"}>
          <button className="dashboard_page_btn">Unirse</button>
        </Link>
      </div>
    </div>
    //         <div className="dashboard_page_card">
    //           <div className="dashboard_page_text_content">
    //             <h2 className="title">Grupo Málaga</h2>
    //             <p className="copy">Miembros</p>
    //             <Link to={"/ViewDetailDashboard/"}>
    //               <button className="dashboard_page_btn">Unirse</button>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="dashboard_page_card">
    //           <div className="dashboard_page_text_content">
    //             <h2 className="title">Grupo Madrid</h2>
    //             <p className="copy">Miembros</p>
    //             <Link to={"/ViewDetailDashboard/"}>
    //               <button className="dashboard_page_btn">Unirse</button>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="dashboard_page_card">
    //           <div className="dashboard_page_text_content">
    //             <h2 className="title">Grupo Barcelona</h2>
    //             <p className="copy">Miembros</p>
    //             <Link to={"/ViewDetailDashboard/"}>
    //               <button className="dashboard_page_btn">Unirse</button>
    //             </Link>
    //           </div>
    //         </div>

    //         <div className="dashboard_page_card">
    //           <div className="dashboard_page_text_content">
    //             <h2 className="title">Grupo Galicia</h2>
    //             <p className="copy">Miembros</p>
    //             <Link to={"/ViewDetailDashboard/"}>
    //               <button className="dashboard_page_btn">Unirse</button>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="dashboard_page_card">
    //           <div className="dashboard_page_text_content">
    //             <h2 className="title">Grupo Valencia</h2>
    //             <p className="copy">Miembros</p>
    //             <Link to={"/ViewDetailDashboard/"}>
    //               <button className="dashboard_page_btn">Unirse</button>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="dashboard_page_card">
    //           <div className="dashboard_page_text_content">
    //             <h2 className="title">Grupo Ceuta</h2>
    //             <p className="copy">Miembros</p>
    //             <Link to={"/ViewDetailDashboard/"}>
    //               <button className="dashboard_page_btn">Unirse</button>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="dashboard_page_card">
    //           <div className="dashboard_page_text_content">
    //             <h2 className="title">Grupo Melilla</h2>
    //             <p className="copy">Miembros</p>
    //             <Link to={"/ViewDetailDashboard/"}>
    //               <button className="dashboard_page_btn">Unirse</button>
    //             </Link>
    //           </div>
    //         </div>
    //       </main>
    //     </div>

    //   </div>
    // </div>
  );
};
