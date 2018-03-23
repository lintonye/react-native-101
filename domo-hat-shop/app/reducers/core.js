import { manyHats, poses } from "../../Data";

const initialState = {
  hats: manyHats,
  poses,
  index: 0,
  poseIndex: 0
};

const createPose = action => {
  return { name: "photo", uri: action.uri };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_HAT":
      state = { ...state, index: action.index };
      break;
    case "SWITCH_POSE":
      state = { ...state, poseIndex: action.index };
      break;
    case "IMAGE_PICKED":
    case "PHOTO_TAKEN":
      state = { ...state, poses: [createPose(action), ...state.poses] };
      break;
  }
  return state;
};

export default reducer;
