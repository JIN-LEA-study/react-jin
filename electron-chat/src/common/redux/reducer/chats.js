const initialState = {
  items: [],
};

export default function chatReducer(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case "CHATS_FETCH_SUCCESS": {
      return {
        items: action.chats,
      };
    }
    default: {
      return state;
    }
  }
}
