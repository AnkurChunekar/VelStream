import axios from "axios";

const addToPlaylistService = async ({
  video,
  token,
  playlistDispatch,
  playlistId
}) => {
  try {
    const response = await axios.post(`/api/user/playlists/${playlistId}`, {video}, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_TO_PLAYLISTS",
        payload: response.data.playlist,
      });
    } else {
      throw new Error(`Error Occured!, Status Code: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
};

export { addToPlaylistService };
