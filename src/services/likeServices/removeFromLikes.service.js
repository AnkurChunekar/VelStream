import axios from "axios";

const removeFromLikesService = async ({ video, token, likeDispatch }) => {
  try {
    const response = await axios.delete(`/api/user/likes/${video._id}`, {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200) {
      likeDispatch({ type: "UPDATE_LIKES", payload: response.data.likes });
    } else {
      throw new Error(`Error Occured!, Status Code: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
};

export { removeFromLikesService };
