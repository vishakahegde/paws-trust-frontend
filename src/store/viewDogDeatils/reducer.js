const initialState = {};

export default function DogDetailReducer(state = initialState, action) {
  switch (action.type) {
    case "DOG_DEATIL_FETCHED": {
      const newState = { ...action.payload };
      return newState;
    }
    default: {
      return state;
    }
  }
}
