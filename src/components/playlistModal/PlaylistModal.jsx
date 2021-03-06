import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createNewPlaylistService,
  addToPlaylistService,
  removeFromPlaylistService,
} from "../../services";
import { usePlaylist, useAuth, useWatchLater } from "../../context";
import {
  checkIfItemInArrOfObj,
  watchLaterToggleHandler,
  checkIfVideoInPlaylist,
} from "../../helpers";
import "./PlaylistModal.css";

export function PlaylistModal({
  setIsPlaylistModalVisible,
  playlistModalVideo,
}) {
  const [createPlaylistInpVisible, setCreatePlaylistInpVisible] =
    useState(false);

  const navigate = useNavigate();

  const [newPlaylistData, setNewPlaylistData] = useState({
    title: "",
    descripton: "Some Dummy desc",
  });

  const {
    playlistDispatch,
    playlistState: { playlists },
  } = usePlaylist();

  const {
    watchLaterState: { watchLaterData },
    watchLaterDispatch,
  } = useWatchLater();

  const {
    authState: { user, token },
  } = useAuth();

  const handleClosePlaylistModalClick = () => {
    setIsPlaylistModalVisible(false);
    setCreatePlaylistInpVisible(false);
  };

  const handleCreatePlaylistClick = (e) => {
    if (!createPlaylistInpVisible) {
      setCreatePlaylistInpVisible(true);
    }

    if (
      newPlaylistData.title.trim() !== "" &&
      playlists.findIndex((item) => item.title === newPlaylistData.title) === -1
    ) {
      const requestBody = { playlist: newPlaylistData };
      createNewPlaylistService({
        requestBody,
        token,
        playlistDispatch,
      });
      setNewPlaylistData({ title: "", descripton: "Some Dummy desc" });
    }
  };

  const handleNewPlaylistDataChange = (e) => {
    setNewPlaylistData((data) => ({ ...data, title: e.target.value }));
  };

  const handlePlaylistCheckboxClick = (e) => {
    if (e.target.checked) {
      addToPlaylistService({
        token,
        video: playlistModalVideo,
        playlistId: e.target.id,
        playlistDispatch,
      });
    } else {
      removeFromPlaylistService({
        token,
        video: playlistModalVideo,
        playlistId: e.target.id,
        playlistDispatch,
      });
    }
  };

  // Watchlater
  const videoInWatchlater = checkIfItemInArrOfObj(
    watchLaterData,
    (item) => item._id === playlistModalVideo._id
  );

  const handleWatchLaterClick = () => {
    watchLaterToggleHandler({
      user,
      token,
      watchLaterData,
      watchLaterDispatch,
      video: playlistModalVideo,
      navigate,
    });
  };

  return (
    <div onClick={handleClosePlaylistModalClick} className="playlist-modal flex flex-center">
      <div onClick={(e) => e.stopPropagation()} className="modal m-md1 p-xs">
        <header className="p-xs">
          <div className="modal-title fs-4"> Save to... </div>
          <button
            onClick={handleClosePlaylistModalClick}
            className="fs-4 transparent-bg close-btn"
          >
            <i className="fas fa-times"></i>
          </button>
        </header>
        <section className="modal-body">
          <div className="input-wrapper checkbox">
            <input
              checked={videoInWatchlater ? true : false}
              onChange={handleWatchLaterClick}
              type="checkbox"
              id="watch-later"
            />
            <label htmlFor="watch-later" className="m-xxs m-tb0">
              Watch Later
            </label>
          </div>

          {playlists.length > 0
            ? playlists.map((item) => (
                <div key={item._id} className="input-wrapper checkbox">
                  <input
                    type="checkbox"
                    id={item._id}
                    onChange={handlePlaylistCheckboxClick}
                    checked={checkIfVideoInPlaylist(
                      playlists,
                      playlistModalVideo._id,
                      item._id
                    )}
                  />
                  <label htmlFor={item._id} className="m-xxs m-tb0">
                    {item.title}
                  </label>
                </div>
              ))
            : null}
        </section>

        <footer className="p-xs">
          {createPlaylistInpVisible ? (
            <input
              className="p-xxs m-xxs m-rl0 transparent-bg create-playlist-input"
              type="text"
              id="name"
              placeholder="My Playlist"
              autoFocus
              onChange={handleNewPlaylistDataChange}
              value={newPlaylistData.title}
            />
          ) : null}

          <button onClick={handleCreatePlaylistClick}>
            <i className="fa-solid fa-plus"></i>
            <span className="m-xxs m-tb0"> Create New Playlist</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
