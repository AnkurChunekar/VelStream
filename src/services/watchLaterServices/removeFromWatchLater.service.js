import axios from "axios";

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
      watchLaterDispatch({ type: "UPDATE_WATCHLATER", payload: response.data.watchlater });
    } else {
      throw new Error(`Error Occured!, Status Code: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
};

export { removeFromWatchLaterService };
