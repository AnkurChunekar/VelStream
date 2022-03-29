import axios from "axios";

const addToLikesService = async ({ video, token, likeDispatch }) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      likeDispatch({ type: "UPDATE_LIKES", payload: response.data.likes });
    } else {
      throw new Error(`Error Occured!, Status Code: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
};

export { addToLikesService };
