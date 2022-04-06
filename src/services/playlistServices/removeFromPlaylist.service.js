import axios from "axios";
import { toast } from "react-toastify";

const removeFromPlaylistService = async ({
  video,
  token,
  playlistDispatch,
  playlistId,
}) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLISTS",
        payload: response.data.playlist,
      });
      toast.error("Video Removed from Playlist");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { removeFromPlaylistService };
