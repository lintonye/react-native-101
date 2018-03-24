import { ImagePicker } from "expo";
import NavigationService from "../NavigationService";

export const switchHat = index => ({ type: "SWITCH_HAT", index });

export const switchPose = index => ({ type: "SWITCH_POSE", index });

export const pickImage = () => async (dispatch, getState) => {
  try {
    const {
      cancelled,
      uri,
      width,
      height,
      type
    } = await ImagePicker.launchImageLibraryAsync();
    dispatch(
      cancelled
        ? { type: "IMAGE_PICKER_CANCELED" }
        : { type: "IMAGE_PICKED", uri, width, height }
    );
    if (!cancelled) {
      NavigationService.navigate("HatFitter", { uri, width, height });
    }
  } catch (error) {
    dispatch({ type: "IMAGE_PICKER_ERROR", error });
  }
};

export const takePhoto = () => async (dispatch, getState) => {
  try {
    const {
      cancelled,
      uri,
      width,
      height,
      type
    } = await ImagePicker.launchCameraAsync();
    dispatch(
      cancelled
        ? { type: "PHOTO_TAKER_CANCELED" }
        : { type: "PHOTO_TAKEN", uri, width, height }
    );
  } catch (error) {
    dispatch({ type: "IMAGE_PICKER_ERROR", error });
  }
};
