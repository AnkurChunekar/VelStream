import axios from "axios";
import { toast } from "react-toastify";

const getDataService = async (url, setterFn, setIsLoading) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      setterFn(response);
    } else {
      throw new Error("Error Occured, Please Try Again");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

export { getDataService };
