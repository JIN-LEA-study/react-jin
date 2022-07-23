import * as api from "../../utils/chats";

export const fetchChats = () => {
  return async function (dispatch) {
    const chats = await api.fetchChats();
  };
};
