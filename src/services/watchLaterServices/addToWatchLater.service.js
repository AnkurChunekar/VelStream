import axios from "axios";
import { toast } from "react-toastify";

const addToWatchLaterService = async ({ video, token, watchLaterDispatch }) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      watchLaterDispatch({
        type: "UPDATE_WATCHLATER",
        payload: response.data.watchlater,
      });
      toast.success("Added to Watch Later");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { addToWatchLaterService };
