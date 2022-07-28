import React, { useContext, useEffect } from "react";
import { CommentSection } from "react-comments-section";
import { Context } from "../store/appContext";
import "./../../styles/comments.css";

const Commentsection = () => {
  const { store, actions } = useContext(Context);
  console.log(store.comment);

  const data = store.comment.map((item) => {
    return {
      userId: item.user_id,
      comId: item.id,
      fullName: item.username_comment,
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: item.text,
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    };
  });

  useEffect(() => {
    actions.getComment(1);
  }, []);
  return (
    <>
      <CommentSection
        currentUser={{
          currentUserId: "1",
          currentUserImg:
            "https://ui-avatars.com/api/name=Riya&background=random",
          currentUserProfile:
            "https://www.linkedin.com/in/riya-negi-8879631a9/",
          currentUserFullName: "Carlos",
        }}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/",
        }}
        commentData={data}
        onSubmitAction={(data) => console.log("check submit, ", data)}
        currentData={(data) => {
          console.log("curent data", data);
        }}
      />
    </>
  );
};

export default Commentsection;
