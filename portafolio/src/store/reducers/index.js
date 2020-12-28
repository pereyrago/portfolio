const initialState = {
  nocturneMode: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NOCTURNE_MODE": {
      return {
        ...state,
        nocturneMode: !state.nocturneMode,
      };
    }

    default:
      return state;
  }
}
