import axios from "axios";
import { toast } from "react-toastify";

const addToPlaylistService = async ({
  video,
  token,
  playlistDispatch,
  playlistId,
}) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_TO_PLAYLISTS",
        payload: response.data.playlist,
      });
      toast.success("Added To Playlist!");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { addToPlaylistService };
