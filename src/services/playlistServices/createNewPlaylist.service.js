import axios from "axios";
import { toast } from "react-toastify";

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
      toast.success("New Playlist Created!");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { createNewPlaylistService };
