import { checkIfItemInArrOfObj } from "./utilityHelpers";
import { removeFromLikesService, addToLikesService } from "../services";

const likeToggleClickHandler = ({
  user,
  video,
  token,
  likeDispatch,
  likeData,
  setIsVideoMenuVisible = () => {},
  navigate
}) => {
  const videoInLike = checkIfItemInArrOfObj(
    likeData,
    (item) => item._id === video._id
  );

  setIsVideoMenuVisible(false);
  if (user) {
    if (videoInLike) {
      removeFromLikesService({ video, token, likeDispatch });
    } else {
      addToLikesService({ video, token, likeDispatch });
    }
  } else {
    navigate("/login");
  }
};

export { likeToggleClickHandler };
