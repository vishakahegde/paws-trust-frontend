import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

export const listOfDogs = (dogs) => {
  return {
    type: "DOGS_FETCHED",
    payload: dogs,
  };
};

export const fetchDogs = () => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const res = await axios(`${apiUrl}/dogs`);
    dispatch(listOfDogs(res.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.error(error);
  }
};
