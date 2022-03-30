import axios from "axios";

const createNewPlaylistService = async ({
  requestBody,
  token,
  playlistDispatch,
}) => {
  try {
    const response = await axios.post(`/api/user/playlists`, requestBody, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 201) {
      playlistDispatch({
        type: "UPDATE_PLAYLISTS",
        payload: response.data.playlists,
      });
    } else {
      throw new Error(`Error Occured!, Status Code: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
};

export { createNewPlaylistService };
