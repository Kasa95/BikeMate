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

  const groups_belong = store.mygroupsInfo.map((i, index) => {
    return <li key={index}>{store.mygroupsInfo[index].name}</li>;
  });

  return (
    <div className="dashboard_page_card">
      <div className="dashboard_page_text_content">
        <h2 className="title">My Groups:</h2>
        <p className="copy">
          {groups_belong}
          {/* {store.mygroupsInfo[0].name} */}
        </p>
        {/* <Link to={"/ViewProfileSettings/"}>
          <button className="dashboard_page_btn">Comprar</button>
        </Link> */}
      </div>
    </div>
  );
};
