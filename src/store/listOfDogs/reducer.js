const initialState = [];

export default function ListOfDogsReducer(state = initialState, action) {
  switch (action.type) {
    case "DOGS_FETCHED": {
      const newState = [...action.payload];
      return newState;
    }
    default:
      return state;
  }
}
