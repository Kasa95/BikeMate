import React, { useContext, useEffect } from "react";
import { CommentSection } from "react-comments-section";
import { Context } from "../store/appContext";
import "./../../styles/comments.css";

const Commentsection = ({ group_id }) => {
  const { store, actions } = useContext(Context);

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
  console.log(store.profile);
  const customNoComment = () => (
    <div className="no-com">Sheessh! Zero Comments posted here!</div>
  );

  useEffect(() => {
    actions.getComment(group_id);
  }, []);
  return (
    <>
      <CommentSection
        currentUser={{
          currentUserId: store.profile.id,
          currentUserImg: `https://ui-avatars.com/api/name=${store.profile.name}&background=random`,
          currentUserProfile: null,
          currentUserFullName: store.profile.name,
        }}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/",
        }}
        commentData={data}
        onSubmitAction={(data) => actions.addComment(group_id, data)}
        customNoComment={() => customNoComment()}
        onDeleteAction={(data) => console.log(data)}
        currentData={(data) => {
          console.log("curent data", data);
        }}
        // onEditAction={() => actions.addComment(1, store.comment[0].text)}
      />
    </>
  );
};

export default Commentsection;
