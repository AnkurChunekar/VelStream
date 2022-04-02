import axios from "axios";

const removeFromPlaylistService = async ({
  video,
  token,
  playlistDispatch,
  playlistId
}) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}/${video._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLISTS",
        payload: response.data.playlist,
      });
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    alert(error);
  }
};

export { removeFromPlaylistService };
