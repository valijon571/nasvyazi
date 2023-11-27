const INITIAL_STATE = {
  profile: {},
  reviews: [],
};
const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profile: [...state.profile, action.payload],
      };
    case "SET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};
export default reducers;
