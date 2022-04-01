import { checkIfItemInArrOfObj } from "./utilityHelpers";
import { addToWatchLaterService, removeFromWatchLaterService } from "../services";

const watchLaterToggleClickHandler = ({
  user,
  video,
  token,
  watchLaterDispatch,
  watchLaterData,
  setIsVideoMenuVisible = () => {},
  navigate,
}) => {
  const videoInWatchlater = checkIfItemInArrOfObj(
    watchLaterData,
    (item) => item._id === video._id
  );

  setIsVideoMenuVisible(false);

  if (user) {
    if (!videoInWatchlater) {
      addToWatchLaterService({ video, token, watchLaterDispatch });
    } else {
      removeFromWatchLaterService({ video, token, watchLaterDispatch });
    }
  } else {
    navigate("/login");
  }
};

export { watchLaterToggleClickHandler };
