import axios from "axios";

const addToHistoryService = async ({ video, token, historyDispatch }) => {
    try {
        const response = await axios.post(
            "/api/user/history",
            { video },
            {
              headers: { authorization: token },
            }
          );
          if (response.status === 201) {
            historyDispatch({ type: "UPDATE_HISTORY", payload: response.data.history });
          } else {
            throw new Error(`Error Occured!, Status Code: ${response.status}`);
          }
    } catch (error) {
        alert(error);
    }
    
  };


export { addToHistoryService };
