import axios from "axios";
import { toast } from "react-toastify";

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
      toast.error("Playlist has Been Deleted");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { deletePlaylistService };
