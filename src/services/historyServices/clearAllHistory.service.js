import axios from "axios";

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
    } else {
      throw new Error(`Error Occured!, Status Code: ${response.status}`);
    }
  } catch (error) {
    alert(error);
  }
};

export { clearAllHistoryService };
