import { useState } from "react";
import { useAuth, useComments } from "../../context";
import { addCommentService, deleteCommentService } from "../../services";
import userAvatar from "../../assets/user-avatar.jpg";
import { toast } from "react-toastify";

/* 
      <div className="comment-card">
        <div className="input-wrapper flex ai-start cgap-1rem m-xxs mrl0">
          <img src={userAvatar} alt="user avatar" className="user-avatar" />
          <div className="flex flex-column ">
            <p className="gray-text">Guest User</p>
            <p>This is a great video. I Like movies.</p>
          </div>
        </div>
      </div>

*/

function CommentCard({ comment, token, commentsDispatch, videoId }) {
  const deleteCommentHandler = () => {
    console.log("handler");
    deleteCommentService(token, videoId, comment, commentsDispatch);
  };

  return (
    <div className="comment-card">
      <div className="input-wrapper flex ai-center cgap-1rem m-xxs mrl0">
        <img src={userAvatar} alt="user avatar" className="user-avatar" />
        <div className="flex flex-column ">
          <p className="gray-text">{comment.name}</p>
          <p>{comment.comment}</p>
        </div>
        <button onClick={deleteCommentHandler} className="delete-btn">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export function VideoComments({ videoId }) {
  const [inputText, setInputText] = useState("");
  const { commentsDispatch } = useComments();
  const {
    authState: { user, token },
  } = useAuth();

  const {
    commentsState: { comments },
  } = useComments();

  const currVideoComments = comments.find((item) => item._id === videoId);

  const addCommentHandler = () => {
    if (token) {
      if (inputText.trim() !== "") {
        addCommentService(
          token,
          videoId,
          { comment: inputText, name: `${user.firstName} ${user.lastName}` },
          commentsDispatch
        );
        setInputText("");
      }
    } else {
      toast.error("Please Login");
      setInputText("");
    }
  };

  return (
    <div className="video-comments p-md1 p-rl0">
      <h2 className="fs-4 fw-400">Comments</h2>

      <div className="add-comment-box flex flex-column rgap-1rem">
        <div className="input-wrapper flex ai-center cgap-1rem">
          <img src={userAvatar} alt="user avatar" className="user-avatar" />
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            id="note-title"
            placeholder="Add a public comment..."
            name="title"
            className="input p-xxs m-xxxs m-rl0 bd-rad-sm"
          />
        </div>
        {inputText.trim() !== "" ? (
          <div className="flex ai-center jc-end c-gap-1rem">
            <button
              onClick={() => setInputText("")}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button onClick={addCommentHandler} className="btn btn-primary">
              Comment
            </button>
          </div>
        ) : null}
      </div>

      {/* Comments */}
      <div className="flex rgap-1rem flex-column">
        {currVideoComments
          ? currVideoComments.vidComments.map((item) => (
              <CommentCard
                videoId={videoId}
                token={token}
                commentsDispatch={commentsDispatch}
                comment={item}
                key={item._id}
              />
            ))
          : null}
      </div>
    </div>
  );
}
