import axios from "axios";
import { toast } from "react-toastify";

export const signupService = async (userData, authDispatch, navigate) => {
  try {
    const { firstName, lastName, email, password } = userData;

    const response = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });

    switch (response.status) {
      case 201:
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        authDispatch({
          type: "SIGN_UP",
          payload: {
            user: response.data.createdUser,
            token: response.data.encodedToken,
          },
        });
        toast.success("Signup Successfull!");
        navigate("/");
        break;
      case 422:
        throw new Error("User already exists");
      case 500:
        throw new Error("Server Error");
      default:
        throw new Error("Unknown Error Occured.");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
    console.error(error);
  }
};
