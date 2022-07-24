import * as api from "../../utils/chats";

// Actions
const LOAD = "chats/LOAD";

const initialState = {
  items: [],
};

// Action Creators
export const loadChat = chats => {
  return { type: LOAD, chats };
};

// Middle
export const loadChatFB = items => {
  return function (dispatch) {
    api.fetchChats().then(items => dispatch(loadChat(items)));
  };
};

// Reducer
export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case "chats/LOAD": {
      // console.log(action.chats);
      return {
        items: action.chats,
      };
    }
    default: {
      return state;
    }
  }
}
