import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailDashboard = () => {
  const { store, actions } = useContext(Context);
  const [comment, setComment] = useState("");
  const { group_id } = useParams();

  useEffect(() => {
    actions.getComment(group_id);
  }, []);

  return (
    <div className="">
      {/* <!-- Contenedor Principal --> */}
      <div className="comments-container">
        <h1>
          Comments <a href="http://creaticode.com"></a>
        </h1>

        <ul id="comments-list" className="comments-list">
          <li>
            <div className="comment-main-level">
              {/* <!-- Avatar --> */}
              <div className="comment-avatar">
                <img
                  src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                  alt=""
                />
              </div>
              {/* <!-- Contenedor del Comentario --> */}
              <div className="comment-box">
                <div className="comment-head">
                  <h6 className="comment-name by-author">
                    <a href="http://creaticode.com/blog">Agustin Ortiz</a>
                  </h6>
                  <span>hace 20 minutos</span>
                  <i className="fa fa-reply"></i>
                  <i className="fa fa-heart"></i>
                </div>
                <div className="comment-content">
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* <!-- Respuestas de los comentarios --> */}
            <ul className="comments-list reply-list">
              <li>
                {/* <!-- Avatar --> */}
                <div className="comment-avatar">
                  <img
                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                    alt=""
                  />
                </div>
                {/* <!-- Contenedor del Comentario --> */}
                <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name">
                      <a href="http://creaticode.com/blog">Lorena Rojero</a>
                    </h6>
                    <span>hace 10 minutos</span>
                    <i className="fa fa-reply"></i>
                    <i className="fa fa-heart"></i>
                  </div>
                  <div className="comment-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit omnis animi et iure laudantium vitae, praesentium
                    optio, sapiente distinctio illo?
                    <div>
                      {" "}
                      {store.comment.map((comment) => {
                        return <div key={comment.id}> {comment.text} </div>;
                      })}{" "}
                    </div>
                  </div>
                </div>
              </li>

              <li>
                {/* <!-- Avatar --> */}
                <div className="comment-avatar">
                  <img
                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                    alt=""
                  />
                </div>
                {/* <!-- Contenedor del Comentario --> */}
                <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name by-author">
                      <a href="http://creaticode.com/blog">Agustin Ortiz</a>
                    </h6>
                    <span>hace 10 minutos</span>
                    <i className="fa fa-reply"></i>
                    <i className="fa fa-heart"></i>
                  </div>
                  <div className="comment-content">
                    <button
                      onClick={() => {
                        actions.addComment(group_id, comment);
                      }}
                    >
                      HOLA SOY EL BOTON
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div className="comment-main-level">
              {/* <!-- Avatar --> */}
              <div className="comment-avatar">
                <img
                  src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                  alt=""
                />
              </div>
              {/* <!-- Contenedor del Comentario --> */}
              <div className="comment-box">
                <div className="comment-head">
                  <h6 className="comment-name">
                    <a href="http://creaticode.com/blog">Lorena Rojero</a>
                  </h6>
                  <span>hace 10 minutos</span>
                  <i className="fa fa-reply"></i>
                  <i className="fa fa-heart"></i>
                </div>
                <div className="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit omnis animi et iure laudantium vitae, praesentium optio,
                  sapiente distinctio illo?
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
