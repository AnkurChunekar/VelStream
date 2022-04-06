import axios from "axios";
import { toast } from "react-toastify";

const removeFromWatchLaterService = async ({
  video,
  token,
  watchLaterDispatch,
}) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      watchLaterDispatch({
        type: "UPDATE_WATCHLATER",
        payload: response.data.watchlater,
      });
      toast.error("Removed From Watch Later!");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { removeFromWatchLaterService };
