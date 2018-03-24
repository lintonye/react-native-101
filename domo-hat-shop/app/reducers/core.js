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

const clonePosesWithHatStyle = (poses, poseToUpdate, hatStyle) =>
  poses.map(pose => {
    // TODO: maybe should use id of pose
    if (pose.uri === poseToUpdate.uri) {
      return { ...pose, hatStyle };
    } else return pose;
  });

const cloneWithInsert = (array, index, itemToInsert) => [
  ...array.slice(0, index),
  itemToInsert,
  ...array.slice(index)
];

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
      state = {
        ...state,
        poses: cloneWithInsert(state.poses, state.poseIndex, createPose(action))
      };
      break;
    case "CONFIRM_HAT_FITTING":
      state = {
        ...state,
        poses: clonePosesWithHatStyle(state.poses, action.pose, action.hatStyle)
      };
  }
  return state;
};

export default reducer;
