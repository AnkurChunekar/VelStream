import axios from "axios";

  const getDataService = async (url, setterFn) => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setterFn(response);
      } else {
        throw new Error("Error Occured, Please Try Again");
      }
    } catch (error) {
      alert(error);
    }
  };

  export {getDataService};
