import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth, useLike, useWatchLater, useHistory } from "../../context";
import { addToHistoryService, getDataService } from "../../services";
import {
  checkIfItemInArrOfObj,
  likeToggleClickHandler,
  watchLaterToggleHandler,
} from "../../helpers";
import { Drawer, PlaylistModal, CircularLoader } from "../../components";
import { VideoNotes } from "./VideoNotes";
import "./SingleVideoPage.css";

export function SingleVideoPage() {
  const [videoData, setVideoData] = useState(false);
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
  const { videoID } = useParams();
  const {
    authState: { user, token },
  } = useAuth();

  const {
    likeState: { likeData },
    likeDispatch,
  } = useLike();

  const {
    watchLaterState: { watchLaterData },
    watchLaterDispatch,
  } = useWatchLater();

  const {
    historyState: { historyData },
    historyDispatch,
  } = useHistory();

  const navigate = useNavigate();

  useEffect(() => {
    getDataService(`/api/video/${videoID}`, (response) =>
      setVideoData(response.data.video)
    );
  }, [videoID]);

  useEffect(() => {
    if (user && videoData) {
      addToHistoryService({
        video: videoData,
        token,
        historyDispatch,
        historyData,
      });
    }
  }, [historyDispatch, user, token, videoData, historyData]);

  // like functionalities

  const videoInLike = checkIfItemInArrOfObj(
    likeData,
    (item) => item._id === videoData._id
  );

  const handleLikeClick = () => {
    likeToggleClickHandler({
      user,
      token,
      likeData,
      likeDispatch,
      video: videoData,
      navigate,
    });
  };

  // Watch later functionalities

  const videoInWatchlater = checkIfItemInArrOfObj(
    watchLaterData,
    (item) => item._id === videoData._id
  );

  const handleWatchLaterClick = () => {
    watchLaterToggleHandler({
      user,
      token,
      watchLaterData,
      watchLaterDispatch,
      video: videoData,
      navigate,
    });
  };

  // Playlist functionalities

  const handleSaveToPlaylistClick = () => {
    setIsPlaylistModalVisible(true);
  };

  return (
    <main className="flex page-container">
      <Drawer />

      {videoData ? (
        <div className="single-video-page">
          <div className="video-screen flex flex-column">
            <div className="iframe-wrapper">
              <iframe
                className="iframe"
                src={`https://www.youtube.com/embed/${videoData.youtubeID}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-details">
              <p className="m-xxs m-rl0 fs-6 primary-color-text">
                #{videoData.channelName} #{videoData.category}
              </p>
              <h2 className="fs-4 m-xxs m-rl0 fw-400">{videoData.title}</h2>
              <div className="m-xxs m-rl0 flex ai-center jc-space-b flex-wrap">
                <div className="gray-text fs-14px">
                  {videoData.views} Views | {videoData.likes} Likes
                </div>
                <div className="actions flex c-gap-1rem">
                  <button
                    onClick={handleLikeClick}
                    className={`tooltip top btn-unset m-xxs m-tb0 ${
                      videoInLike ? "active" : ""
                    }`}
                  >
                    <span className="tooltip-text">Like</span>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </button>

                  <button
                    onClick={handleWatchLaterClick}
                    className={`tooltip top btn-unset m-xxs m-tb0 ${
                      videoInWatchlater ? "active" : ""
                    }`}
                  >
                    <span className="tooltip-text">Later</span>
                    <i className="fa-solid fa-bookmark"></i>
                  </button>

                  <button
                    onClick={handleSaveToPlaylistClick}
                    className="tooltip top btn-unset m-xxs m-tb0"
                  >
                    <span className="tooltip-text">Save</span>
                    <i className="fa-solid fa-list-check"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex ai-center m-s m-rl0 channel-details">
              <img
                className="profile-pic"
                src={videoData.channelThumbnail}
                alt="profile"
              />
              <span className="m-xxs m-tb0"> {videoData.channelName} </span>
            </div>
          </div>

          <VideoNotes />
        </div>
      ) : (
        <div className="loader-container">
          <CircularLoader />
        </div>
      )}
      {isPlaylistModalVisible ? (
        <PlaylistModal
          setIsPlaylistModalVisible={setIsPlaylistModalVisible}
          playlistModalVideo={videoData}
        />
      ) : null}
    </main>
  );
}
