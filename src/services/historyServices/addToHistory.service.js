import axios from "axios";
import { checkIfItemInArrOfObj } from "../../helpers";

const addToHistoryService = async ({
  video,
  token,
  historyDispatch,
  historyData,
}) => {
  const videoInHistory = checkIfItemInArrOfObj(
    historyData,
    (item) => item._id === video._id
  );

  if (!videoInHistory) {
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 201) {
        historyDispatch({
          type: "UPDATE_HISTORY",
          payload: response.data.history,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export { addToHistoryService };
