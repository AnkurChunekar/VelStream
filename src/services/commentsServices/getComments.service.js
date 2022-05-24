import axios from "axios";
import { toast } from "react-toastify";

const getCommentsService = async (token, commentsDispatch) => {
  try {
    const response = await axios.get("/api/user/comments", {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      commentsDispatch({
        type: "UPDATE_COMMENTS",
        payload: response.data.comments,
      });
    }
  } catch (error) {
    console.error(error);
    toast.error("Error Occured, Please try again!");
  }
};

export { getCommentsService };
