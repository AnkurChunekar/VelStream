import axios from "axios";
import { toast } from "react-toastify";

const clearAllHistoryService = async ({ token, historyDispatch }) => {
  try {
    const response = await axios.delete("/api/user/history/all", {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      historyDispatch({
        type: "UPDATE_HISTORY",
        payload: response.data.history,
      });
      toast.success("Cleared All History!");
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};

export { clearAllHistoryService };
