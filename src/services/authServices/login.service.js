import axios from "axios";
import { toast } from "react-toastify";

export const loginService = async ({
  userData,
  authDispatch,
  navigate,
  likeDispatch,
  playlistDispatch,
  watchLaterDispatch,
  historyDispatch
}) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: userData.email,
      password: userData.password,
    });
    
    switch (response.status) {
      case 200:
        localStorage.setItem("token", response.data.encodedToken);
        authDispatch({
          type: "LOGIN",
          payload: {
            user: response.data.foundUser,
            token: response.data.encodedToken,
          },
        });
        likeDispatch({
          type: "UPDATE_LIKES",
          payload: response.data.foundUser.likes,
        });
        playlistDispatch({
          type: "UPDATE_PLAYLISTS",
          payload: response.data.foundUser.playlists,
        })
        watchLaterDispatch({
          type: "UPDATE_WATCHLATER",
          payload: response.data.foundUser.watchlater,
        })
        historyDispatch({
          type: "UPDATE_HISTORY",
          payload: response.data.foundUser.history,
        })
        toast.success("Login Successfull!");
        navigate("/");
        break;
      case 404:
        throw new Error("Invalid Email ID");
      case 401:
        throw new Error("Incorrect password");
      case 500:
        throw new Error("Error occured while getting response from server");
      default:
        throw new Error("Unknown Error Occured.");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
console.error(error);
  }
};
