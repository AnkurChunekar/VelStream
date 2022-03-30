export const checkIfVideoInPlaylist = (playlists, videoId, playlistId) => {
    const findPlaylist = playlists.find((item) => item._id === playlistId);
    if (findPlaylist) {
      return findPlaylist.videos.findIndex((item) => item._id === videoId) ===
        -1
        ? false
        : true;
    } else {
      return false;
    }
  };
