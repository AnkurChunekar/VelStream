import { toast } from "react-toastify";
import axios from "axios";

export const editCommentService = async (
  token,
  videoId,
  comment,
  commentsDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/comments/update/${videoId}`,
      { comment },
      { headers: { authorization: token } }
    );

    if (response.status === 201) {
      commentsDispatch({
        type: "UPDATE_COMMENTS",
        payload: response.data.comments,
      });
      toast.success("Comment Edited successfully");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error Occured, please try again!");
  }
};
