import axios from "axios";

const removeFromHistoryService = async ({ video, token, historyDispatch }) => {
  try {
    const response = await axios.delete(`/api/user/history/${video._id}`, {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200) {
      historyDispatch({ type: "UPDATE_HISTORY", payload: response.data.history });
    } else {
      throw new Error(`Error Occured!, Please Try Again`);
    }
  } catch (error) {
    alert(error);
  }
};

export { removeFromHistoryService };
