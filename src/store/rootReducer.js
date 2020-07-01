import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import ListOfDogsReducer from "./listOfDogs/reducer";
import DogDetailReducer from "./viewDogDeatils/reducer";

export default combineReducers({
  appState,
  user,
  listOfDogs: ListOfDogsReducer,
  dogDetails: DogDetailReducer,
});
