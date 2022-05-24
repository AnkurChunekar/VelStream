import { useState } from "react";
import { useAuth, useComments } from "../../context";
import {
  addCommentService,
  deleteCommentService,
  editCommentService,
} from "../../services";
import userAvatar from "../../assets/user-avatar.jpg";
import { toast } from "react-toastify";

function CommentCard({ commentData, token, commentsDispatch, videoId }) {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentCommentId, setCurrentCommentId] = useState("");

  const deleteCommentHandler = () => {
    setIsMenuOpen(false);
    deleteCommentService(token, videoId, commentData, commentsDispatch);
  };

  const updateCommentHandler = () => {
    if (token) {
      if (editText.trim() !== "" && editText !== commentData.text) {
        editCommentService(
          token,
          videoId,
          { ...commentData, text: editText},
          commentsDispatch
        );

        setEditText("");
      }
    } else {
      toast.error("Please Login");
    }
    setEditMode(false);
  };

  return (
    <div className="comment-card">
      <div className="input-wrapper flex ai-start cgap-1rem m-xxs mrl0">
        <img src={userAvatar} alt="user avatar" className="user-avatar" />
        <div className="flex flex-column w-100pc">
          <p className="gray-text">{commentData.username}</p>
          {editMode ? (
            <div className="input-wrapper flex flex-column ai-center rgap-1rem">
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                type="text"
                id="note-title"
                placeholder="Add a public comment..."
                name="title"
                className="input p-xxs m-xxxs m-rl0 bd-rad-sm"
              />
              <div className="flex ai-center jc-end c-gap-1rem w-100pc">
                <button
                  onClick={() => setEditMode(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={updateCommentHandler}
                  className="btn btn-primary"
                >
                  Comment
                </button>
              </div>
            </div>
          ) : (
            <p>{commentData.text}</p>
          )}
        </div>

        {editMode ? null : (
          <button
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
              setCurrentCommentId(commentData._id);
            }}
            className="delete-btn"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        )}

        {/* Menu */}
        {isMenuOpen && commentData._id === currentCommentId ? (
          <div className="comment-menu">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setEditMode(true);
                setEditText(commentData.text);
              }}
              className="btn-unset"
            >
              Edit
            </button>
            <button onClick={deleteCommentHandler} className="btn-unset">
              Delete
            </button>
          </div>
        ) : null}
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
          { text: inputText, username: `${user.firstName} ${user.lastName}` },
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
                commentData={item}
                key={item._id}
              />
            ))
          : null}
      </div>
    </div>
  );
}
