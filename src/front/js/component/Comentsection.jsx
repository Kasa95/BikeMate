import React from "react";
import { CommentSection } from "react-comments-section";
import "./../../styles/comments.css";

const Commentsection = () => {
  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "Lily",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "I think you have a point🤔",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    },
  ];
  return (
    <CommentSection
      currentUser={{
        currentUserId: "01a",
        currentUserImg:
          "https://ui-avatars.com/api/name=Riya&background=random",
        currentUserProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
        currentUserFullName: "Riya Negi",
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
  );
};

export default Commentsection;
