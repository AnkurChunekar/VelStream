import axios from "axios";

const deletePlaylistService = async ({
  token,
  playlistDispatch,
  playlistId,
}) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      playlistDispatch({
        type: "UPDATE_PLAYLISTS",
        payload: response.data.playlists,
      });
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    alert(error);
  }
};

export { deletePlaylistService };
