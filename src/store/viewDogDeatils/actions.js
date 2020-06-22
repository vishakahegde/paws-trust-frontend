import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading } from "../appState/actions";
import axios from "axios";

export const dogDetailFetched = (dogDetail) => {
  return {
    type: "DOG_DEATIL_FETCHED",
    payload: dogDetail,
  };
};

export const fetchDogDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const res = await axios.get(`${apiUrl}/dogs/${id}`);
    dispatch(dogDetailFetched(res.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.error(error);
  }
};
