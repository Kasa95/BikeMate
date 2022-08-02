import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Marketing = ({ name, id, distance, speed, city, routetype }) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.mygroupsInfo();
  }, []);

  // for (let i in store.mygroupsInfo.name) {
  //   {
  //     store.mygroupsInfo[i].name;
  //   }
  // }

  const groups_belong = store.mygroupsInfo
    ? store.mygroupsInfo.map((i, index) => {
        return (
          <li key={index}>
            {store.mygroupsInfo[index].name}{" "}
            <Link to={"/ViewComments/" + (index + 1)}>
              <button className="dashboard_page_btn">GO!</button>
            </Link>{" "}
          </li>
        );
      })
    : "";

  return (
    <>
      {store.mygroupsInfo.length != 0 ? (
        <>
          <div className="dashboard_page_card">
            <div className="dashboard_page_text_content">
              <h2 className="title">My Groups:</h2>
              <p className="copy">{groups_belong} </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="dashboard_page_card">
            <div className="dashboard_page_text_content ">
              <h2 className="title">You do not belong to any group </h2>
              <Link to={"/search"}>
                <button className="dashboard_page_btn">
                  SEARCH BIKEMATES!
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};
