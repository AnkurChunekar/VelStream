import { toast } from "react-toastify";
import axios from "axios";

export const addCommentService = async (
  token,
  videoId,
  comment,
  commentsDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/comments/${videoId}`,
      { comment },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      commentsDispatch({
        type: "UPDATE_COMMENTS",
        payload: response.data.comments,
      });
      toast.success("Comment added successfully");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error Occured, please try again!");
  }
};
