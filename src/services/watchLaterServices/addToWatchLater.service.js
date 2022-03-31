import axios from "axios";

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
      watchLaterDispatch({ type: "UPDATE_WATCHLATER", payload: response.data.watchlater });
    } else {
      throw new Error(`Error Occured!, Status Code: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
};

export { addToWatchLaterService };
