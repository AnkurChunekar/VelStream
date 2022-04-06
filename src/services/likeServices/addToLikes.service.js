import axios from "axios";
import { toast } from "react-toastify";

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
      toast.success("Added To Likes");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { addToLikesService };
