import axios from "axios";
import { toast } from "react-toastify";

const removeFromLikesService = async ({ video, token, likeDispatch }) => {
  try {
    const response = await axios.delete(`/api/user/likes/${video._id}`, {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200) {
      likeDispatch({ type: "UPDATE_LIKES", payload: response.data.likes });
      toast.error("Removed From Likes");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { removeFromLikesService };
